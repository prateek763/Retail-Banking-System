import { TestBed } from '@angular/core/testing';

import { EmployeeAuthGuardGuard } from './employee-auth-guard.guard';

describe('EmployeeAuthGuardGuard', () => {
  let guard: EmployeeAuthGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(EmployeeAuthGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
