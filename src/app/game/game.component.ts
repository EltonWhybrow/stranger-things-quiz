import { Component, ElementRef, OnInit, QueryList, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss']
})
export class GameComponent implements OnInit {

  playText: string = 'Lets play!';
  disablePlay: boolean = false;
  playerName: any = '';
  lastHole: boolean = false;
  timeUp: boolean = false;
  score: number = 0;
  moles: any;
  hiScore: any;

  constructor() { }

  // Note that the parameter here relates to the #holes in the template.
  @ViewChildren('holes')
  public holes!: QueryList<ElementRef<HTMLLIElement>>

  ngOnInit(): void {
    if (localStorage.getItem('player') !== null) {
      this.playerName = localStorage.getItem('player');
    } else {
      this.playerName = 'Mystery person';
    }
    if (localStorage.getItem('hiscore') !== null) {
      this.hiScore = localStorage.getItem('hiscore');
      console.log('>>>LOG hiscore onit >>>', this.hiScore);

    } else {
      this.playerName = 'Mystery person';
    }
    // console.log('>>> this.holes >>>', this.holes);
    // console.log('>>> event >>>', this.scoreBoard);
    // console.log('>>> this.moles >>>', this.moles);
  }

  randomTime(min: number, max: number) {
    return Math.round(Math.random() * (max - min) + min);
  }

  randomHole(holes: any): any {
    // console.log('>>>holes>>>', holes);

    const idx = Math.floor(Math.random() * holes.length);
    const hole = holes[idx];
    if (hole === this.lastHole) {
      console.log('Ah nah thats the same one bud');
      return this.randomHole(holes);
    }
    this.lastHole = hole;
    return hole;
  }

  peep() {
    const time = this.randomTime(400, 1200);
    const hole = this.randomHole(this.holes.toArray());
    // console.log('>>>LOG HOLE>>>', hole);

    hole.nativeElement.classList.add('up');
    setTimeout(() => {
      hole.nativeElement.classList.remove('up');
      if (!this.timeUp) this.peep();
    }, time);
  }

  startGame() {
    this.disablePlay = true;
    this.timeUp = false;
    this.score = 0;
    this.peep();
    setTimeout(() => {
      setTimeout(() => {
        if (this.hiScore < this.score) {
          this.hiScore = this.score;
          localStorage.setItem("hiscore", JSON.stringify(this.hiScore))
        }
      }, 1000)
      this.timeUp = true;
      this.playText = 'Try again?'
      this.disablePlay = false;
    }, 20000)
  }

  bonk(e: Event) {
    if (!e.isTrusted) return; // cheater!
    this.score++;
    // console.log('>>> event >>>', e);
  }

}
