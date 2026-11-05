import { Directive, HostListener } from '@angular/core';


@Directive({

 selector: '[appMayusculas]',

 standalone: true

})

export class Mayusculas {

 @HostListener('input', ['$event'])

 alEscribir(event: Event) {

   const input = event.target as HTMLInputElement;

   const pos = input.selectionStart;

   input.value = input.value.toUpperCase();

   input.setSelectionRange(pos, pos); // el cursor no salta al final

 }


}