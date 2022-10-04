import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MyDialogComponent } from './my-dialog.component';

describe('MyDialogComponent', () => {
  let component: MyDialogComponent;
  let fixture: ComponentFixture<MyDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MyDialogComponent],
      imports: [
        MatDialogModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MyDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
