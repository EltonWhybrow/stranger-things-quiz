import { Component, OnInit } from '@angular/core';
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

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.getAllQuestions();
  }

  getAllQuestions() {
    this.httpService.getQuestions()
      .subscribe(result => {
        this.questionList = result;
      })
  }

  resetQuiz() {
    this.currentQuestion = 0;
    this.score = 0;
    this.quizComplete = false;
  }

  answer(currentNo: number, option: any) {
    if (currentNo + 1 === this.questionList.length) {
      this.quizComplete = true;
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
