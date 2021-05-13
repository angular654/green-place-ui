import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GeoFindComponent } from './geo-find.component';

describe('GeoFindComponent', () => {
  let component: GeoFindComponent;
  let fixture: ComponentFixture<GeoFindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GeoFindComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GeoFindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
