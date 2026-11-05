import { Directive, inject, Input, TemplateRef, ViewContainerRef } from '@angular/core';


@Directive({

 selector: '[appRepetir]',

})

export class Repetir {


 private tpl = inject(TemplateRef<{ index: number }>);

 private vcr = inject(ViewContainerRef);

 @Input() set appRepetir(veces: number) {

   this.vcr.clear();

   for (let i = 0; i < veces; i++) {

     this.vcr.createEmbeddedView(this.tpl, { index: i });

   }

 }

}
