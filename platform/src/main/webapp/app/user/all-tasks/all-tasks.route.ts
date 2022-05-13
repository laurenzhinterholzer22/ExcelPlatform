import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { AdminTaskComponent } from '../../admin/admin-task/list/admin-task.comonent';
import { AdminTaskUpdateComponent } from '../../admin/admin-task/update/admin-task-update.component';
import { AdminTaskResolve } from '../../admin/admin-task/admin-task.route';
import { AllTasksComponent } from './all-tasks.component';
import { Injectable } from '@angular/core';
import { AdminTask, IAdminTask } from '../../admin/admin-task/admin-task.model';
import { AdminTaskService } from '../../admin/admin-task/service/admin-task.service';
import { Observable, of } from 'rxjs';

export const allTasksRoute: Routes = [
  {
    path: '',
    component: AllTasksComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
];
