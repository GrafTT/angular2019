import { TestBed } from '@angular/core/testing';

import { FibService } from './fib.service';

describe('FibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FibService = TestBed.get(FibService);
    expect(service).toBeTruthy();
  });
});
