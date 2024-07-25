import { TestBed } from '@angular/core/testing';

import { CustomerRoutesGuardService } from './customer-routes-guard.service';

describe('CustomerRoutesGuardService', () => {
  let service: CustomerRoutesGuardService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CustomerRoutesGuardService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
