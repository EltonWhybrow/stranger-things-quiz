import { Component, OnDestroy, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MyDialogComponent } from '../my-dialog/my-dialog.component';
import { HttpService } from '../shared/http-service.service';

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


  constructor(private httpService: HttpService, public dialog: MatDialog) { }

  openDialog(): void {
    const dialogRef = this.dialog.open(MyDialogComponent, {
      width: '250px',
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

  ngOnInit(): void {
    this.getAllQuestions();
    if (localStorage.getItem('player') !== null) {
      this.playerName = localStorage.getItem('player');
      console.log('>>>LOG>>>', JSON.stringify(localStorage.getItem('player')))
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
    if (currentNo + 1 === this.questionList.length) {
      this.quizComplete = true;
      this.firstQuestion = false;
      console.log('quizComplete should be true', this.quizComplete);
    }
    if (option === this.questionList[currentNo].correctAnswer) {
      this.score += 1;
      this.correctAnwser++;
      setTimeout(() => {
        this.currentQuestion++;
      }, 500);

    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
      }, 500);

    }
  }

}
