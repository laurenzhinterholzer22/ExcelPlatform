import { TestBed } from '@angular/core/testing';
import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

import { Authority } from 'app/config/authority.constants';
import { User } from '../user-management.model';
import { UserExtra } from '../user_extra-management.model';

import { UserManagementService } from './user-management.service';
import { User_extraManagementService } from './user_extra-management.service';

describe('User Service', () => {
  let service: UserManagementService;
  let service_user_extra: User_extraManagementService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });

    service = TestBed.inject(UserManagementService);
    service_user_extra = TestBed.inject(User_extraManagementService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  describe('Service methods', () => {
    it('should return User', () => {
      let expectedResult: string | undefined;

      service.find('user').subscribe(received => {
        expectedResult = received.login;
      });

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(new User(123, 'user'));
      expect(expectedResult).toEqual('user');
    });
    it('should return ExtraUser', () => {
      let expectedResult: number | undefined;

      service_user_extra.find(1).subscribe(received => {
        expectedResult = received.solved_exercises;
      });

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush(new UserExtra(123, 0));
      expect(expectedResult).toEqual('user_extra');
    });

    it('should return Authorities', () => {
      let expectedResult: string[] = [];

      service.authorities().subscribe(authorities => {
        expectedResult = authorities;
      });
      const req = httpMock.expectOne({ method: 'GET' });

      req.flush([Authority.USER, Authority.ADMIN]);
      expect(expectedResult).toEqual([Authority.USER, Authority.ADMIN]);
    });

    it('should propagate not found response', () => {
      let expectedResult = 0;

      service.find('user').subscribe({
        error: (error: HttpErrorResponse) => (expectedResult = error.status),
      });

      const req = httpMock.expectOne({ method: 'GET' });
      req.flush('Invalid request parameters', {
        status: 404,
        statusText: 'Bad Request',
      });
      expect(expectedResult).toEqual(404);
    });
  });
});
