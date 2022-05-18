import {Component, OnInit} from "@angular/core";
import {AdminTask} from "../../../admin/admin-task/admin-task.model";
import {FormBuilder, Validators} from "@angular/forms";
import {AdminTaskService} from "../../../admin/admin-task/service/admin-task.service";
import {ActivatedRoute} from "@angular/router";
import {UserTask} from "../../user-task.model";
import {UserTaskService} from "../../user-task.service";
import {Account} from "../../../core/auth/account.model";
import {AccountService} from "../../../core/auth/account.service";
import {User} from "../../../entities/user/user.model";

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

  public editForm = this.fb.group({
    id: [],
  });

  constructor(
    private userTaskService: UserTaskService,
    private route: ActivatedRoute,
    private accountService: AccountService,
    private fb: FormBuilder
  )
  {}

  public ngOnInit(): void {
    this.accountService.identity().subscribe(account => (this.currentAccount = account));
    this.route.data.subscribe(({ userTask }) => {
      if (userTask) {
        this.userTask = userTask;
      }
    });
  }

  public previousState(): void {
    window.history.back();
  }

  public save(): void {
    this.isSaving = true;
    this.updateUserTask(this.userTask);
    this.userTaskService.create(this.userTask).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  public updateForm(userTask: UserTask): void {
    this.editForm.patchValue({
      id: userTask.id,
    });
  }

  public updateUserTask(userTask: UserTask): void {
    userTask.submission_excel = this.uploadFileIdSubmissionExcel;
    userTask.isCorrect = false;
    userTask.user = new User(this.currentAccount!.id, this.currentAccount!.login);
    userTask.adminTask = new AdminTask(54);
  }

  public onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  public onSaveError(): void {
    this.isSaving = false;
  }


  public handleFileAddedSubmissionExcel(fileId: number): void {
    this.uploadFileIdSubmissionExcel = fileId;
  }

  public handleFileRemovedSubmissionExcel(fileId: number): void {
    this.uploadFileIdSubmissionExcel = -1;
  }

  public handleFileMovedSubmissionExcel(oldFileId: number, newFileId: number): void {
    this.uploadFileIdSubmissionExcel = newFileId;
  }

}
