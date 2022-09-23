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
  cols = 2;
  rowHeight = '450px'

  constructor(
    private httpService: HttpService,
    private router: Router,
    private responsive: BreakpointObserver) { }

  ngOnInit(): void {
    this.showCharacters$ = this.httpService.getCharacters();

    this.responsive.observe([
      Breakpoints.TabletLandscape,
      Breakpoints.TabletPortrait,
      Breakpoints.HandsetLandscape,
      Breakpoints.HandsetPortrait
    ])
      .subscribe(res => {
        const breakpoints = res.breakpoints;
        if (breakpoints[Breakpoints.TabletLandscape]) {
          this.cols = 2
          this.rowHeight = '320px'
        } else if (breakpoints[Breakpoints.TabletPortrait]) {
          this.cols = 1
          this.rowHeight = '190px'
        } else if (breakpoints[Breakpoints.HandsetLandscape]) {
          this.cols = 2
          this.rowHeight = '200px'
        } else if (breakpoints[Breakpoints.HandsetPortrait]) {
          this.cols = 1
        }
      });
  }

  getCharacterDetails(userId: number) {
    this.router.navigate(['/character-details', userId]);
  }

}
