import { Component, OnInit, Output, EventEmitter, Input, OnChanges } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.css']
})
export class DatepickerComponent implements OnInit, OnChanges {
  createdDate:string = '';
  @Input() created:string
  @Output() datepick = new EventEmitter<string>();
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    console.log(this.created)
    this.createdDate = this.createdDate;
  }
  onChooseDate(d:string){
    console.log(this.createdDate)
    this.datepick.emit(d);
  }

}
