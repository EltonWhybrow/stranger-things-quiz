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


// @Injectable()
// export class CanDeactivateGuard implements CanDeactivate<CreateQuoteComponent> {
//   constructor(
//     public dialog: MatDialog,
//   ){

//   }
//   canDeactivate(component: CreateQuoteComponent): Observable<boolean> {
//     if (!component.changesSaved) {
//       return component.confirmDialog();
//     }
//     //please import 'of' form 'rxjs/operators'
//     return of(true);
//   }
// }
