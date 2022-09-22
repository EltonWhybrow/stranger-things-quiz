import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

import { IShowInfo } from './show.interface';
import { ICharacter } from './character.interface';
import { IQuestions } from './questions.interface';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  // TODO: implement as Angualar resolvers if time to enhance user experience
  getQuestions(): Observable<IQuestions[]> {
    return this.http.get<IQuestions[]>('../../assets/data/st-questions.json')
      .pipe(
        catchError(this.handleError<any[]>([]))
      );
  }

  getShowInfo(): Observable<IShowInfo[]> {
    return this.http.get<IShowInfo[]>('../../assets/data/st-info.json')
      .pipe(
        catchError(this.handleError<any>([]))
      );
  }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>('../../assets/data/st-characters.json')
      .pipe(
        catchError(this.handleError<any[]>([]))
      );
  }

  getCharacterDetails(id: number): Observable<ICharacter> {
    return this.http.get<any>('../../assets/data/st-characters.json').pipe(
      map(character => character[id]),
      // tap(character => console.log("One character: " + JSON.stringify(character))),
      catchError(this.handleError<ICharacter>())
    );
  }

  private handleError<T>(result = {} as T) {
    return (error: HttpErrorResponse): Observable<T> => {
      console.error(error);
      return of(result);
    };
  }
}
