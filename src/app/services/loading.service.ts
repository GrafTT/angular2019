import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoadingService {
  load$ = new BehaviorSubject<boolean>(false)
  constructor() { }
  isLoading(val:boolean) {
    this.load$.next(val)
  }
}
