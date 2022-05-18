import {ActivatedRouteSnapshot, Resolve, Routes} from "@angular/router";
import {DoneTasksComponent} from "../done-tasks/done-tasks.component";
import {DoneTasksUpdateComponent} from "../done-tasks/update/done-tasks-update.component";
import {DoneUserTaskResolve} from "../done-tasks/done-tasks.route";
import {TodoTasksComponent} from "./todo-tasks.component";
import {TodoTasksUpdateComponent} from "./update/todo-tasks-update.component";
import {Injectable} from "@angular/core";
import {AdminTask, IAdminTask} from "../../admin/admin-task/admin-task.model";
import {AdminTaskService} from "../../admin/admin-task/service/admin-task.service";
import {Observable, of} from "rxjs";
import {IUserTask, UserTask} from "../user-task.model";
import {UserTaskService} from "../user-task.service";

@Injectable({ providedIn: 'root' })
export class UserTaskResolve implements Resolve<IUserTask> {
  constructor(private service: UserTaskService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUserTask> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new UserTask());
  }
}

export const todoTasksRoute: Routes = [
  {
    path: '',
    component: TodoTasksComponent,
    data: {
      defaultSort: 'id,asc',
    },
  },
  {
    path: ':id/new',
    component: TodoTasksUpdateComponent,
    resolve: {
      userTask: UserTaskResolve,
    },
  },
];
