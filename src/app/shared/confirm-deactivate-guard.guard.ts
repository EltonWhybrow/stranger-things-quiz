import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CanDeactivate } from '@angular/router';
import { of } from 'rxjs';
import { QuizComponent } from '../quiz/quiz.component';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<QuizComponent> {

  constructor(private dialog: MatDialog) { }

  canDeactivate(target: QuizComponent): any {
    if (target.firstQuestion) {
      return target.confirmDialog();
      //return window.confirm('Quiz will be reset if you navigate away?');
    }
    return of(true);
  }

}
