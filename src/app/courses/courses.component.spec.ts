import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesComponent } from './courses.component';
// import { SearchComponent } from '../search/search.component';
// import { AddButtonComponent } from '../add-button/add-button.component';
// import { LoadMoreButtonComponent } from '../load-more-button/load-more-button.component';
// import { CourseItemComponent } from '../course-item/course-item.component';
import { FormsModule }   from '@angular/forms';

describe('CoursesComponent', () => {
  let component: CoursesComponent;
  let fixture: ComponentFixture<CoursesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CoursesComponent],
      imports: [
        FormsModule
      ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoursesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
    component.ngOnInit();
    expect(component.name).toEqual('Bob', 'after init component');
  });

  it('should log to console id on delete', () => {
    const component = new CoursesComponent();
    component.onDelete(1);
  })

});
