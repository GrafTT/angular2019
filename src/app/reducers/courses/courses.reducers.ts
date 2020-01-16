import {ICourse} from '../../models/course';
import {CoursesActions, coursesActionsType} from './courses.actions';

export const courses = 'courses';

export interface CoursesState {
    coursesList: ICourse[];
    courseById: ICourse
}

const initialState: CoursesState = {
    coursesList: [],
    courseById: {
        id: null,
        title: '',
        creationDate: '',
        duration: null,
        description: ''
    }
}

export const coursesReducer = (state = initialState, action: CoursesActions) => {
    switch(action.type) {
        case coursesActionsType.updateCoursesList:
            return {
                ...state,
                coursesList: action.payload
            };
        case coursesActionsType.updateCourseById:
            return {
                ...state,
                courseById: action.payload
            };
        default:
            return state;
    }
}