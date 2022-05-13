import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { AllTasksComponent } from '../all-tasks/all-tasks.component';
import { DoneTasksComponent } from './done-tasks.component';
import { AdminTaskUpdateComponent } from '../../admin/admin-task/update/admin-task-update.component';
import { AdminTaskResolve } from '../../admin/admin-task/admin-task.route';
import { DoneTasksUpdateComponent } from './update/done-tasks-update.component';
import { Injectable } from '@angular/core';
import { IUserTask, UserTask } from '../user-task.model';
import { UserTaskService } from '../user-task.service';
import { Observable, of } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class DoneUserTaskResolve implements Resolve<IUserTask> {
  constructor(private service: UserTaskService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUserTask> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new UserTask());
  }
}

export const doneTasksRoute: Routes = [
  {
    path: '',
    component: DoneTasksComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/edit',
    component: DoneTasksUpdateComponent,
    resolve: {
      adminTask: DoneUserTaskResolve,
    },
  },
];
