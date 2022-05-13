import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, Routes } from '@angular/router';
import { Observable, of } from 'rxjs';

import { UserExtra, IUserExtra } from './user_extra-management.model';
import { User_extraManagementService } from './service/user_extra-management.service';

@Injectable({ providedIn: 'root' })
export class UserManagementResolve implements Resolve<IUserExtra> {
  constructor(private service: User_extraManagementService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<IUserExtra> {
    const id = route.params['id'];
    if (id) {
      return this.service.find(id);
    }
    return of(new UserExtra());
  }
}
