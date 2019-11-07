import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appHighlightBorder]'
})
export class HighlightBorderDirective implements OnInit {

  @Input('appHighlightBorder') borderColor: string;
  private el: ElementRef;
  constructor(el: ElementRef) {
    this.el = el;
  }
  ngOnInit() {
    this.el.nativeElement.style.border = `1px solid ${this.borderColor}`
  }

}
