import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
import {Store, select} from "@ngrx/store";
import { Injectable } from '@angular/core';
import { AuthState } from './reducers/authenticate/authenticate.reducers';
import { selectIsLogin } from './reducers/authenticate/authenticate.selectors';

@Injectable()
export class AuthGuard implements CanActivate{
    isLogin$: Observable<boolean> = this.store$.pipe(select(selectIsLogin));
    constructor(private authService: AuthService, private router: Router, public store$:Store<AuthState>) {
        this.isLogin$.subscribe(val => {
            val || (this.router.navigate(['/login']));
        })
    }
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         return this.isLogin$
        // return this.checkLogin();
    }

    checkLogin(): boolean {
        console.log(this.isLogin$)
        if (this.isLogin$) { return true; }
        // if(this.isLogin$.subscribe(val => val)) {
        //     return true
        // }
        this.router.navigate(['/login']);
        return false;
      }
}