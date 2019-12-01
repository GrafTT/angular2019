import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit {
  createdDate:string = '';
  @Output() datepick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  onChooseDate(d:string){
    this.datepick.emit(d);
  }

}
