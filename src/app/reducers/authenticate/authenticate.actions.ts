import { Action } from "@ngrx/store";
import {IUser} from '../../models/user';

export enum authActionsType {
    login = '[auth] login',
    logout = '[auth] logout',
    getToken = '[auth] get auth token',
    getUserInfo = '[auth] get user info',
}

export class AuthLoginAction implements Action {
    readonly type = authActionsType.login;
    constructor(public payload:IUser) {
    }
}

export class AuthLogoutAction implements Action {
    readonly type = authActionsType.logout;
}

export class AuthGetTokenAction implements Action {
    readonly type = authActionsType.getToken;
}

export class AuthGetUserInfoAction implements Action {
    readonly type = authActionsType.getUserInfo;
}

export type AuthActions = AuthGetTokenAction | AuthGetUserInfoAction | AuthLoginAction | AuthLogoutAction;