import { Injectable } from '@angular/core';
import {IUser} from '../models/user';
import {IUserInfo} from '../models/userinfo';
import {LoadingService} from '../services/loading.service';
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

  constructor(private http: HttpClient, private router: Router, private loadingService: LoadingService) { }

  login(user:IUser) {
    this.loadingService.isLoading(true);
    this.http.post('http://localhost:3004/auth/login', user).subscribe((data: {token:string})=>{
      this.loadingService.isLoading(false);
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
