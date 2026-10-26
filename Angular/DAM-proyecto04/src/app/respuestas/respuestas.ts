import { Component } from '@angular/core';
import { Ejercicio1 } from '../ejercicios/ejercicio1/ejercicio1';
import { Ejercicio2 } from '../ejercicios/ejercicio2/ejercicio2';
import { Ejercicio3 } from '../ejercicios/ejercicio3/ejercicio3';
import { Ejercicio4 } from '../ejercicios/ejercicio4/ejercicio4';
import { Ejercicio5 } from '../ejercicios/ejercicio5/ejercicio5';


@Component({
  imports: [Ejercicio1, Ejercicio2, Ejercicio3,Ejercicio4,Ejercicio5],
  selector: 'app-respuestas',
  styleUrl: './respuestas.css',
  templateUrl: './respuestas.html',
})
export class Respuestas {
  respuesta1: String="";
  obtenerRespuesta1(resp1:number){
    this.respuesta1="Respuesta Ejercicio1: " + resp1;
  }
  respuesta2:String=""
  obtenerRespuesta2(resp2:String){
    this.respuesta2="Respuesta Ejercicio2: "+ resp2
  }
  respuesta3:String=""
  obtenerRespuesta3(resp3:String){
    this.respuesta3="Respuesta Ejercicio3:" + resp3
  }
  respuesta4:any=""
  obtenerRespuesta4(resp4:any){
    this.respuesta4="Respuesta Ejercicio4:" + resp4
  }
  
   respuesta5: any = '';
  obtenerRespuesta5(resp5: any) {
    this.respuesta5 = 'Respuesta Ejercicio5: ' + resp5;
  }
 
  

}
