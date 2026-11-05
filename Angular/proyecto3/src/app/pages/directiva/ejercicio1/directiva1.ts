import { Component, inject } from '@angular/core';
import { AlumnosService } from '../../../service/alumnos-service';
import { Resaltado } from '../../../directivas/resalto1';

@Component({
  imports: [Resaltado ],
  selector: 'app-directiva1',
  styleUrl: './directiva1.css',
  templateUrl: './directiva1.html',
})
export class Directiva1 {
  // Traemos el servicio con inject() y pedimos el listado de alumnos
  alumnoservice = inject(AlumnosService);
  alumnos = this.alumnoservice.obtenerAlumnos();
}
