import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {IUserInfo} from '../models/userinfo';
import {AuthService} from '../services/auth.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../reducers/authenticate/authenticate.reducers';
import { Observable } from 'rxjs';
import { selectIsLogin, selectUserInfo } from '../reducers/authenticate/authenticate.selectors';
import { AuthLogoutAction, AuthLogoutRequestAction, AuthGetUserInfoAction } from '../reducers/authenticate/authenticate.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogin:string = null;
  isAuth:Observable<boolean> = this.store$.pipe(select(selectIsLogin));
  user$:Observable<IUserInfo> = this.store$.pipe(select(selectUserInfo))
  @Output() onLogin = new EventEmitter();

  constructor(private auth:AuthService, private router: Router, private store$: Store<AuthState>) { }

  ngOnInit() {
    this.store$.dispatch(new AuthGetUserInfoAction())
  }

  handleLogin() {
    this.onLogin.emit();
  }
  handleLogoff() {
    this.store$.dispatch(new AuthLogoutRequestAction())
    this.router.navigate(['/login'])
  }

}
