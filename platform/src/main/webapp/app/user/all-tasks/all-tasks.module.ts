import { NgModule } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { allTasksRoute } from './all-tasks.route';
import { AllTasksComponent } from './all-tasks.component';
import { AdminTaskModule } from '../../admin/admin-task/admin-task.module';

@NgModule({
  imports: [SharedModule, RouterModule.forChild(allTasksRoute), NgbModule],
  declarations: [AllTasksComponent],
})
export class AllTasksModule {}
