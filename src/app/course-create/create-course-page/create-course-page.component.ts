import { Component, OnInit, Output, EventEmitter, OnChanges } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import {Subscription, Observable} from 'rxjs';
import {ICourse} from '../../models/course';
import { CoursesService } from '../../services/courses.service';
import { Store, select } from '@ngrx/store';
import { CoursesState } from 'src/app/reducers/courses/courses.reducers';
import { selectCourseById } from 'src/app/reducers/courses/courses.selectors';
import { CoursesGetCourseByIdAction } from 'src/app/reducers/courses/courses.actions';

@Component({
  selector: 'app-create-course-page',
  templateUrl: './create-course-page.component.html',
  styleUrls: ['./create-course-page.component.css'],

})
export class CreateCoursePageComponent implements OnInit, OnChanges {
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
  id:number;
  course$: Observable<ICourse>;
  @Output() cancel = new EventEmitter();
  @Output() save = new EventEmitter();
  constructor(private coursesService : CoursesService, private router: Router, private activatedRoute: ActivatedRoute, private store$:Store<CoursesState>) {
    this.routeSubscription = activatedRoute.params.subscribe(params=>{
      this.id = params['id'];
      this.course$ = this.store$.pipe(select(selectCourseById({id:this.id})))
    })

    // this.querySubscription = activatedRoute.queryParams.subscribe(
    //     (queryParam: any) => {
    //         this.course.title = queryParam['title'];
    //         this.course.description = queryParam['description'];
    //         this.course.creationDate = queryParam['creationDate'];
    //         this.course.authors = queryParam['authors'];
    //         this.course.duration = queryParam['duration'];
    //     }
    // );
   }
   ngOnChanges() {
     if(this.id) {
     }
     
   }

  ngOnInit() {
    this.course$.subscribe(val => console.log(val))
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
