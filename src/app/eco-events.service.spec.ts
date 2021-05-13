import { TestBed } from '@angular/core/testing';

import { EcoEventsService } from './eco-events.service';

describe('EcoEventsService', () => {
  let service: EcoEventsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EcoEventsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
