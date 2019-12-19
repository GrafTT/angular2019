import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import {ICourse} from '../models/course';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit, OnChanges {
  name: string;
  courses: ICourse[] = [];
  isNoCourses:boolean = true;
  step:number = 3;
  @Output() create = new EventEmitter()

  constructor(private coursesService : CoursesService) { }
  
  ngOnInit() {
    this.coursesService.getCourses().subscribe((data: ICourse[]) => {
      this.courses = data;
    });
  }
  
  ngOnChanges() {
  }

  handleLoadMoreBtn() {
    this.coursesService.getCourses(0, this.step, '').subscribe((data: ICourse[]) => {
      this.courses = data;
    });
    this.step += 3;
  }

  handleSearchCourses(query) {
    this.coursesService.getCourses(0, 3, query).subscribe((data: ICourse[]) => {
      this.courses = data;
    });
  }

  handleDeleteCourseBtn(id: number) {
    this.coursesService.deleteCourse(id).subscribe((data: ICourse[]) => {
      console.log(data)
      this.courses = data;
    });
  }
  onCreateCourse() {
    this.coursesService.createCourse
  }

}
