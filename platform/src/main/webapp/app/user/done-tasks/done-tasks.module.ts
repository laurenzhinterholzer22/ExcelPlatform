import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { allTasksRoute } from '../all-tasks/all-tasks.route';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AdminTaskModule } from '../../admin/admin-task/admin-task.module';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';
import { doneTasksRoute } from './done-tasks.route';
import { DoneTasksComponent } from './done-tasks.component';
import { DoneTasksUpdateComponent } from './update/done-tasks-update.component';
import {DoneTaskFeedbackComponent} from "./feedback/done-task-feedback.component";

@NgModule({
  imports: [SharedModule, RouterModule.forChild(doneTasksRoute), NgbModule],
  declarations: [DoneTasksComponent, DoneTasksUpdateComponent, DoneTaskFeedbackComponent],
})
export class DoneTasksModule {}
