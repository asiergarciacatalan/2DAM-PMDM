import { Directive, HostListener } from '@angular/core';


@Directive({

 selector: '[appSoloNumeros]',

})

export class SoloNumeros {


 private permitidas = ['Backspace', 'Delete', 'Tab', 'ArrowLeft', 'ArrowRight', 'Home', 'End'];


 @HostListener('keydown', ['$event'])

 alPulsar(e: KeyboardEvent) {

   if (this.permitidas.includes(e.key) || e.ctrlKey || e.metaKey) return;

   if (!/^\d$/.test(e.key)) e.preventDefault();

 }


 @HostListener('paste', ['$event'])

 alPegar(e: ClipboardEvent) {

   e.preventDefault();

   const input = e.target as HTMLInputElement;

   const numeros = (e.clipboardData?.getData('text') ?? '').replace(/\D/g, '');

   input.setRangeText(numeros, input.selectionStart ?? 0, input.selectionEnd ?? 0, 'end');

   input.dispatchEvent(new Event('input')); //avisa a ngModel

 }


}
