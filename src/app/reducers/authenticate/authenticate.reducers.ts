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
    isLogin: true,
    user: null
}

export const authReducer = (state = initialState, action: AuthActions) => {
    switch(action.type) {
        case authActionsType.login:
            return {
                ...state,

            };
        case authActionsType.logout:
            localStorage.removeItem('token');
            return {
                ...state,
                token: '',
                isLogin: false,
                user: null
            }
        default:
            return state;

    }
}