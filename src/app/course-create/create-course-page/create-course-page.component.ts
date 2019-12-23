import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription} from 'rxjs';
import {ICourse} from '../../models/course';
import { CoursesService } from '../../services/courses.service';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css'],

})
export class CreateCoursePageComponent implements OnInit {
  private routeSubscription: Subscription;
  private querySubscription: Subscription;

  course:ICourse = {
    id: null,
    description: null,
    title: null,
    creationDate: null,
    authors: [],
    topRated: null,
    duration: null
  };
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  constructor(private coursesService : CoursesService, private router: Router, private activatedRoute: ActivatedRoute) {
    this.routeSubscription = activatedRoute.params.subscribe(params=>this.course.id=params['id']);
    this.querySubscription = activatedRoute.queryParams.subscribe(
        (queryParam: any) => {
            this.course.title = queryParam['title'];
            this.course.description = queryParam['description'];
            this.course.creationDate = queryParam['creationDate'];
            this.course.authors = queryParam['authors'];
            this.course.duration = queryParam['duration'];
        }
    );
   }

  ngOnInit() {
    // this.course.id = this.coursesService.getCourses().length;
    console.log(this.course)
  }

  onCancel() {
    // this.cancel.emit();
    this.router.navigate(['/courses']);
  }

  onSaveNewCourse() {
    
    console.log(this.course);
    this.coursesService.createCourse(this.course);
    this.save.emit();
    this.router.navigate(['/courses']);
  }

}
