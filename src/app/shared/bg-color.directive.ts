import { Directive, ElementRef, HostListener, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBgColor]'
})
export class BgColorDirective {

  @Input() isCorrect: Boolean = false;

  constructor(private el: ElementRef, private render: Renderer2) { }

  @HostListener('click') answer() {
    // if (this.isCorrect) {
    //   this.render.setStyle(this.el.nativeElement, 'background', '#795548');
    //   this.render.setStyle(this.el.nativeElement, 'color', 'white');
    // } else {
    //   this.render.setStyle(this.el.nativeElement, 'background', '#ea3910');
    //   this.render.setStyle(this.el.nativeElement, 'color', 'white');
    // }
  }
}
