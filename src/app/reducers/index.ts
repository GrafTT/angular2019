import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import {AuthState, authReducer, authenticate} from './authenticate/authenticate.reducers';
import { environment } from '../../environments/environment';

export interface State {
  [authenticate]: AuthState
}

export const reducers: ActionReducerMap<State> = {
  [authenticate]:authReducer
};


export const metaReducers: MetaReducer<State>[] = !environment.production ? [] : [];
