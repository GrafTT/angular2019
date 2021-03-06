import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import {CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { CoursesComponent } from './courses.component';
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
    expect(component.courses).not.toBeNull();
  });

  it('should create', () => {
    let id = 0;
    component.onDelete(id);
    expect(component.courses.find(item => item.id === id)).toBeUndefined();
  });

});
