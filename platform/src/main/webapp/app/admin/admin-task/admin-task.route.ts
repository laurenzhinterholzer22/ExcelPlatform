import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, Routes } from '@angular/router';
import { AdminTask, IAdminTask } from './admin-task.model';
import { AdminTaskService } from './service/admin-task.service';
import { Observable, of } from 'rxjs';
import { AdminTaskComponent } from './list/admin-task.comonent';
import { AdminTaskUpdateComponent } from './update/admin-task-update.component';

@Injectable({ providedIn: 'root' })
export class AdminTaskResolve implements Resolve<IAdminTask> {
  constructor(private service: AdminTaskService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IAdminTask> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new AdminTask());
  }
}

export const adminTaskRoute: Routes = [
  {
    path: '',
    component: AdminTaskComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: 'new',
    component: AdminTaskUpdateComponent,
    resolve: {
      adminTask: AdminTaskResolve,
    },
  },
  {
    path: 'login/edit',
    component: AdminTaskUpdateComponent,
    resolve: {
      adminTask: AdminTaskResolve,
    },
  },
];
