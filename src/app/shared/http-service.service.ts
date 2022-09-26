import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

import { catchError, tap, map, filter } from 'rxjs/operators';
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
    return this.http.get<IQuestions[]>('./assets/data/st-questions.json')
      .pipe(
        map(questions => questions),
        tap(questions => console.log("questions>>>>>>>: " + JSON.stringify(questions))),
        catchError(this.handleError<any[]>([]))
      );
  }

  getShowInfo(): Observable<IShowInfo[]> {
    return this.http.get<IShowInfo[]>('./assets/data/st-info.json')
      .pipe(
        map(info => info),
        // tap(info => console.log("info: " + JSON.stringify(info))),
        catchError(this.handleError<any>([]))
      );
  }

  getCharacters(): Observable<ICharacter[]> {
    return this.http.get<ICharacter[]>('./assets/data/st-characters.json')
      .pipe(
        map(characters => characters),
        // tap(characters => console.log("characters: " + JSON.stringify(characters))),
        catchError(this.handleError<any[]>([]))
      );
  }

  getCharacterDetails(id: string): Observable<ICharacter> {
    return this.http.get<any>('./assets/data/st-characters.json').pipe(
      map(character => character.filter((data: any) => data.idString === id)),
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
