import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { ICourse } from '../models/course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: ICourse;
  @Output() onDelete = new EventEmitter<number>();
  
  delete(id:number){
    this.onDelete.emit(id);
  }
  constructor() { }

  ngOnInit() {
  }

}
