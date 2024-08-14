import { TestBed } from '@angular/core/testing';

import { FleetCoordinationService } from './fleet-coordination.service';

describe('FleetCoordinationService', () => {
  let service: FleetCoordinationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetCoordinationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
