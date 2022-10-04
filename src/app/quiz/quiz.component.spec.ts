import { HttpClientTestingModule } from '@angular/common/http/testing';
import { DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from '../core/material.module';
import { IQuestions } from '../shared/questions.interface';

import { QuizComponent } from './quiz.component';

xdescribe('QuizComponent', () => {
  let component: QuizComponent;
  let fixture: ComponentFixture<QuizComponent>;
  let debugElement: DebugElement;
  let mockExpectedQuestions: IQuestions[];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [QuizComponent],
      imports: [
        HttpClientTestingModule,
        BrowserAnimationsModule,
        MatDialogModule,
        MaterialModule
      ],
      providers: [
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: [] },
      ]

    })
      .compileComponents();

    fixture = TestBed.createComponent(QuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    mockExpectedQuestions = [
      {
        "id": 1,
        "question": "In which fictional town does the show take place?",
        "possibleAnswers": [
          "Houston",
          "Hanford",
          "Hamilton",
          "Hawkins"
        ],
        "correctAnswer": "Hawkins"
      },
      {
        "id": 2,
        "question": "What is the name of the four friends favourite fantasy tabletop game?",
        "possibleAnswers": [
          "The 13th Age",
          "Quests Of Yore",
          "Dungeons & Dragons",
          "Shadowrun",
          "Star Wars Roleplaying"
        ],
        "correctAnswer": "Dungeons & Dragons"
      },
      {
        "id": 3,
        "question": "Who were the creators of the hit TV show?",
        "possibleAnswers": [
          "The Samsung twins",
          "The Duffer brothers",
          "Bernard Manning",
          "Quentin Tarantino",
          "Steven Martin"
        ],
        "correctAnswer": "The Duffer brothers"
      }
    ] as IQuestions[];



    const { debugElement } = fixture;
    const { nativeElement } = debugElement;
    console.log(nativeElement);
    console.log(nativeElement.tagName);
    console.log(nativeElement.textContent);
    console.log(nativeElement.innerHTML);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('contains heading "Good luck Anomynous figure!"', () => {
    // Arrange
    const playerWelcome = fixture.debugElement.query(
      By.css('[data-testid="player-welcome"]')
    ).nativeElement.textContent;
    // Act
    fixture.detectChanges();
    // console.log('>>> AnswerButton >>>', playerWelcome);
    // expect
    expect(playerWelcome).toEqual('Good luck Anomynous figure!');

  });

  // it('gets something"', () => {
  //   // Arrange
  //   fixture.detectChanges();
  //   fixture.whenStable().then(() => {
  //     const buttonArray: DebugElement[] = fixture.debugElement.queryAll(
  //       By.css('[data-testid="answer-button"]')
  //     );
  //     expect(buttonArray.length).toEqual(2)
  //     console.log('>>> AnswerButton >>>', buttonArray);
  //     console.log('>>>currentQuestion>>>', component.currentQuestion);
  //     console.log('>>>questionList>>>', component.questionList);
  //   })

  // Act

  // expect
  //expect(playerWelcome).toEqual();

  // });
});
