import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {IUserInfo} from '../models/userinfo';
import {AuthService} from '../services/auth.service';
import { Store, select } from '@ngrx/store';
import { AuthState } from '../reducers/authenticate/authenticate.reducers';
import { Observable } from 'rxjs';
import { selectIsLogin } from '../reducers/authenticate/authenticate.selectors';
import { AuthLogoutAction } from '../reducers/authenticate/authenticate.actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogin:string = null;
  isAuth:Observable<boolean> = this.store$.pipe(select(selectIsLogin));
  @Output() onLogin = new EventEmitter();

  constructor(private auth:AuthService, private router: Router, private store$: Store<AuthState>) { }

  ngOnInit() {
    // this.auth.isLogin.subscribe(islogin => {
    //   this.isAuth = islogin;
    //   if (this.isAuth) {
    //     this.auth.getUserInfo().subscribe((data:IUserInfo )=> this.userLogin = data.login);
    //   }
    // })
  }

  handleLogin() {
    this.onLogin.emit();
  }
  handleLogoff() {
    this.store$.dispatch(new AuthLogoutAction())
    this.router.navigate(['/login'])
  }

}
