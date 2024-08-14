import { TestBed } from '@angular/core/testing';

import { FleetManagerRoutesGuardService } from './fleet-manager-routes-guard.service';

describe('FleetManagerRoutesGuardService', () => {
  let service: FleetManagerRoutesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FleetManagerRoutesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
