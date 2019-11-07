import { Component, OnInit } from '@angular/core';
import { faUser, faSignOutAlt, faPlayCircle } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  faUser = faUser;
  faSignOutAlt = faSignOutAlt;
  faPlayCircle = faPlayCircle
  constructor() { }

  ngOnInit() {
  }

}
