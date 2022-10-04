import { Component, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-quiz-dialog',
  templateUrl: './quiz-dialog.component.html',
  styleUrls: ['./quiz-dialog.component.scss']
})
export class QuizDialogComponent {

  constructor(
    public dialogRef: MatDialogRef<QuizDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  onCloseClick() {
    this.dialogRef.close(false);
  }

  onSubmit() {
    this.dialogRef.close(true);
  }

}
