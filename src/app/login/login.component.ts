import { Component, OnInit, Output, EventEmitter } from '@angular/core';
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

  @Output() onSubmitLogin = new EventEmitter()
  constructor(private auth: AuthService) { }

  ngOnInit() {}

  handleSubmit() {
    if (this.auth.login({
      id: 0,
      email: this.email,
      firstName: '',
      lastName: '',
      password: ''
    })) {
      this.onSubmitLogin.emit();
    } else {
      this.error = 'Wrong email!'
      console.log(this.error);
    }
  } 

}
