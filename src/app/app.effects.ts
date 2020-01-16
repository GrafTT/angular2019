import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType} from '@ngrx/effects';
import { authActionsType, AuthLogoutAction, AuthLoginRequestAction, AuthLoginAction, AuthGetUserInfoAction, AuthSetUserInfoAction } from './reducers/authenticate/authenticate.actions';
import { coursesActionsType, CoursesUpdateCoursesListAction, CoursesGetCourseByIdAction, CoursesUpdateCourseByIdAction, CoursesUpdateCourseAction, CoursesLoadMoreCoursesAction } from './reducers/courses/courses.actions';
import {CoursesService } from './services/courses.service';
import {map, mergeMap, tap, switchMap} from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions, private courseService: CoursesService, private auth:AuthService) {}
  @Effect()
  logout() {
    return this.actions$.pipe(ofType(authActionsType.logoutRequest), map(()=>{
      console.log('token')
      localStorage.removeItem('token');
      return new AuthLogoutAction();
    }))
  }
  @Effect()
  login() {
    return this.actions$.pipe(ofType<AuthLoginRequestAction>(authActionsType.loginRequest), switchMap((action)=>{
      return this.auth.login(action.payload).pipe(map((data)=>{
        return new AuthLoginAction(true);
      }))
    }))
  }
  @Effect()
  getCourseById() {
    return this.actions$.pipe(ofType(coursesActionsType.getCourseById), map((action:CoursesGetCourseByIdAction)=>{
      let course = this.courseService.getCourse(action.payload);
      return new CoursesUpdateCourseByIdAction(course[0])
    }))
  };

  @Effect()
  getCourses() {
    return this.actions$.pipe(ofType(coursesActionsType.getCoursesList), switchMap(()=>{
      return this.courseService.getCourses().pipe(
        map(list => {
          return new CoursesUpdateCoursesListAction(list)})
      )
    }))
  };

  @Effect()
  loadMore() {
    return this.actions$.pipe(ofType<CoursesLoadMoreCoursesAction>(coursesActionsType.loadMoreCourses), switchMap((action)=>{
      return this.courseService.getCourses(0, action.payload, '').pipe(
        map(list => {
          console.log(action.payload)
          return new CoursesUpdateCoursesListAction(list)})
      )
    }))
  }

  @Effect()
  getUserInfo() {
    return this.actions$.pipe(ofType<AuthGetUserInfoAction>(authActionsType.getUserInfo), switchMap(()=>{
      return this.auth.getUserInfo().pipe(
        map(user => {
          console.log(user)
          return new AuthSetUserInfoAction(user)})
      )
    }))
  }
}
