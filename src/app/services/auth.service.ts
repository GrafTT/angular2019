import { Injectable } from '@angular/core';
import {IUser} from '../models/user';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  user:IUser = {
    id: 0,
    firstName: 'Viacheslav',
    lastName: 'Lamash',
    email: 'test@test.ru',
    password: '123456'
  }
  isLogin = new BehaviorSubject(this.isAuthenticate());
  constructor() { }

  login(user:IUser) {
    if (user.email === this.user.email) {
      localStorage.setItem("user", JSON.stringify(user));
      this.isLogin.next(true);
      return true;
    } else {
      this.isLogin.next(false);
      return false;
    }
  }
  logout() {
    localStorage.removeItem('user');
    this.isLogin.next(false);
  }
  isAuthenticate():boolean {
    let authUser = localStorage.getItem('user');
    return authUser ? true : false;
  }
  getUserInfo():string {
    let authUser = localStorage.getItem('user');
    return authUser && JSON.parse(authUser).email;
  }

}
