import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderCard]'
})
export class BorderCardDirective {

  setHeight(height: number){
    this.el.nativeElement.style.height = `${height}px`;
  }
  setBorderColor(color: string){
  this.el.nativeElement.style.border =` solid 4px ${color}`;
  }

  // ElementRef, natif angular, will create a bond (référence) with the poke card
  constructor(private el : ElementRef) {
    this.setHeight(215);
    this.setBorderColor('#f5f5f5');
  }

  // pour la gestion du mouseIn , hostListener
  @HostListener('mouseenter') onMouseEnter() {
    this.setBorderColor('#009688');
  }
  
  @HostListener('mouseleave') onMouseLeave() {
    this.setBorderColor('#f5f5f5');
  }
// application sur le app.component.html au niveau de la carte - class
}
