import { Component } from '@angular/core';
import { AdminTask } from '../admin-task.model';
import { AdminTaskService } from '../service/admin-task.service';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'jhi-admin-task-delete-dialog',
  templateUrl: './admin-task-delete-dialog.component.html',
})
export class AdminTaskDeleteDialogComponent {
  adminTask?: AdminTask;

  constructor(private adminTaskService: AdminTaskService, private activeModal: NgbActiveModal) {}

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.adminTaskService.delete(id).subscribe(() => {
      this.activeModal.close('deleted');
    });
  }
}
