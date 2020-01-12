import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Store, select} from '@ngrx/store';
import { AuthService } from '../services/auth.service';
import { AuthState } from '../reducers/authenticate/authenticate.reducers';
import { selectToken } from '../reducers/authenticate/authenticate.selectors';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    // constructor(private auth: AuthService) {}
    token$:string; 
    constructor(private store$: Store<AuthState>) {
        this.store$.pipe(select(selectToken)).subscribe(val => this.token$ = val)
    }
    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        request = request.clone({
            setHeaders: {
                Authorization: this.token$ || '58ebfdf7ec92657b493b24da'
            }
        });
        // request = request.clone({
        //     headers: request.headers.set('Authorization', this.auth.getAuthToken())
        // })

        return next.handle(request);
    }
}