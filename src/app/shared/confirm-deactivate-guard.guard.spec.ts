import { TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { ConfirmDeactivateGuard } from './confirm-deactivate-guard.guard';

describe('ConfirmDeactivateGuard', () => {
  let guard: ConfirmDeactivateGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        MatDialogModule
      ],
      providers: [
        ConfirmDeactivateGuard
      ]
    });
    guard = TestBed.inject(ConfirmDeactivateGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
