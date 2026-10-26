import { Component, EventEmitter, Output } from '@angular/core';
import {FormsModule} from '@angular/forms';
export interface Alumno{
nombre: String;
edad:number;
}
@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio2',
  styleUrl: './ejercicio2.css',
  templateUrl: './ejercicio2.html',
})
export class Ejercicio2 {
  @Output() respuesta2= new EventEmitter<String>();
  nombre :String="";
  edad:number=0;
alumno:Alumno={
  nombre:"",
  edad:24
}
enviarRespuesta2(){
  this.alumno.nombre = this.nombre
  this.alumno.edad=this.edad
  this.respuesta2.emit(JSON.stringify(this.alumno));

}

}


