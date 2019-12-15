import { TestBed } from '@angular/core/testing';

import { CoursesService } from './courses.service';



describe('CoursesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    expect(service).toBeTruthy();
  });

  it('should return all courses', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    service.courses = [{id:0, title:'Video Course 1', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true},
    {id:1, title:'Video Course 2', creationDate:'2019-11-21', duration:95, description:'Digital Drawing 1', topRated: false},
    {id:2, title:'Video Course 3', creationDate:'2019-10-01', duration:120, description:'Digital Drawing 1 introduces', topRated: false},]
    let all = service.getCourses()
    expect(all.length === service.courses.length).toBe(true);
  });

  it('should return only one course specified by id', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    service.courses = [{id:0, title:'Video Course 1', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true},
    {id:1, title:'Video Course 2', creationDate:'2019-11-21', duration:95, description:'Digital Drawing 1', topRated: false},
    {id:2, title:'Video Course 3', creationDate:'2019-10-01', duration:120, description:'Digital Drawing 1 introduces', topRated: false},]
    let one = service.getCourse(0);
    expect(one[0].title).toEqual('Video Course 1');
  });

  it('should return courses without item specified by id', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    service.courses = [{id:0, title:'Video Course 1', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true},
    {id:1, title:'Video Course 2', creationDate:'2019-11-21', duration:95, description:'Digital Drawing 1', topRated: false},
    {id:2, title:'Video Course 3', creationDate:'2019-10-01', duration:120, description:'Digital Drawing 1 introduces', topRated: false},]
    service.deleteCourse(0);
    let list = service.getCourses();
    expect(list.find(item => item.id === 0)).toBeUndefined();
  });

  it('should create course item', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    service.courses = [{id:0, title:'Video Course 1', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true},
    {id:1, title:'Video Course 2', creationDate:'2019-11-21', duration:95, description:'Digital Drawing 1', topRated: false},
    {id:2, title:'Video Course 3', creationDate:'2019-10-01', duration:120, description:'Digital Drawing 1 introduces', topRated: false},]
    service.createCourse({id:4, title:'Video Course 4', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true});
    let list = service.getCourses();
    expect(list.length === service.courses.length).toBeTruthy();
  });

  it('should ubpade course item', () => {
    const service: CoursesService = TestBed.get(CoursesService);
    service.courses = [{id:0, title:'Video Course 1', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true},
    {id:1, title:'Video Course 2', creationDate:'2019-11-21', duration:95, description:'Digital Drawing 1', topRated: false},
    {id:2, title:'Video Course 3', creationDate:'2019-10-01', duration:120, description:'Digital Drawing 1 introduces', topRated: false},]

    service.updateCourse(0, {id:0, title:'Video Course 45', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1.', topRated: true});
    expect(service.courses.find(item=>item.id === 0).title).toEqual('Video Course 45');
  });
});
