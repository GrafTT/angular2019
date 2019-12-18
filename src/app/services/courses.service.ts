import { Injectable } from '@angular/core';
import {ICourse} from '../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses:ICourse[] = [
    {id:0, title:'Video Course 1', creationDate:'2019-11-09', duration:90, description:'Digital Drawing 1 introduces students to the fundamental concepts of 2D art creation for games. Students will learn how to create traditional art and transfer it into digital formats for use in games. Specific topics include: line and form, perspective, and texturing and shading in both traditional and digital mediums. Students will apply knowledge gained in this course to conceptualize and develop concept art used in games.', topRated: true, authors: ['sdbwrt', 'rvqerv']},
    {id:1, title:'Video Course 2', creationDate:'2019-11-21', duration:95, description:'Digital Drawing 1 introduces students to the fundamental concepts of 2D art creation for games. Students will learn how to create traditional art and transfer it into digital formats for use in games. Specific topics include: line and form, perspective, and texturing and shading in both traditional and digital mediums. Students will apply knowledge gained in this course to conceptualize and develop concept art used in games.', topRated: false},
    {id:2, title:'Video Course 3', creationDate:'2019-10-01', duration:120, description:' art used in games.', topRated: false},
]
  constructor() { }

  getCourses() {
    return this.courses;
  }
  getCourse(id:number) {
    return this.courses.filter(item => item.id === id);
  }
  deleteCourse(id:number) {
    this.courses = this.courses.filter(item => item.id !== id);
    console.log(this.courses)
  }
  createCourse(course:ICourse) {
    this.courses.push(course);
    console.log(course)
  }
  updateCourse(id:number, payload:ICourse) {
    this.courses = this.courses.map(item => {
      if (item.id === id) {
        return payload;
      } else {
        return item;
      }
    })
  }
}
