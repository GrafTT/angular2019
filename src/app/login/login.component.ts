import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import {IUser} from '../models/user';
import {AuthService} from '../services/auth.service';
import { Store } from '@ngrx/store';
import { AuthState } from '../reducers/authenticate/authenticate.reducers';
import { AuthLoginRequestAction, AuthLoginAction, AuthGetUserInfoAction } from '../reducers/authenticate/authenticate.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  error:string = '';

  constructor(private auth: AuthService, private router: Router, private store$: Store<AuthState>) { }

  ngOnInit() {

  }

  handleSubmit() {
    this.store$.dispatch(new AuthLoginRequestAction({
      login: this.email,
      password: this.password
    }));
    this.store$.dispatch(new AuthGetUserInfoAction());
    // this.store$.dispatch(new AuthLoginAction(true))
  } 

}
