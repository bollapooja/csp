import { TestBed } from '@angular/core/testing';

import { Scrop1Service } from './scrop1.service';

describe('Scrop1Service', () => {
  let service: Scrop1Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scrop1Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
