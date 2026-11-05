import { Injectable } from '@angular/core';
import { Tarea } from '../pages/Controles/control1/control1';

@Injectable({
  providedIn: 'root'
})
export class Control1Servicio {
  // Lista de tareas que se pinta en la tabla 
  listadoTareas: Tarea[] = [
    {
      nombre: 'Social Media API',
      descripcion: 'API para conectar con redes sociales',
      estado: 'In Progress',
      cumplido: 60,
      img: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-49-new.jpg',
    },
    {
      nombre: 'Geolocation App',
      descripcion: 'App que muestra tu ubicación en el mapa',
      estado: 'Under Review',
      cumplido: 20,
      img: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-40-new.jpg',
    },
    {
      nombre: 'iOS Login',
      descripcion: 'Pantalla de inicio de sesión para iPhone',
      estado: 'In Progress',
      cumplido: 70,
      img: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-39-new.jpg',
    },
    {
      nombre: 'Axios Menu',
      descripcion: 'Menú que carga datos con Axios',
      estado: 'Done',
      cumplido: 100,
      img: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-47-new.jpg',
    },
    {
      nombre: 'Resto Aperto',
      descripcion: 'Web de reservas para un restaurante',
      estado: 'Postponed',
      cumplido: 10,
      img: 'https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/img-48-new.jpg',
    },
  ];
}
