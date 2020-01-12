import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { authActionsType, AuthLogoutAction } from './reducers/authenticate/authenticate.actions';
import {map} from 'rxjs/operators';

@Injectable()
export class AppEffects {
  constructor(private actions$: Actions) {}
  // @Effect()
  // logout() {
  //   return this.actions$.pipe(ofType(authActionsType.logout), map(()=>{
  //     console.log('token')
  //     localStorage.removeItem('token');
  //     return new AuthLogoutAction();
  //   }))
  // }
}
