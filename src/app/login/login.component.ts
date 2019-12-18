import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

import {IUser} from '../models/user';
import {AuthService} from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  email:string = '';
  password:string = '';
  error:string = '';

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit() {

  }

  handleSubmit() {
    if (this.auth.login({
      id: 0,
      email: this.email,
      firstName: '',
      lastName: '',
      password: ''
    })) {
      this.router.navigate(['/courses']);

    } else {
      this.error = 'Wrong email!'
    }
  } 

}
