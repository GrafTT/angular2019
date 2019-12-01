import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.css']
})
export class DurationFieldComponent implements OnInit {
  duration:number = null;
  @Output() durationfill = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  onChooseDuration(e) {
    if (e === '') {
      this.duration = null;
    } else {
      this.duration = Number(e);
    }
    this.durationfill.emit(Number(e));
  }

}
