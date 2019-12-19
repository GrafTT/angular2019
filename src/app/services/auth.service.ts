import { Injectable } from '@angular/core';
import {IUser} from '../models/user';
import {IUserInfo} from '../models/userinfo';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject(this.isAuthenticate());
  token:string;
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Authorization': ''
    })
  };
  constructor(private http: HttpClient, private router: Router) { }

  login(user:IUser) {
    this.http.post('http://localhost:3004/auth/login', user, this.httpOptions).subscribe((data: {token:string})=>{
      this.token = data.token;
      if (this.token) {
        localStorage.setItem("token", JSON.stringify(this.token));
        this.isLogin.next(true);
        this.router.navigate(['/courses']);
      } else {
        this.isLogin.next(false);
      }
    });

  }
  logout() {
    localStorage.removeItem('token');
    this.isLogin.next(false);
  }
  isAuthenticate():boolean {
    let authUser = localStorage.getItem('token');
    return authUser ? true : false;
  }
  getUserInfo():Observable<IUserInfo> {
    let token = JSON.parse(localStorage.getItem('token'));
    return this.http.post('http://localhost:3004/auth/userinfo', {token}, this.httpOptions).pipe(map((data:IUserInfo) => data))
  }
  getAuthToken():string {
    return JSON.parse(localStorage.getItem('token'));
  }

}
