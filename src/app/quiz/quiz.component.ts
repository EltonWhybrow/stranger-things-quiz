import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Observable } from 'rxjs';
import { DataService } from '../shared/data.service';
import { HttpService } from '../shared/http-service.service';
import { MyDialogComponent } from '../shared/my-dialog/my-dialog.component';
import { QuizDialogComponent } from '../shared/quiz-dialog/quiz-dialog.component';

@Component({
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent implements OnInit {

  correctAnwser: number = 0;
  incorrectAnswer: number = 0;
  public questionList: any = [];
  public currentQuestion: number = 0;
  public score: number = 0;
  quizComplete: boolean = false;
  playerName: any = '';
  firstQuestion: boolean = false;

  constructor(private httpService: HttpService, public dialog: MatDialog, public dataService: DataService) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '350px',
      data: { playerName: this.playerName },
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed', result);
      this.playerName = result;
      if (result !== undefined) {
        localStorage.setItem('player', result);
      } else {
        this.playerName = 'Anomynous figure';
        localStorage.setItem('player', 'Anomynous figure');
      }
    });
  }

  confirmDialog(): Observable<boolean> {
    const message = 'You will lose quiz progress if you navigate away!';
    const data = { 'message': message, 'buttonYesCaption': 'OK', 'buttonNoCaption': 'No' };
    const dialogRef = this.dialog.open(QuizDialogComponent, {
      width: '350px',
      data: data
    });
    return dialogRef.afterClosed();
  }

  ngOnInit(): void {
    this.getAllQuestions();
    if (localStorage.getItem('player') !== null) {
      this.playerName = localStorage.getItem('player');
      // console.log('>>>LOG>>>', JSON.stringify(localStorage.getItem('player')))
    } else {
      this.openDialog();
    }
  }

  getAllQuestions() {
    this.httpService.getQuestions()
      .subscribe(result => {
        this.questionList = result;
      })
  }

  resetQuiz() {
    this.firstQuestion = false;
    this.currentQuestion = 0;
    this.score = 0;
    this.quizComplete = false;
  }

  answer(currentNo: number, option: any) {
    this.firstQuestion = true;
    // Quiz is completed
    if (currentNo + 1 === this.questionList.length) {
      this.quizComplete = true;
      this.firstQuestion = false;
      // console.log('quizComplete should be true', this.quizComplete);
    }
    // Correct answer - add to score and move on
    if (option === this.questionList[currentNo].correctAnswer) {
      this.score += 1;
      this.correctAnwser++;
      setTimeout(() => {
        this.currentQuestion++;
        if (this.score === 20) {
          this.dataService.quizWinner = true;
          localStorage.setItem('wrgame', 'true');
        }
      }, 200);
    } else {
      // Wrong answer move on
      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
      }, 200);

    }
  }

}
