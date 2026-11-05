import { Directive, ElementRef, HostListener, inject, Input, Renderer2 } from '@angular/core';


@Directive({

 selector: '[appTooltip]',

})

export class Tooltip {


 @Input() appTooltip = '';


 private el = inject(ElementRef);

 private renderer = inject(Renderer2);

 private tooltip: HTMLElement | null = null;


 @HostListener('mouseenter') mostrar() {

   if (!this.appTooltip || this.tooltip) return;


   const t = this.renderer.createElement('div');

   this.renderer.appendChild(t, this.renderer.createText(this.appTooltip));


   const r = this.el.nativeElement.getBoundingClientRect();

   const estilos: Record<string, string> = {

     position: 'fixed',

     left: `${r.left + r.width / 2}px`,

     top: `${r.top - 8}px`,

     transform: 'translate(-50%, -100%)',

     background: '#1B2F4D',

     color: '#fff',

     padding: '4px 8px',

     'border-radius': '6px',

     'font-size': '12px',

     'white-space': 'nowrap',

     'pointer-events': 'none',

     'z-index': '1000'

   };

   Object.entries(estilos).forEach(([prop, valor]) => this.renderer.setStyle(t, prop, valor));


   this.renderer.appendChild(document.body, t);

   this.tooltip = t;

 }


 @HostListener('mouseleave') ocultar() {

   if (this.tooltip) {

     this.renderer.removeChild(document.body, this.tooltip);

     this.tooltip = null;

   }

 }


 ngOnDestroy() {

   this.ocultar(); // si el elemento desaparece con el tooltip abierto

 }


}
