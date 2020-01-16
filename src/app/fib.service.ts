import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  fibGenenerator: Generator;
  sub;
  constructor() { 
    this.fibGenenerator = this.fib();
    this.sub = new BehaviorSubject(this.fibGenenerator.next().value)
  }
  fib = function* (): Generator {
    let a: number;
    let b:number;
    [a, b] = [0, 1]
    while (true) {
      yield a;
      [a, b] = [b, a + b]
    }
  }
  fibonachi() {
    return  this.fibGenenerator.next().value
  }
}
