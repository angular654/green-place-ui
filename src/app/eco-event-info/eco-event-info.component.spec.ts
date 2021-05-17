import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcoEventInfoComponent } from './eco-event-info.component';

describe('EcoEventInfoComponent', () => {
  let component: EcoEventInfoComponent;
  let fixture: ComponentFixture<EcoEventInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcoEventInfoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EcoEventInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
