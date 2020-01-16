import { Injectable } from '@angular/core';
import {IUser} from '../models/user';
import {IUserInfo} from '../models/userinfo';
import {LoadingService} from '../services/loading.service';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { map} from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  isLogin = new BehaviorSubject(this.isAuthenticate());
  token:string;

  constructor(private http: HttpClient, private router: Router, private loadingService: LoadingService) { }

  login(user:IUser) {
    console.log(user)
    return this.http.post('http://localhost:3004/auth/login', user).pipe(map((data: {token:string})=>{
      if (data.token) {
        localStorage.setItem("token", JSON.stringify(data.token));
        this.router.navigate(['/courses']);
        return true;
      } else {
        return false;
      }
    }));
  }
  logout() {
    this.loadingService.isLoading(true);
    localStorage.removeItem('token');
    this.loadingService.isLoading(false);
    this.isLogin.next(false);
  }
  isAuthenticate():boolean {
    let authUser = localStorage.getItem('token');
    return authUser ? true : false;
  }
  getUserInfo():Observable<IUserInfo> {
    let token = JSON.parse(localStorage.getItem('token'));
    return this.http.post('http://localhost:3004/auth/userinfo', {token}).pipe(map((data:IUserInfo) => data))
  }
  getAuthToken():string {
    return JSON.parse(localStorage.getItem('token'));
  }

}
