import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';
import {IUserInfo} from '../models/userinfo';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  userLogin:string = null;
  isAuth:boolean = false;
  @Output() onLogin = new EventEmitter();

  constructor(private auth:AuthService, private router: Router) { }

  ngOnInit() {
    this.auth.isLogin.subscribe(islogin => {
      this.isAuth = islogin;
      if (this.isAuth) {
        this.auth.getUserInfo().subscribe((data:IUserInfo )=> this.userLogin = data.login);
      }
    })
  }

  handleLogin() {
    this.onLogin.emit();
  }
  handleLogoff() {
    this.auth.logout();
    this.router.navigate(['/login'])
  }

}
