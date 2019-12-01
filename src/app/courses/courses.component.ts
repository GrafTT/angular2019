import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import {ICourse} from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit, OnChanges {
  name: string;
  courses: ICourse[]
  @Output() create = new EventEmitter()

  constructor(private coursesService : CoursesService) { }
  
  ngOnInit() {
    this.courses = this.coursesService.getCourses();
  }
  
  ngOnChanges(simple: SimpleChanges) {
    console.log('onChanges')
  }

  onDelete(id: number) {
    this.coursesService.deleteCourse(id);
    this.courses = this.coursesService.getCourses()
  }
  onCreateCourse() {
    this.create.emit();
  }

}
