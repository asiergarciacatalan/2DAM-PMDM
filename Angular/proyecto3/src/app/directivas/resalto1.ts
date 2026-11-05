import { Directive, ElementRef, HostListener, inject, Renderer2, Input } from '@angular/core';


@Directive({

 selector: '[appResaltado]',

 standalone: true

})

export class Resaltado {

 @Input() appResaltado = '';

 @Input() colorTexto = '';


 private element = inject(ElementRef);

 private renderer = inject(Renderer2);


 @HostListener('mouseenter') onMouseEnter() {

   this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.appResaltado || '#DDD');

   if (this.colorTexto) {

     this.renderer.setStyle(this.element.nativeElement, 'color', this.colorTexto);

   }

 }


 @HostListener('mouseleave') onMouseLeave() {

   this.renderer.removeStyle(this.element.nativeElement, 'backgroundColor');

   this.renderer.removeStyle(this.element.nativeElement, 'color');

 }


}