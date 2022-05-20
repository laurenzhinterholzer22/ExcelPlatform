import {NgModule} from "@angular/core";
import {SharedModule} from "../../shared/shared.module";
import {RouterModule} from "@angular/router";
import {doneTasksRoute} from "../done-tasks/done-tasks.route";
import {NgbAlertModule, NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {DoneTasksComponent} from "../done-tasks/done-tasks.component";
import {DoneTasksUpdateComponent} from "../done-tasks/update/done-tasks-update.component";
import {todoTasksRoute} from "./todo-tasks.route";
import {TodoTasksComponent} from "./todo-tasks.component";
import {TodoTasksUpdateComponent} from "./update/todo-tasks-update.component";
import {AlertComponent} from "../../shared/alert/alert.component";

@NgModule({
  imports: [SharedModule, RouterModule.forChild(todoTasksRoute), NgbModule, NgbAlertModule],
  declarations: [TodoTasksComponent, TodoTasksUpdateComponent],
})
export class TodoTasksModule {}
