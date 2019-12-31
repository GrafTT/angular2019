import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subscriber } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class FibService {
  fibGen: Generator;
  sub;
  constructor() { 
    this.fibGen = this.fib();
    this.sub = new BehaviorSubject(this.fibGen.next().value)
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
    return  this.fibGen.next().value
  }
}
