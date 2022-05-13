export interface IUserTask {
  id?: number;
  isCorrect?: boolean;
  adminTask?: number;
  instruction_user_excel?: number;
  submission_excel?: number;
  user?: number;
}

export class UserTask implements IUserTask {
  constructor(
    public id?: number,
    public isCorrect?: boolean,
    public adminTask?: number,
    public instruction_user_excel?: number,
    public submission_excel?: number,
    public user?: number
  ) {}
}
