import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
/* jhipster-needle-add-admin-module-import - JHipster will add admin modules imports here */

@NgModule({
  imports: [
    /* jhipster-needle-add-admin-module - JHipster will add admin modules here */
    RouterModule.forChild([
      {
        path: 'all-tasks',
        loadChildren: () => import('./all-tasks/all-tasks.module').then(m => m.AllTasksModule),
      },
      {
        path: 'done-tasks',
        loadChildren: () => import('./done-tasks/done-tasks.module').then(m => m.DoneTasksModule),
      },
    ]),
  ],
})
export class UserRoutingModule {}
