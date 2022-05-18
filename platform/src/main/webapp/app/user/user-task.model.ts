import {AbstractControl} from "@angular/forms";
import {User} from "../entities/user/user.model";
import {AdminTask} from "../admin/admin-task/admin-task.model";

export interface IUserTask {
  id?: number;
  isCorrect?: boolean;
  adminTask?: AdminTask;
  instruction_user_excel?: number;
  submission_excel?: number;
  user?: User;
}

export class UserTask implements IUserTask {
  constructor(
    public id?: number,
    public isCorrect?: boolean,
    public adminTask?: AdminTask,
    public instruction_user_excel?: number,
    public submission_excel?: number,
    public user?: User
  ) {}
}
