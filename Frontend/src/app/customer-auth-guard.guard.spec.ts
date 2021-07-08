import { TestBed } from '@angular/core/testing';

import { CustomerAuthGuardGuard } from './customer-auth-guard.guard';

describe('CustomerAuthGuardGuard', () => {
  let guard: CustomerAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CustomerAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
