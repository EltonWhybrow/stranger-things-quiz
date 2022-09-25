import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  // @Input() title: string | undefined;
  burgerActive: boolean = false;


  constructor() { }

  /*
  Toggle class on mobile burger
*/
  public toggleBurgerNav() {
    this.burgerActive = !this.burgerActive
  }
}
