import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appProductDirective]',
  standalone: true
})
export class ProductDirectiveDirective {

  constructor(private elementRef: ElementRef) {}

  @HostListener('mouseenter') onMouseEnter() {
    this.elementRef.nativeElement.style.boxShadow = '0px 4px 10px rgb(0, 0, 0)'; 
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.elementRef.nativeElement.style.boxShadow = 'none';
  }
}
