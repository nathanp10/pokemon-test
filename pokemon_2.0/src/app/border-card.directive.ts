import { Directive, ElementRef,HostListener,Input } from '@angular/core';

@Directive({
  selector: '[pokemonBorderCard]'
})
export class BorderCardDirective {

  private initialcolor:string='#f5f5f5';
  private defaultColor: string ='#009688';
  private defaultHeight: number=180;

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialcolor);
  }

  @Input('pokemonBorderCard') borderColor:string | undefined;
  @Input()pokemonBorderCard:string | undefined;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder (this.borderColor||this.defaultColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.setBorder(this.initialcolor)
  }
 
 private setHeight(height: number) {
   this.el.nativeElement.style.height=`${height}px`;
  
 }
 private setBorder(color: string) {
   let border='solid 4px' + color;
  this.el.nativeElement.style.border=border;
}

}
