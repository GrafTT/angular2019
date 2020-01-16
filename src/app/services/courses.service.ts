import { Injectable } from '@angular/core';
import {ICourse} from '../models/course';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import {LoadingService} from '../services/loading.service';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  courses:ICourse[] = []
  constructor(private http:HttpClient, private loadingService: LoadingService) { }

  getCourses(start:number = 0, count:number = 3, textFragment:string = ''): Observable<ICourse[]> {
    return this.http.get(`http://localhost:3004/courses?start=${start}&count=${count}&textFragment=${textFragment}`).pipe(map((coursesList:any)=>{ return coursesList.map(item => {
      return {
        id: item.id,
        title: item.name,
        creationDate: item.date,
        duration: item.length,
        description: item.description,
        topRated: item.isTopRated,
        authors: item.authors}
    })}));
  }
  getCourse(id:number) {
    return this.http.get(`http://localhost:3004/courses/${id}`).pipe(map((coursesList:any)=>{ return coursesList.map(item => {
      return {
        id: item.id,
        title: item.name,
        creationDate: item.date,
        duration: item.length,
        description: item.description,
        topRated: item.isTopRated,
        authors: item.authors}
    })}));
  }
  deleteCourse(id:number) {
    return this.http.delete(`http://localhost:3004/courses/${id}`).pipe(map((coursesList:any)=>{ return coursesList.map(item => {
      return {
        id: item.id,
        title: item.name,
        creationDate: item.date,
        duration: item.length,
        description: item.description,
        topRated: item.isTopRated,
        authors: item.authors}
    })}))
  }
  createCourse(course:any) {
    let newCourse = {
      id: course.id,
      name: course.title,
      date: course.creationDate,
      length: course.duration,
      description: course.description,
      isTopRated: course.topRated,
      authors: course.authors}
    return this.http.post(`http://localhost:3004/courses`, newCourse).pipe(map((coursesList:any)=>{ return coursesList.map(item => {
      return {
        id: item.id,
        title: item.name,
        creationDate: item.date,
        duration: item.length,
        description: item.description,
        topRated: item.isTopRated,
        authors: item.authors}
    })}))
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
