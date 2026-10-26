import { Component } from '@angular/core';
 export interface Alumno {
  nombre: string;
  apellido: string;
  email: string;
  foto: string;
  precio:string;
}
export const listadoAlumnos: Alumno[] = [
  {
    nombre: 'Juan',
    apellido: 'Pérez',
    email: 'juan.perez@example.com',
    precio:'850$',
    foto: 'https://picsum.photos/400/300'
  },
  {
    nombre: 'María',
    apellido: 'González',
    email: 'maria.gonzalez@example.com',
    precio:'500$',
    foto: 'https://picsum.photos/400/300'
  }
];
@Component({
  imports: [],
  selector: 'app-ejercicio2',
  styleUrl: './ejercicio2.css',
  templateUrl: './ejercicio2.html',
})
export class Ejercicio2 {
  listaAlumnos = listadoAlumnos;
  isModalOpen: boolean = false;
  alumnoSeleccionado?: Alumno;
  openModal(alumno: Alumno) {
    this.isModalOpen = true;
    this.alumnoSeleccionado = alumno;
  }
  closeModal() {
    this.isModalOpen = false;
    this.alumnoSeleccionado = undefined;
  }
  listacompra: Alumno[] = [];
  isCarritoOpen: boolean = false;
  isAvisoOpen: boolean = false;
  anadirCarrito() {
    if (this.alumnoSeleccionado) {
      this.listacompra.push(this.alumnoSeleccionado);
    }
    this.closeModal();
    this.isAvisoOpen = true;
  }
  closeAviso() {
    this.isAvisoOpen = false;
  }
  openCarrito() {
    this.isAvisoOpen = false;
    this.isCarritoOpen = true;
  }
  closeCarrito() {
    this.isCarritoOpen = false;
  }
  borrarDelCarrito(index: number) {
    this.listacompra.splice(index, 1);
  }
}
