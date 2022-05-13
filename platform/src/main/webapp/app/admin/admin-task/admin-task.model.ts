export interface IAdminTask {
  id?: number;
  name?: string;
  instruction_excel?: number;
  instruction_pdf?: number;
  solution_excel?: number;
}

export class AdminTask implements IAdminTask {
  constructor(
    public id?: number,
    public name?: string,
    public instruction_excel?: number,
    public instruction_pdf?: number,
    public solution_excel?: number
  ) {}
}
