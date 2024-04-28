import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SoilanalysisComponent } from './soilanalysis.component';

describe('SoilanalysisComponent', () => {
  let component: SoilanalysisComponent;
  let fixture: ComponentFixture<SoilanalysisComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SoilanalysisComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SoilanalysisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
