import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({

 selector: '[appMostrarSi]',

})

export class MostrarSi {


 private tpl = inject(TemplateRef);

 private vcr = inject(ViewContainerRef);

 private visible = false;


 @Input() set appMostrarSi(condicion: boolean) {

   if (condicion && !this.visible) {

     this.vcr.createEmbeddedView(this.tpl);

     this.visible = true;

   } else if (!condicion && this.visible) {

     this.vcr.clear();

     this.visible = false;

   }

 }


}