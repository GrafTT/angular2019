import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { faPen, faTrash, faCalendarAlt, faClock } from '@fortawesome/free-solid-svg-icons';
import { Course } from '../course';

@Component({
  selector: 'app-course-item',
  templateUrl: './course-item.component.html',
  styleUrls: ['./course-item.component.css']
})
export class CourseItemComponent implements OnInit {
  @Input() course: Course;
  @Output() onDelete = new EventEmitter<number>();
  
  delete(id:number){
    this.onDelete.emit(id);
  }
  faTrash = faTrash;
  faPen = faPen;
  faCalendarAlt = faCalendarAlt;
  faClock = faClock;
  constructor() { }

  ngOnInit() {
  }

}
