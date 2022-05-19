import {AdminTask} from "../../admin/admin-task/admin-task.model";
import {User} from "../../entities/user/user.model";
import {IUserTask} from "../../user/user-task.model";

export interface IFileMetaDataModel {
  fileName: string;
  contentType: string;
  submissionDate: Date;
}

