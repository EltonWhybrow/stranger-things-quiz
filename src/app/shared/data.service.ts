import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  public playerName: string = 'Nobody';
  public quizWinner: boolean = false;


}
