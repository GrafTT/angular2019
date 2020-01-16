import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchField:string = '';
  @Output()search = new EventEmitter<string>()
  constructor() { }

  ngOnInit() {

  }

  submitSearch() {
    (this.searchField.length >= 3 || this.searchField.length === 0 ) && (this.search.emit(this.searchField));
  }

}
