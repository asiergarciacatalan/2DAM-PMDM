import { Component, inject } from '@angular/core';
import { Control1Servicio } from '../../../service/control1-servicio';

// Modelo de datos: cómo es una tarea
export interface Tarea {
  nombre: string;
  descripcion: string;
  estado: string;
  cumplido: number;     // porcentaje de 0 a 100
  img: string;
}

@Component({
  imports: [],
  selector: 'app-control1',
  styleUrl: './control1.css',
  templateUrl: './control1.html',
})
export class Control1 {
  // Traemos el servicio con inject()
  servicio = inject(Control1Servicio);
  listaTareas = this.servicio.listadoTareas;

  // Botón +: suma 10% sin pasar de 100
  sumarProgreso(tarea: Tarea) {
    if (tarea.cumplido < 100) {
      tarea.cumplido = tarea.cumplido + 10;
    }
  }

  // Botón -: resta 10% sin bajar de 0
  restarProgreso(tarea: Tarea) {
    if (tarea.cumplido > 0) {
      tarea.cumplido = tarea.cumplido - 10;
    }
  }
}
