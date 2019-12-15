import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-authors-field',
  templateUrl: './authors-field.component.html',
  styleUrls: ['./authors-field.component.css']
})
export class AuthorsFieldComponent implements OnInit {
  authors:string = '';
  @Output() authorsfill = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  onChooseAuthors(e) {
    let list = e.split(',');
    this.authorsfill.emit(list);
  }

}
