import { TestBed } from '@angular/core/testing';
import { ScropService } from './scrop.service';
describe('ScropService', () => {
  let service: ScropService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ScropService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
