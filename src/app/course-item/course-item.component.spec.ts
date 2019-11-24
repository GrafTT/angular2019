import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { HighlightBorderDirective } from '../highlight-border.directive';
import { DurationPipe } from '../duration.pipe';
import {CUSTOM_ELEMENTS_SCHEMA, Component, DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

import { CourseItemComponent } from './course-item.component';
import { ICourse } from '../models/course';

describe('CourseComponent', () => {
  let component: CourseItemComponent;
  let fixture: ComponentFixture<CourseItemComponent>;
  let debug: DebugElement;
  let HTMLElement: HTMLElement

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CourseItemComponent, HighlightBorderDirective, DurationPipe ],
      schemas: [
        CUSTOM_ELEMENTS_SCHEMA
    ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CourseItemComponent);
    component = fixture.componentInstance;
    debug = fixture.debugElement.query(By.css('.card'));
    HTMLElement = debug.nativeElement;
    fixture.detectChanges();
  });

  it('should create', () => {
    component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '2019-01-01', topRated: true};
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });

  it('should change border color', () => {
    expect(component.borderColor).toBeUndefined();
    component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '2019-01-01', topRated: true};
    component.ngOnChanges();
    let colors = ["green", "blue", "transparent"];
    expect(colors.includes(component.borderColor)).toBe(true);
  });

  it('should change background depands on topRated value', () => {
    component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '2019-01-01', topRated: true};
    fixture.detectChanges();

    let classes = Array.from(HTMLElement.classList);
    expect(classes.includes('bg-warning')).toBe(true);
    component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '2019-01-01', topRated: false};
    fixture.detectChanges();
    classes = Array.from(HTMLElement.classList)
    expect(classes.includes('bg-warning')).toBe(false);
  });

  it('should render star', () => {
    component.course = {id: 0, title: 'Title', description: "fw", duration: 80, creationDate: '2019-01-01', topRated: true};
    fixture.detectChanges();
    expect(HTMLElement.querySelector('h5>.fa-star')).toBeTruthy();
  });
});