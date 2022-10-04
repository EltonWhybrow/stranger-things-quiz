import { DOCUMENT } from '@angular/common';
import { OnInit } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { DataService } from 'src/app/shared/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  // @Input() title: string | undefined;
  burgerActive: boolean = false;
  images: string[] = ['theme-1', 'theme-2', 'theme-3', 'theme-4'];
  backgroundImage: string = "theme-1";
  currentTheme = localStorage.getItem("theme");

  constructor(@Inject(DOCUMENT) private document: any, public dataService: DataService) { }

  ngOnInit(): void {
    this.setTheme()
  }

  // Set theme on body if in local storage
  public setTheme() {
    if (!localStorage.getItem("theme")) {
      this.document.body.classList.add("theme-1");
    } else {
      this.document.body.classList.add(this.currentTheme);
    }
  }

  // Toggle class on mobile burger
  public toggleBurgerNav() {
    this.burgerActive = !this.burgerActive
  }

  public changeTheme() {
    let random = Math.round((Math.random() * 100) % 3);
    // console.log(random, Math.random() * 100)
    this.backgroundImage = this.images[random];
    this.document.body.classList.remove("theme-1", "theme-2", "theme-3", "theme-4");
    this.document.body.classList.add(this.backgroundImage);
    localStorage.setItem("theme", this.backgroundImage)
  }
}
