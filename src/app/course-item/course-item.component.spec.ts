import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA, Component } from '@angular/core';

import { CourseItemComponent } from './course-item.component';
import { ICourse } from '../models/course';

describe('CourseComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '24524'};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});

describe('CourseComponent as class', () => {
  it('should get course', () => {
    const comp = new CourseItemComponent();
    const course:ICourse = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '24524'};
    comp.course = course;
    comp.onDelete.subscribe((courseId: number) => expect(courseId).toBe(course.id));
    comp.delete(course.id);
  })
});

// describe('CourseComponent as host', () => {
//   @Component({
//     template: `
//     <app-course-item [course]="course" (onDelete)="onDelete($event)"></app-course-item>
//     `
//   })
//   class TestHostComponent{
//     course:ICourse = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '24524'};
//   }

//   let component: TestHostComponent;
//   let fixture: ComponentFixture<TestHostComponent>;

//   TestBed.configureTestingModule({
//     declarations: [ CourseItemComponent, TestHostComponent ]
//   })

//   beforeEach(() => {
//     fixture = TestBed.createComponent(TestHostComponent);
//     component = fixture.componentInstance;
//     fixture.detectChanges();
//   });

//   it('should create', () => {
//     component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '24524'};
//     fixture.detectChanges();
//     expect(component).toBeTruthy();
//   });

// });
