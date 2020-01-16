import { Action } from "@ngrx/store";

import {IUser} from '../../models/user';
import {IUserInfo} from '../../models/userInfo';
export enum authActionsType {
    login = '[auth] login',
    loginRequest = '[auth] login request',
    logoutRequest = '[auth] login request',
    logout = '[auth] logout',
    getToken = '[auth] get auth token',
    getUserInfo = '[auth] get user info',
    setUserInfo = '[auth] set user info'
}

export class AuthLoginAction implements Action {
    readonly type = authActionsType.login;
    constructor(public payload:boolean) {
        console.log(this.payload)
    }
}

export class AuthLoginRequestAction implements Action {
    readonly type = authActionsType.loginRequest;
    constructor(public payload:IUser) {
        
    }
}

export class AuthLogoutAction implements Action {
    readonly type = authActionsType.logout;
}

export class AuthLogoutRequestAction implements Action {
    readonly type = authActionsType.logoutRequest;
}

export class AuthGetTokenAction implements Action {
    readonly type = authActionsType.getToken;
}

export class AuthGetUserInfoAction implements Action {
    readonly type = authActionsType.getUserInfo;
}

export class AuthSetUserInfoAction implements Action {
    readonly type = authActionsType.setUserInfo;
    constructor(public payload:IUserInfo) {
        
    }
}


export type AuthActions = AuthSetUserInfoAction | AuthLogoutRequestAction | AuthLoginRequestAction | AuthGetTokenAction | AuthGetUserInfoAction | AuthLoginAction | AuthLogoutAction;