import { Component, OnInit } from '@angular/core';
import { AdminTask } from '../admin-task.model';
import { FormBuilder, Validators } from '@angular/forms';
import { AdminTaskService } from '../service/admin-task.service';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import {UserTask} from "../../../user/user-task.model";

@Component({
  selector: 'jhi-admin-task-update',
  templateUrl: './admin-task-update.component.html',
})
export class AdminTaskUpdateComponent implements OnInit {
  public adminTask!: AdminTask;
  public isSaving = false;
  public files: File[] | null = null;
  public uploadFileIdInstructionExcel = -1;
  public uploadFileIdInstructionPdf = -1;
  public uploadFileIdSolutionExcel = -1;

  public editForm = this.fb.group({
    id: [],
    name: ['', [Validators.required, Validators.minLength(1), Validators.maxLength(100)]],
  });

  constructor(
    private adminTaskService: AdminTaskService,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) // private activeModal: NgbActiveModal
  {}

  public ngOnInit(): void {
    this.route.data.subscribe(({ adminTask }) => {
      if (adminTask) {
        this.adminTask = adminTask;
        // this.updateForm(adminTask);
      }
    });
  }

  public previousState(): void {
    window.history.back();
  }

  public save(): void {
    this.isSaving = true;
    this.updateAdminTask(this.adminTask);
    this.adminTaskService.create(this.adminTask).subscribe({
      next: () => this.onSaveSuccess(),
      error: () => this.onSaveError(),
    });
  }

  public updateForm(adminTask: AdminTask): void {
    this.editForm.patchValue({
      id: adminTask.id,
      name: adminTask.name,
    });
  }

  public updateAdminTask(adminTask: AdminTask): void {
    adminTask.name = this.editForm.get(['name'])!.value;
    adminTask.instruction_excel = this.uploadFileIdInstructionExcel;
    adminTask.instruction_pdf = this.uploadFileIdInstructionPdf;
    adminTask.solution_excel = this.uploadFileIdSolutionExcel;
  }

  public onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  public onSaveError(): void {
    this.isSaving = false;
  }


  public handleFileAddedInstructionExcel(fileId: number): void {
    this.uploadFileIdInstructionExcel = fileId;
  }

  public handleFileRemovedInstructionExcel(fileId: number): void {
    this.uploadFileIdInstructionExcel = -1;
  }

  public handleFileMovedInstructionExcel(oldFileId: number, newFileId: number): void {
    this.uploadFileIdInstructionExcel = newFileId;
  }

  public handleFileAddedInstructionPdf(fileId: number): void {
    this.uploadFileIdInstructionPdf = fileId;
  }

  public handleFileRemovedInstructionPdf(fileId: number): void {
    this.uploadFileIdInstructionPdf = -1;
  }

  public handleFileMovedInstructionPdf(oldFileId: number, newFileId: number): void {
    this.uploadFileIdInstructionPdf = newFileId;
  }

  public handleFileAddedSolutionExcel(fileId: number): void {
    this.uploadFileIdSolutionExcel = fileId;
  }

  public handleFileRemovedSolutionExcel(fileId: number): void {
    this.uploadFileIdSolutionExcel = -1;
  }

  public handleFileMovedSolutionExcel(oldFileId: number, newFileId: number): void {
    this.uploadFileIdSolutionExcel = newFileId;
  }
}
