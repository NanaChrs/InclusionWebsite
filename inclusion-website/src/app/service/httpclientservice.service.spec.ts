import { TestBed } from '@angular/core/testing';

import { Login } from './httpclientservice.service';

describe('HttpclientserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Login = TestBed.get(Login);
    expect(service).toBeTruthy();
  });
});
