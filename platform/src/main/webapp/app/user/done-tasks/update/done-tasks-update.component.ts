import { Component, OnInit } from '@angular/core';
import {IUserTask, UserTask} from '../../user-task.model';
import { UserTaskService } from '../../user-task.service';
import {ActivatedRoute, Router, RoutesRecognized} from '@angular/router';
import { FormBuilder } from '@angular/forms';
import { numeric } from '@rxweb/reactive-form-validators';
import { UserTaskMeta } from '../../user-task-meta.model';
import {AdminTask} from "../../../admin/admin-task/admin-task.model";
import {AdminTaskService} from "../../../admin/admin-task/service/admin-task.service";
import {Observable} from "rxjs";
import {Account} from "../../../core/auth/account.model";
import {AccountService} from "../../../core/auth/account.service";
import {User} from "../../../entities/user/user.model";
import {FileUploadService} from "../../../shared/file/file-upload/file-upload.service";

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
  currentAccount: Account | null = null;

  editForm = this.fb.group({
    id: [],
  });

  constructor(private userTaskService: UserTaskService, private route: ActivatedRoute, private fb: FormBuilder,private adminTaskService: AdminTaskService, private accountService: AccountService, private fileService: FileUploadService ) {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.route.queryParams.subscribe(params => {
    this.userTask = new UserTask(params.id,false);
    this.adminTask = new AdminTask(params.adminTaskId, params.adminTaskName, params.adminTaskInstructionExcel,params.adminTaskInstructionPdf,params.adminTaskSolutionExcel);
      console.log(this.adminTask);
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
    this.fileService.getFileMetaData(fileId).subscribe((data) => {
      if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        this.submissionExcel = fileId;
      }
      else {
        this.submissionExcel = -2;
      }
    });
  }

  public handleFileRemovedSubmissionExcel(fileId: number): void {
    this.submissionExcel = -1;
  }

  public handleFileMovedSubmissionExcel(oldFileId: number, newFileId: number): void {
    this.fileService.getFileMetaData(newFileId).subscribe((data) => {
      if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        this.submissionExcel = newFileId;
      }
      else {
        this.submissionExcel = -2;
      }
    });
  }

  private updateUserTask(userTask: UserTask): void {
    userTask.submission_excel = this.submissionExcel;
    userTask.adminTask = this.adminTask;
    userTask.isCorrect = false;
    userTask.id = this.userTask.id;
    userTask.user = new User(this.currentAccount!.id, this.currentAccount!.login);
    userTask.instruction_user_excel = this.userTask.instruction_user_excel;
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }
}
