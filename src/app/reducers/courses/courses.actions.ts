import { Action } from "@ngrx/store";
import {ICourse} from '../../models/course';

export enum coursesActionsType {
    addCourse = '[courses] add',
    updateCourse = '[courses] update',
    loadMoreCourses = '[courses] load more',
    updateCoursesList = '[courses] update list',
    getCoursesList = '[courses] get list',
    getCourseById = '[courses] get course by id',
    updateCourseById = '[courses] update course item by id',
}

export class CoursesAddCourseAction implements Action {
    readonly type = coursesActionsType.addCourse;
    constructor(public payload:ICourse) {
    }
}

export class CoursesGetCourseByIdAction implements Action {
    readonly type = coursesActionsType.getCourseById;
    constructor(public payload:number){}
}

export class CoursesUpdateCourseByIdAction implements Action {
    readonly type = coursesActionsType.updateCourseById;
    constructor(public payload:ICourse) {
    }
}

export class CoursesUpdateCourseAction implements Action {
    readonly type = coursesActionsType.updateCourse;
    constructor(public payload:ICourse){}
}

export class CoursesUpdateCoursesListAction implements Action {
    readonly type = coursesActionsType.updateCoursesList;
    constructor(public payload: ICourse[]){}
}

export class CoursesGetCoursesListAction implements Action {
    readonly type = coursesActionsType.getCoursesList;
}

export class CoursesLoadMoreCoursesAction implements Action {
    readonly type = coursesActionsType.loadMoreCourses;
    constructor(public payload: number){}
}

export type CoursesActions = CoursesGetCoursesListAction| CoursesLoadMoreCoursesAction | CoursesUpdateCoursesListAction | CoursesAddCourseAction | CoursesUpdateCourseAction | CoursesUpdateCourseByIdAction | CoursesGetCourseByIdAction;