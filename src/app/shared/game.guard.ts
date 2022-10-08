import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { DataService } from './data.service';

@Injectable({
  providedIn: 'root'
})
export class GameGuard implements CanActivate {

  constructor(private dataService: DataService, private router: Router) { }
  canActivate() {
    if (!this.dataService.quizWinner === true) {
      this.router.navigateByUrl('/unauthorised')
    }
    return this.dataService.quizWinner
  }

}
