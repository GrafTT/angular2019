import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-duration-field',
  templateUrl: './duration-field.component.html',
  styleUrls: ['./duration-field.component.css']
})
export class DurationFieldComponent implements OnInit, OnChanges {
  duration:number = null;
  @Input() durationToEdit:number
  @Output() durationfill = new EventEmitter<number>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.duration = this.durationToEdit;
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
