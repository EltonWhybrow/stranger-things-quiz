import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // TODO Might need to use in quiz comp more??
  public playerName: string = 'Nobody';
  // TODO: shows the game once full score acheived

  // public quizWinner: any = localStorage.getItem('wrgame');
  public quizWinner: boolean = true;

}
