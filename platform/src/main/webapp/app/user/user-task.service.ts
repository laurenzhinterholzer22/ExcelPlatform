import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../core/config/application-config.service';
import { Observable } from 'rxjs';
import { Pagination } from '../core/request/request.model';
import { createRequestOption } from '../core/request/request-util';
import { IUserTask } from './user-task.model';
import { IUserTaskMeta } from './user-task-meta.model';
import {date} from "@rxweb/reactive-form-validators";

@Injectable({ providedIn: 'root' })
export class UserTaskService {
  // extra resourceUrl for the DTO Object
  private resourceUrlDTO = this.applicationConfigService.getEndpointFor('api/user_task_meta');
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/user_task');
  private resourceUrlCorrect = this.applicationConfigService.getEndpointFor('api/files/file_correction');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(userTask: IUserTask): Observable<IUserTask> {
    return this.http.post<IUserTask>(this.resourceUrl, userTask);
  }

  find(id: number): Observable<IUserTask> {
    return this.http.get<IUserTask>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IUserTask[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUserTask[]>(this.resourceUrl, { params: options, observe: 'response' });
  }

  queryMeta(req?: Pagination): Observable<HttpResponse<IUserTaskMeta[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUserTaskMeta[]>(this.resourceUrlDTO, { params: options, observe: 'response' });
  }

   public getCorrectUserTask(id: number): Observable<string> {
     return this.http.get<string>(`${this.resourceUrlCorrect}/${id}`);
  }

  // public getCorrectUserTask(id: number): Observable<any> {
  //   return this.http.get(`${this.resourceUrlCorrect}/${id}`);
  // }

  update(userTask: IUserTask): Observable<IUserTask> {
    return this.http.put<IUserTask>(this.resourceUrl, userTask);
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
