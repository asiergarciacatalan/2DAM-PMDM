import { Component } from '@angular/core';

import{Hijo2} from '../../hijo/hijo2/hijo2';

@Component({
  imports: [Hijo2],
  selector: 'app-clases',
  styleUrl: './clases.css',
  templateUrl: './clases.html',
})
export class Clases {
  mensajepadre: string = '';

  procesarGuardado(event: any) {
    console.log( event);
    this.mensajepadre = event;
  }
}
