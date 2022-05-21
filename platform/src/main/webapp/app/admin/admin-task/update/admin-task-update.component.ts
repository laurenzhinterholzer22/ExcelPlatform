import {Component, OnInit} from "@angular/core";
import {AdminTask} from "../admin-task.model";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, Validators} from "@angular/forms";
import {FileUploadService} from "../../../shared/file/file-upload/file-upload.service";
import {AdminTaskService} from "../service/admin-task.service";

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
    private fb: FormBuilder,
    private fileService: FileUploadService
  ) {
  }

  ngOnInit(): void {
    this.route.data.subscribe(({ adminTask }) => {
      if (adminTask) {
        this.adminTask = adminTask;
        // this.uploadFileIdInstructionExcel = adminTask.instruction_excel.id;
        // this.uploadFileIdInstructionPdf = adminTask.instruction_pdf.id;
        // this.uploadFileIdSolutionExcel = adminTask.solution_excel.id;
        this.updateForm(adminTask);
      }
    });
  }

  previousState(): void {
    window.history.back();
  }

  save(): void {
    this.isSaving = true;
    this.updateAdminTask(this.adminTask);
    if (this.adminTask.id !== undefined) {
      this.adminTaskService.update(this.adminTask).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError(),
      });
    } else {
      this.adminTaskService.create(this.adminTask).subscribe({
        next: () => this.onSaveSuccess(),
        error: () => this.onSaveError(),
      });
    }
  }

  public updateAdminTask(adminTask: AdminTask): void {
    adminTask.name = this.editForm.get(['name'])!.value;
    // adminTask.instruction_excel = this.uploadFileIdInstructionExcel;
    // adminTask.instruction_pdf = this.uploadFileIdInstructionPdf;
    // adminTask.solution_excel = this.uploadFileIdSolutionExcel;
  }

  // public handleFileAddedInstructionExcel(fileId: number): void {
  //   this.fileService.getFileMetaData(fileId).subscribe((data) => {
  //     if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
  //       this.uploadFileIdInstructionExcel = fileId;
  //     }
  //     else {
  //       this.uploadFileIdInstructionExcel = -2;
  //     }
  //   });
  // }
  //
  // public handleFileRemovedInstructionExcel(fileId: number): void {
  //   this.uploadFileIdInstructionExcel = -1;
  // }
  //
  // public handleFileMovedInstructionExcel(oldFileId: number, newFileId: number): void {
  //   this.fileService.getFileMetaData(newFileId).subscribe((data) => {
  //     if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
  //       this.uploadFileIdInstructionExcel = newFileId;
  //     }
  //     else {
  //       this.uploadFileIdInstructionExcel = -2;
  //     }
  //   });
  // }
  //
  // // application/pdf
  //
  // public handleFileAddedInstructionPdf(fileId: number): void {
  //   this.fileService.getFileMetaData(fileId).subscribe((data) => {
  //     if (data.contentType === "application/pdf") {
  //       this.uploadFileIdInstructionPdf = fileId;
  //     }
  //     else {
  //       this.uploadFileIdInstructionPdf = -2;
  //     }
  //   });
  // }
  //
  // public handleFileRemovedInstructionPdf(fileId: number): void {
  //   this.uploadFileIdInstructionPdf = -1;
  // }
  //
  // public handleFileMovedInstructionPdf(oldFileId: number, newFileId: number): void {
  //   this.fileService.getFileMetaData(newFileId).subscribe((data) => {
  //     if (data.contentType === "application/pdf") {
  //       this.uploadFileIdInstructionPdf = newFileId;
  //     }
  //     else {
  //       this.uploadFileIdInstructionPdf = -2;
  //     }
  //   });
  // }
  //
  // public handleFileAddedSolutionExcel(fileId: number): void {
  //   this.fileService.getFileMetaData(fileId).subscribe((data) => {
  //     if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
  //       this.uploadFileIdSolutionExcel = fileId;
  //     }
  //     else {
  //       this.uploadFileIdSolutionExcel = -2;
  //     }
  //   });
  // }
  //
  //
  // public handleFileRemovedSolutionExcel(fileId: number): void {
  //   this.uploadFileIdSolutionExcel = -1;
  // }
  //
  // public handleFileMovedSolutionExcel(oldFileId: number, newFileId: number): void {
  //   this.fileService.getFileMetaData(newFileId).subscribe((data) => {
  //     if (data.contentType === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
  //       this.uploadFileIdSolutionExcel = newFileId;
  //     }
  //     else {
  //       this.uploadFileIdSolutionExcel = -2;
  //     }
  //   });
  // }

  private updateForm(adminTask: AdminTask): void {
    this.editForm.patchValue( {
      id: adminTask.id,
      name: adminTask.name,
    });
  }

  private onSaveSuccess(): void {
    this.isSaving = false;
    this.previousState();
  }

  private onSaveError(): void {
    this.isSaving = false;
  }

}
