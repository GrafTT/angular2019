import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  isLogining:boolean = false;
  isCreatingCourse:boolean = false;
  onLoginProccess() {
    this.isLogining = true
  }
  onLogedIn() {
    this.isLogining = false;
  }
  onCreateCourse() {
    this.isCreatingCourse = true;
  }
  onCreatedCourse() {
    this.isCreatingCourse = false;
  }
  onCancel() {
    this.isCreatingCourse = false;
  }
}
