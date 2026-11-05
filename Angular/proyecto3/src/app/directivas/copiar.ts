import { Directive, ElementRef, HostBinding, HostListener, inject, Input, Renderer2 } from '@angular/core';


@Directive({

 selector: '[appCopiar]',

})

export class Copiar {


 @Input({ required: true }) appCopiar = '';

 @HostBinding('style.cursor') cursor = 'pointer';


 private el = inject(ElementRef);

 private renderer = inject(Renderer2);


 @HostListener('click') async copiar() {

   await navigator.clipboard.writeText(this.appCopiar);


   const aviso = this.renderer.createElement('span');

   this.renderer.appendChild(aviso, this.renderer.createText('¡Copiado'));

   this.renderer.setStyle(aviso, 'color', 'green');

   this.renderer.appendChild(this.el.nativeElement, aviso);


   setTimeout(

     () => this.renderer.removeChild(this.el.nativeElement, aviso),

     1500

   )


 }


}
