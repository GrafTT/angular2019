import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {ICourse} from '../../models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css'],

})
export class CreateCoursePageComponent implements OnInit {
  course:ICourse = {
    id: null,
    description: null,
    title: null,
    creationDate: null,
    authors: null,
    topRated: null,
    duration: null
  };
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  constructor(private coursesService : CoursesService) { }

  ngOnInit() {
    this.course.id = this.coursesService.getCourses().length;
  }

  onCancel() {
    this.cancel.emit();
  }

  onSaveNewCourse() {
    this.coursesService.createCourse(this.course);
    this.save.emit()
  }

}
