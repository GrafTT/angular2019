import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from "@angular/router";
import {AuthService} from "./services/auth.service";
import {Observable} from "rxjs";
import { Injectable } from '@angular/core';

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router) {}
 
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : Observable<boolean> | boolean{
         
        return this.checkLogin();
    }

    checkLogin(): boolean {
        if (this.authService.isAuthenticate()) { return true; }
    
        this.router.navigate(['/login']);
        return false;
      }
}