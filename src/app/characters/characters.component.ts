import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ICharacter } from '../shared/character.interface';
import { HttpService } from '../shared/http-service.service';

@Component({
  templateUrl: './characters.component.html',
  styleUrls: ['./characters.component.scss'],
})
export class CharactersComponent implements OnInit {

  showCharacters$: Observable<ICharacter[]> | undefined;
  cols = 1;
  rowHeight = '450px'

  constructor(
    private httpService: HttpService,
    private router: Router,
    private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.showCharacters$ = this.httpService.getCharacters();

    this.responsive.observe([
      // Breakpoints.TabletLandscape,
      // Breakpoints.TabletPortrait,
      // Breakpoints.HandsetLandscape,
      // Breakpoints.HandsetPortrait,
      Breakpoints.XLarge,
      Breakpoints.Large,
      Breakpoints.Medium,
      Breakpoints.Small,

    ])
      .subscribe(res => {
        const breakpoints = res.breakpoints;
        if (breakpoints[Breakpoints.XLarge]) {
          this.cols = 2
          this.rowHeight = '400px'
        } else if (breakpoints[Breakpoints.Large]) {
          this.cols = 2
          this.rowHeight = '400px'
        } else if (breakpoints[Breakpoints.Medium]) {
          this.cols = 2
          this.rowHeight = '300px'
        } else if (breakpoints[Breakpoints.Small]) {
          this.cols = 1
        }
      });
  }

  /*
  Route to the choosen characters details passing in the idString of character
  */
  getCharacterDetails(userId: string) {
    this.router.navigate(['/character-details', userId]);
  }

}
