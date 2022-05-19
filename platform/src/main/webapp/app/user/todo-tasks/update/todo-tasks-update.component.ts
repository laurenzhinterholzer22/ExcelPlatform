import {Component, OnInit} from "@angular/core";
import {AdminTask} from "../../../admin/admin-task/admin-task.model";
import {FormBuilder, Validators} from "@angular/forms";
import {AdminTaskService} from "../../../admin/admin-task/service/admin-task.service";
import {ActivatedRoute} from "@angular/router";
import {IUserTask, UserTask} from "../../user-task.model";
import {UserTaskService} from "../../user-task.service";
import {Account} from "../../../core/auth/account.model";
import {AccountService} from "../../../core/auth/account.service";
import {User} from "../../../entities/user/user.model";
import {FileUploadService} from "../../../shared/file/file-upload/file-upload.service";
import {date} from "@rxweb/reactive-form-validators";

@Component({
  selector: 'jhi-todo-tasks-update',
  templateUrl: './todo-tasks-update.component.html',
})
export class TodoTasksUpdateComponent implements OnInit {
  public adminTask!: AdminTask;
  public userTask!: UserTask;
  public isSaving = false;
  public files: File[] | null = null;
  public uploadFileIdSubmissionExcel = -1;
  public currentAccount: Account | null = null;
  public userTaskCorrection !: UserTask;

  public editForm = this.fb.group({
    id: [],
  });

  constructor(
    private userTaskService: UserTaskService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private fb: FormBuilder,
    private fileService: FileUploadService,
  )
  {}

  public ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.route.queryParams.subscribe(params => {
      this.adminTask = new AdminTask(params.adminTaskId, params.adminTaskName, params.adminTaskInstructionExcel, params.adminTaskInstructionPdf);
      console.log(this.adminTask);
    });
  }

  public previousState(): void {
    window.history.back();
  }

  public save(): void {
    this.isSaving = true;
    this.updateUserTask(this.userTask);
    this.userTaskService.create(this.userTask).subscribe(data => {
      if (data.id !== undefined){
        this.userTaskService.getCorrectUserTask(data.id).subscribe(dat => console.log(dat));
      }
      this.onSaveSuccess();
      this.onSaveError();
    });
  }


  public updateUserTask(userTask: UserTask): void {
    userTask = new UserTask();
    userTask.submission_excel = this.uploadFileIdSubmissionExcel;
    userTask.isCorrect = false;
    userTask.user = new User(this.currentAccount!.id, this.currentAccount!.login);
    userTask.adminTask = this.adminTask;
    this.userTask = userTask;
    console.log(userTask);
  }

  public onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  public onSaveError(): void {
    this.isSaving = false;
  }


  public handleFileAddedSubmissionExcel(fileId: number): void {
    this.fileService.getFileMetaData(fileId).subscribe((data) => {
      if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        this.uploadFileIdSubmissionExcel = fileId;
      }
      else {
        this.uploadFileIdSubmissionExcel = -2;
      }
    });
  }

  public handleFileRemovedSubmissionExcel(fileId: number): void {
    this.uploadFileIdSubmissionExcel = -1;
  }

  public handleFileMovedSubmissionExcel(oldFileId: number, newFileId: number): void {
    this.fileService.getFileMetaData(newFileId).subscribe((data) => {
      if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
        this.uploadFileIdSubmissionExcel = newFileId;
      }
      else {
        this.uploadFileIdSubmissionExcel = -2;
      }
    });
  }

}
