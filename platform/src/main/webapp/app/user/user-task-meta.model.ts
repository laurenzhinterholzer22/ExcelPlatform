export interface IUserTaskMeta {
  id?: number;
  is_correct?: boolean;
  admin_task_id?: number;
  admin_task_name?: string;
  instruction_excel?: number;
  instruction_pdf?: number;
  solution_excel?: number;
  submission_excel?: number;
  user_id?: number;
}

export class UserTaskMeta implements IUserTaskMeta {
  constructor(
    public id?: number,
    public is_correct?: boolean,
    public admin_task_id?: number,
    public admin_task_name?: string,
    public instruction_excel?: number,
    public instruction_pdf?: number,
    public solution_excel?: number,
    public submission_excel?: number,
    public user_id?: number
  ) {}
}
