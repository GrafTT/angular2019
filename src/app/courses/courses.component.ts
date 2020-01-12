import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter, OnDestroy, ɵConsole } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../services/loading.service';
import { FibService } from '../fib.service';
import {ICourse} from '../models/course';
import { Subject, interval, Subscriber, Subscription } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class CoursesComponent implements OnInit, OnChanges, OnDestroy {
  name: string;
  courses: ICourse[] = [];
  isNoCourses:boolean = true;
  step:number = 3;
  timer = interval(1000);
  fibonacchi: Subscription;
  searchTerm$ = new Subject<string>();
  timerId
  @Output() create = new EventEmitter()

  constructor(private coursesService : CoursesService, private loadService: LoadingService, private fib:FibService) {
    // this.fibonacchi = this.timer.subscribe(x => console.log(this.fib.fibonachi()));
   }
  
  ngOnInit() {
    this.loadService.isLoading(true);
    this.coursesService.getCourses().subscribe((data: ICourse[]) => {
      this.loadService.isLoading(false);
      this.courses = data;
      console.log(this.courses)
    });
    this.searchTerm$
    .pipe(
      debounceTime(500),
      distinctUntilChanged(),
      tap(() => this.loadService.isLoading(true)),
      switchMap(query => this.coursesService.getCourses(0, 3, query)),
      tap(() => this.loadService.isLoading(false)))
    .subscribe((data: ICourse[]) => {
      this.courses = data;
    })
  }
  
  ngOnChanges() {
  }

  handleLoadMoreBtn() {
    this.loadService.isLoading(true);
    this.coursesService.getCourses(0, this.step, '').subscribe((data: ICourse[]) => {
      this.loadService.isLoading(false);
      this.courses = data;
    });
    this.step += 3;
  }

  handleSearchCourses(query) {
    this.searchTerm$.next(query);
  }

  handleDeleteCourseBtn(id: number) {
    this.loadService.isLoading(true);
    this.coursesService.deleteCourse(id).subscribe((data: ICourse[]) => {
      console.log(data)
      this.loadService.isLoading(false);
      this.courses = data;
    });
  }
  onCreateCourse() {
    this.coursesService.createCourse
  }
  ngOnDestroy() {
    // this.fibonacchi.unsubscribe();
  }

}
