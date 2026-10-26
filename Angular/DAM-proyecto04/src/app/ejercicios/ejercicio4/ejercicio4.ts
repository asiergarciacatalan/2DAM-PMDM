import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio4',
  styleUrl: './ejercicio4.css',
  templateUrl: './ejercicio4.html',
})
export class Ejercicio4 {
  @Output() respuesta4= new EventEmitter<any>();
  algo:any;
  enviarRespuesta4(){
   this.respuesta4.emit(this.algo)

}
}
function dar(a:any):any{

    return a;

}
