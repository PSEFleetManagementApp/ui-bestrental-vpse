import { TestBed } from '@angular/core/testing';

import { FleetCoordinatorRoutesGuardService } from './fleet-coordinator-routes-guard.service';

describe('FleetCoordinatorRoutesGuardService', () => {
  let service: FleetCoordinatorRoutesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetCoordinatorRoutesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
