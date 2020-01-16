import {IUserInfo} from '../../models/userInfo';
import {AuthActions, authActionsType} from './authenticate.actions';

export const authenticate = 'auth';

export interface AuthState {
    token: string;
    isLogin: boolean;
    user: IUserInfo
}

const initialState: AuthState = {
    token: '',
    isLogin: false,
    user: null
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch(action.type) {
        case authActionsType.login:
            return {
                ...state,
                isLogin: action.payload
            };
        case authActionsType.logout:
            return {
                ...state,
                token: '',
                isLogin: false,
                user: null
            };
        case authActionsType.setUserInfo:
            return {
                ...state,
                user: action.payload
            }
        default:
            return state;
    }
}