import { Directive, Renderer2, OnInit, ElementRef, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit {
  @Input() defaultColor: string = 'transparent';
  @Input() highlightColor: string = 'blue';
  @HostBinding('style.backgroundColor') backgroundColor: string=this.defaultColor;

  constructor(private elRef: ElementRef, private rendrer: Renderer2) { }

  ngOnInit() {
    // this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');


  }
  @HostListener('mouseenter') mouseover(evenData: Event) {
    //  this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'blue');
    this.backgroundColor = this.highlightColor

  }
  @HostListener('mouseleave') mouseleave(evenData: Event) {
    //  this.rendrer.setStyle(this.elRef.nativeElement, 'background-color', 'transparent');
    this.backgroundColor = this.defaultColor;

  }


}
