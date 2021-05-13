import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEcoEventComponent } from './create-eco-event.component';

describe('CreateEcoEventComponent', () => {
  let component: CreateEcoEventComponent;
  let fixture: ComponentFixture<CreateEcoEventComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateEcoEventComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEcoEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
