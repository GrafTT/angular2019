import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-authors-field',
  templateUrl: './authors-field.component.html',
  styleUrls: ['./authors-field.component.css']
})
export class AuthorsFieldComponent implements OnInit, OnChanges {
  authors:string = '';
  @Input() authorsList: string[]
  @Output() authorsfill = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.authors = this.authorsList && this.authorsList.join(',')
  }
  onChooseAuthors(e) {
    let list = e.split(',');
    this.authorsfill.emit(list);
  }

}
