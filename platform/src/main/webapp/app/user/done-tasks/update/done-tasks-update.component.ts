import { Component, OnInit } from '@angular/core';
import {IUserTask, UserTask} from '../../user-task.model';
import { UserTaskService } from '../../user-task.service';
import { ActivatedRoute } from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { User } from '../../../admin/user-management/user-management.model';
import { numeric } from '@rxweb/reactive-form-validators';
import { UserTaskMeta } from '../../admin-task-meta.model';
import {AdminTask} from "../../../admin/admin-task/admin-task.model";
import {AdminTaskService} from "../../../admin/admin-task/service/admin-task.service";
import {Observable} from "rxjs";

@Component({
  selector: 'jhi-done-tasks-update',
  templateUrl: './done-tasks-update.component.html',
})
export class DoneTasksUpdateComponent implements OnInit {
  userTask!: UserTask;
  userTaskMeta!: UserTaskMeta;
  adminTask!: AdminTask;
  isSaving = false;
  authorities: string[] = [];
  submissionExcel = -1;

  editForm = this.fb.group({
    id: [],
  });

  constructor(private userTaskService: UserTaskService, private route: ActivatedRoute, private fb: FormBuilder,private adminTaskService: AdminTaskService ) {}

  ngOnInit(): void {
    this.route.data.subscribe(({ userTaskMeta }) => {
      if (userTaskMeta) {
        this.userTask = userTaskMeta;
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateUserTask(this.userTask);
    this.userTaskService.update(this.userTask).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  public handleFileAddedSubmissionExcel(fileId: number): void {
    this.submissionExcel = fileId;
  }

  public handleFileRemovedSubmissionExcel(fileId: number): void {
    this.submissionExcel = -1;
  }

  public handleFileMovedSubmissionExcel(oldFileId: number, newFileId: number): void {
    this.submissionExcel = newFileId;
  }

  private updateUserTask(userTask: UserTask): void {
    userTask.submission_excel = this.submissionExcel;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
