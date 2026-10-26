import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule} from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio3',
  styleUrl: './ejercicio3.css',
  templateUrl: './ejercicio3.html',
})
export class Ejercicio3 {
   @Output() respuesta3= new EventEmitter<String>();
  lista: String="";
  listaArray: String[]=[];
  convertirArray(lista:String){
    this.listaArray=lista.split(" , ")


  }
   enviarRespuesta3() {
    this.respuesta3.emit(this.lista);
    }

}
