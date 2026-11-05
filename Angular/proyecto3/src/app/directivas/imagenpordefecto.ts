import { Directive, ElementRef, HostListener, inject, Input } from '@angular/core';


@Directive({

 selector: '[appImagePorDefecto]',

 standalone: true

})

export class ImagePorDefecto {


 @Input() appImagenPorDefecto = '';


 private el = inject(ElementRef<HTMLImageElement>);

 private yaCambiada = false;


 @HostListener('error') alFallar() {

   if (this.yaCambiada) return; // evita el bucle si la reserva tampoco existe

   this.yaCambiada = true;

   this.el.nativeElement.src = this.appImagenPorDefecto || '/img/avatar.webp';

 }


}
