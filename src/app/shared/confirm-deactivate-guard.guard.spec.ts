import { TestBed } from '@angular/core/testing';

import { ConfirmDeactivateGuardGuard } from './confirm-deactivate-guard.guard';

describe('ConfirmDeactivateGuardGuard', () => {
  let guard: ConfirmDeactivateGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ConfirmDeactivateGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
