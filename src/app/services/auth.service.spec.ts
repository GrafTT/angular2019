import { TestBed } from '@angular/core/testing';

import { AuthService } from './auth.service';

describe('AuthService', () => {
  let user = {
    id: 0,
    firstName: 'John',
    lastName: 'Dow',
    email: 'test@test.ru',
    password: '123456'
  }
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AuthService = TestBed.get(AuthService);
    expect(service).toBeTruthy();
  });

  it('should log in', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.login(user);
    let u = JSON.parse(window.localStorage.getItem("user"))
    expect(u.email).toEqual(user.email);
  });
  it('should check isAuthenticate', () => {
    const service: AuthService = TestBed.get(AuthService);
    service.logout();
    expect(service.isAuthenticate()).toBe(false)
    service.login(user);
    let u = JSON.parse(window.localStorage.getItem("user"))
    expect(service.isAuthenticate()).toBe(true);
  });
});
