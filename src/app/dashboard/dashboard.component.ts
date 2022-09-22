import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpService } from '../shared/http-service.service';

import { IShowInfo } from '../shared/show.interface';


@Component({
  templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {

  showData$: Observable<IShowInfo[]> | undefined;

  constructor(private httpService: HttpService) { }

  ngOnInit(): void {
    this.showData$ = this.httpService.getShowInfo();
  }

}
