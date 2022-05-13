import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { adminTaskRoute } from './admin-task.route';
import { AdminTaskComponent } from './list/admin-task.comonent';
import { AdminTaskUpdateComponent } from './update/admin-task-update.component';
import { AdminTaskDeleteDialogComponent } from './delete/admin-task-delete-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(adminTaskRoute), NgbModule],
  declarations: [AdminTaskComponent, AdminTaskUpdateComponent, AdminTaskDeleteDialogComponent],
  entryComponents: [AdminTaskDeleteDialogComponent],

  exports: [AdminTaskComponent],
})
export class AdminTaskModule {}
