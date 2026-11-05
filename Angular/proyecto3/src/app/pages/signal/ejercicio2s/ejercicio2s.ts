import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../../service/alumnos-service';

@Component({
  imports: [],
  selector: 'app-ejercicio2s',
  styleUrl: './ejercicio2s.css',
  templateUrl: './ejercicio2s.html',
})
export class Ejercicio2s {
  alumnoservice=inject(AlumnosService)
  alumnos=this.alumnoservice.obtenerAlumnos()
  constructor(){
    console.log(this.alumnos)
  }
}
