import { createFeatureSelector, createSelector } from "@ngrx/store";
import { courses, CoursesState } from './courses.reducers';
import { ICourse } from '../../models/course';

export const selectCoursesFeature = createFeatureSelector<CoursesState>(courses);

export const selectCourses = createSelector(
    selectCoursesFeature,
    (state:CoursesState):ICourse[] => state.coursesList
);

export const selectCourseById = (props) => createSelector(
    selectCoursesFeature,
    (state:CoursesState):ICourse => {
        return state.coursesList.filter(item => item.id == props.id)[0];
    }
);