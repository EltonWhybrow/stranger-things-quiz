import { Injectable } from '@angular/core';
import { CanDeactivate } from '@angular/router';
import { QuizComponent } from '../quiz/quiz.component';

@Injectable()
export class ConfirmDeactivateGuard implements CanDeactivate<QuizComponent> {

  canDeactivate(target: QuizComponent) {
    if (target.firstQuestion) {
      return window.confirm('Quiz will be reset if you navigate away?');
    }
    return true;
  }

}
