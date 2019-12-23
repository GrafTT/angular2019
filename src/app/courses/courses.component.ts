import { Component, OnInit, OnChanges, SimpleChanges, ChangeDetectionStrategy, Output, EventEmitter } from '@angular/core';
import { CoursesService } from '../services/courses.service';
import { LoadingService } from '../services/loading.service';
import {ICourse} from '../models/course';
import { Subject } from 'rxjs';
import { debounceTime, switchMap, distinctUntilChanged, tap } from 'rxjs/operators';

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
  searchTerm$ = new Subject<string>();
  @Output() create = new EventEmitter()

  constructor(private coursesService : CoursesService, private loadService: LoadingService) { }
  
  ngOnInit() {
    this.loadService.isLoading(true);
    this.coursesService.getCourses().subscribe((data: ICourse[]) => {
      this.loadService.isLoading(false);
      this.courses = data;
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

}
