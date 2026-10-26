import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio1',
  styleUrl: './ejercicio1.css',
  templateUrl: './ejercicio1.html',
})
export class Ejercicio1 {
  @Output() respuesta1 =new  EventEmitter<number>(); 
  num1: number = 0;
  num2: number = 0;
  enviarRespuesta1() {
    this.respuesta1.emit(this.num1+this.num2);
    }

}
