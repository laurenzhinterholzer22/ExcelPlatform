import { User } from './user-management.model';

export interface IUserExtra {
  id?: number;
  solved_exercises?: number;
  user?: User;
}

export class UserExtra implements IUserExtra {
  constructor(public id?: number, public solved_exercises?: number, public user?: User) {}
}
