import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ApplicationConfigService } from '../../../core/config/application-config.service';
import { IAdminTask } from '../admin-task.model';
import { Observable } from 'rxjs';
import { Pagination } from '../../../core/request/request.model';
import { createRequestOption } from '../../../core/request/request-util';

@Injectable({ providedIn: 'root' })
export class AdminTaskService {
  // extra resourceUrl for the DTO Object
  private resourceUrlDTO = this.applicationConfigService.getEndpointFor('api/admin/admin_task_meta');
  private resourceUrl = this.applicationConfigService.getEndpointFor('api/admin/admin_task');

  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  create(adminTask: IAdminTask): Observable<IAdminTask> {
    return this.http.post<IAdminTask>(this.resourceUrl, adminTask);
  }

  find(id: number): Observable<IAdminTask> {
    return this.http.get<IAdminTask>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IAdminTask[]>> {
    const options = createRequestOption(req);
    return this.http.get<IAdminTask[]>(this.resourceUrlDTO, { params: options, observe: 'response' });
  }

  delete(id: number): Observable<{}> {
    return this.http.delete(`${this.resourceUrl}/${id}`);
  }
}
