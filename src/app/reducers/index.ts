import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {AuthState, authReducer, authenticate} from './authenticate/authenticate.reducers';
import {CoursesState, coursesReducer, courses} from './courses/courses.reducers';
import { environment } from '../../environments/environment';

export interface State {
  [authenticate]: AuthState;
  [courses]: CoursesState,
}

export const reducers: ActionReducerMap<State> = {
  [authenticate]:authReducer,
  [courses]: coursesReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
