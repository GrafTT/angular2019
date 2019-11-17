import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogining:boolean = false;
  onLoginProccess() {
    this.isLogining = true
  }
  onLogedIn() {
    this.isLogining = false;
  }
}
