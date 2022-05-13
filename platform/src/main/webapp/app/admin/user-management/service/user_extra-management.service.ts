import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

import { ApplicationConfigService } from 'app/core/config/application-config.service';
import { createRequestOption } from 'app/core/request/request-util';
import { Pagination } from 'app/core/request/request.model';
import { IUserExtra } from '../user_extra-management.model';
import { IUser } from '../user-management.model';

@Injectable({ providedIn: 'root' })
export class User_extraManagementService {
  private resourceUrl = this.applicationConfigService.getEndpointFor('/api/admin/userExtras');
  constructor(private http: HttpClient, private applicationConfigService: ApplicationConfigService) {}

  // does not make sense because /userExtras/{login} does not exist
  find(id: number): Observable<IUserExtra> {
    return this.http.get<IUserExtra>(`${this.resourceUrl}/${id}`);
  }

  query(req?: Pagination): Observable<HttpResponse<IUserExtra[]>> {
    const options = createRequestOption(req);
    return this.http.get<IUserExtra[]>(this.resourceUrl, { params: options, observe: 'response' });
  }
}
