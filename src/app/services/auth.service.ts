import { Injectable } from '@angular/core';
import {IUser} from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private user:IUser = {
    id: 0,
    firstName: 'Viacheslav',
    lastName: 'Lamash',
    email: 'test@test.ru',
    password: '123456'
  }
  constructor() { }

  login(user:IUser) {
    if (user.email === this.user.email) {
      localStorage.setItem("user", JSON.stringify(user));
      return true;
    } else {
      return false;
    }
  }
  logout() {
    localStorage.removeItem('user');
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
