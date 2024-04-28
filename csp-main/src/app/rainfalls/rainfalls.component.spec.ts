import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RainfallsComponent } from './rainfalls.component';

describe('RainfallsComponent', () => {
  let component: RainfallsComponent;
  let fixture: ComponentFixture<RainfallsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RainfallsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RainfallsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
