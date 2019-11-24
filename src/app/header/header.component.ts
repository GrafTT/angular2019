import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  constructor(private auth:AuthService) { }

  ngOnInit() {
    this.isAuth = this.auth.isAuthenticate();
    if (this.isAuth) {
      this.userLogin = this.auth.getUserInfo();
    }
  }

  handleLogin() {
    this.onLogin.emit();
  }
  handleLogoff() {
    this.auth.logout();
    this.isAuth = this.auth.isAuthenticate();
  }

}
