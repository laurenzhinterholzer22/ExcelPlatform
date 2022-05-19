import {Component, OnInit} from "@angular/core";
import {Account} from "../../core/auth/account.model";
import {AdminTask} from "../../admin/admin-task/admin-task.model";
import {ASC, DESC, ITEMS_PER_PAGE, SORT} from "../../config/pagination.constants";
import {AdminTaskService} from "../../admin/admin-task/service/admin-task.service";
import {AccountService} from "../../core/auth/account.service";
import {ActivatedRoute, Router} from "@angular/router";
import {NgbModal} from "@ng-bootstrap/ng-bootstrap";
import {HttpHeaders, HttpResponse} from "@angular/common/http";
import {combineLatest} from "rxjs";
import {UserTaskMeta} from "../user-task-meta.model";
import {UserTaskService} from "../user-task.service";
import {newArray} from "@angular/compiler/src/util";
import {date} from "@rxweb/reactive-form-validators";

@Component({
  selector: 'jhi-todo-tasks',
  templateUrl: './todo-tasks.component.html',
})
export class TodoTasksComponent implements OnInit {
  currentAccount: Account | null = null;
  adminTasks!: AdminTask[] | null;
  userTasksMeta: UserTaskMeta[] | null = null;
  adminTasksFiltered: AdminTask[] | undefined = undefined;
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
    this.adminTaskService
      .query({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe({
        next: (res: HttpResponse<AdminTask[]>) => {
          this.isLoading = false;
          this.onSuccessAdmin(res.body, res.headers);
        },
        error: () => (this.isLoading = false),
      });
    this.userTaskService
      .queryMeta({
        page: this.page - 1,
        size: this.itemsPerPage,
        sort: this.sort(),
      })
      .subscribe({
        next: (res: HttpResponse<UserTaskMeta[]>) => {
          this.isLoading = false;
          this.onSuccessUser(res.body, res.headers);
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

  private onSuccessAdmin(adminTasks: AdminTask[] | null, headers: HttpHeaders): void {
    this.totalItems = Number(headers.get('X-Total-Count'));
    this.adminTasks = adminTasks;
  }

  private onSuccessUser(userTasksMeta: UserTaskMeta[] | null, headers: HttpHeaders): void {
    this.userTasksMeta = userTasksMeta;
    const cId = this.currentAccount?.id;
    const userTasksAdminIds = userTasksMeta?.filter(function (data) {
      return data.user_id === cId;
    }).map(function (data) {
      return data.admin_task_id;
    });
    this.adminTasksFiltered = this.adminTasks?.filter(function (data) {
      return !userTasksAdminIds?.includes(data.id)
    });
  }

}
