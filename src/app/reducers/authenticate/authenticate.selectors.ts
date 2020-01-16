import { createFeatureSelector, createSelector } from "@ngrx/store";
import { authenticate, AuthState } from './authenticate.reducers';
import { IUserInfo } from '../../models/userInfo';

export const selectAuthFeature = createFeatureSelector<AuthState>(authenticate);

export const selectToken = createSelector(
    selectAuthFeature,
    (state:AuthState):string => state.token
);

export const selectUserInfo = createSelector(
    selectAuthFeature,
    (state:AuthState):IUserInfo => state.user
)

export const selectIsLogin = createSelector(
    selectAuthFeature,
    (state:AuthState):boolean => state.isLogin
)