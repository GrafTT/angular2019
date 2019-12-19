import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-load-more-button',
  templateUrl: './load-more-button.component.html',
  styleUrls: ['./load-more-button.component.css']
})
export class LoadMoreButtonComponent implements OnInit {

  @Output()click = new EventEmitter()
  constructor() { }

  ngOnInit() {
  }
  onClick() {
    this.click.emit();
  }

}
