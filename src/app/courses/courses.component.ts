import { Component, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { courses } from './mock-courses';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit, OnChanges {
  courses = courses;
  name: string;

  onDelete(id: number) {
    console.log(id)
  }
  constructor() { 
    console.log('constructor')
  }

  ngOnInit() {
    this.name = 'Bob';
    console.log('OnInit')
  }

  ngOnChanges(simple: SimpleChanges) {
    console.log('onChanges')
  }

}
