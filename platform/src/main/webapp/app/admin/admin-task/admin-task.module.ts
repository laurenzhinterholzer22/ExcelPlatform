import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { adminTaskRoute } from './admin-task.route';
import { AdminTaskComponent } from './list/admin-task.comonent';
import { AdminTaskNewComponent } from './new/admin-task-new.component';
import { AdminTaskDeleteDialogComponent } from './delete/admin-task-delete-dialog.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {AdminTaskUpdateComponent} from "./update/admin-task-update.component";

@NgModule({
  imports: [SharedModule, RouterModule.forChild(adminTaskRoute), NgbModule],
  declarations: [AdminTaskComponent, AdminTaskNewComponent, AdminTaskDeleteDialogComponent, AdminTaskUpdateComponent],
  entryComponents: [AdminTaskDeleteDialogComponent],

  exports: [AdminTaskComponent],
})
export class AdminTaskModule {}
