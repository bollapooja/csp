import { TestBed } from '@angular/core/testing';

import { Scrop2Service } from './scrop2.service';

describe('Scrop2Service', () => {
  let service: Scrop2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Scrop2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
