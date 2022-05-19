import { Component, OnInit } from '@angular/core';
import { Account } from '../../core/auth/account.model';
import { AdminTask } from '../../admin/admin-task/admin-task.model';
import { ASC, DESC, ITEMS_PER_PAGE, SORT } from '../../config/pagination.constants';
import { UserTask } from '../user-task.model';
import { AdminTaskService } from '../../admin/admin-task/service/admin-task.service';
import { AccountService } from '../../core/auth/account.service';
import { ActivatedRoute, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { UserTaskService } from '../user-task.service';
import { combineLatest } from 'rxjs';
import { HttpHeaders, HttpResponse } from '@angular/common/http';
import { UserTaskMeta } from '../user-task-meta.model';

@Component({
  selector: 'jhi-done-tasks',
  templateUrl: './done-tasks.component.html',
})
export class DoneTasksComponent implements OnInit {
  currentAccount: Account | null = null;
  adminTasks: AdminTask[] | null = null;
  userTasks: UserTask[] | null = null;
  userTasksMeta: UserTaskMeta[] | null = null;
  isLoading = false;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;
  page!: number;
  predicate!: string;
  ascending!: boolean;

  constructor(
    private adminTaskService: AdminTaskService,
    private userTaskService: UserTaskService,
    private accountService: AccountService,
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private modalService: NgbModal
  ) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.handleNavigation();
  }

  loadAll(): void {
    this.isLoading = true;
    this.userTaskService
      .queryMeta({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe({
        next: (res: HttpResponse<UserTaskMeta[]>) => {
          this.isLoading = false;
          this.onSuccessMeta(res.body, res.headers);
        },
        error: () => (this.isLoading = false),
      });
    this.userTaskService
      .query({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe({
        next: (res: HttpResponse<UserTask[]>) => {
          this.isLoading = false;
          this.onSuccess(res.body, res.headers);
        },
        error: () => (this.isLoading = false),
      });
  }

  transition(): void {
    this.router.navigate(['./'], {
      relativeTo: this.activatedRoute.parent,
      queryParams: {
        page: this.page,
        sort: `${this.predicate},${this.ascending ? ASC : DESC}`,
      },
    });
  }

  private handleNavigation(): void {
    combineLatest([this.activatedRoute.data, this.activatedRoute.queryParamMap]).subscribe(([data, params]) => {
      const page = params.get('page');
      this.page = +(page ?? 1);
      const sort = (params.get(SORT) ?? data['defaultSort']).split(',');
      this.predicate = sort[0];
      this.ascending = sort[1] === ASC;
      this.loadAll();
    });
  }

  private sort(): string[] {
    const result = [`${this.predicate},${this.ascending ? ASC : DESC}`];
    if (this.predicate !== 'id') {
      result.push('id');
    }
    return result;
  }

  private onSuccessMeta(userTasksMeta: UserTaskMeta[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.userTasksMeta = userTasksMeta;
  }

  private onSuccess(userTasks: UserTask[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.userTasks = userTasks;
  }
}
