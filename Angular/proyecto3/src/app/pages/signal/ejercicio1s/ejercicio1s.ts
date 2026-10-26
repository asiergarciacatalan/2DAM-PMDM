import { Component, signal } from '@angular/core';
export interface Alumno {
  nombre: string;
  apellido: string;
  email: string;
  imagen: string;
  img: string;
  
}
export const listadoAlumnos: Alumno[] = [
  {
    email: "aitor.garcia.perez@colegiolitterator.com",
    nombre: "Aitor",
    apellido: "García Pérez",
    imagen: "https://drive.google.com/open?id=1pke981pBNhzruhPi61fVsfPur71f8aQN",
    img: "https://lh3.googleusercontent.com/d/1pke981pBNhzruhPi61fVsfPur71f8aQN",
  },
  {
    email: "daniel.rodriguez.agudo@colegiolitterator.com",
    nombre: "Daniel",
    apellido: "Rodriguez Agudo",
    imagen: "https://drive.google.com/open?id=1g_zFmzng_zYlZirUK-qYeMj124Bck9Y_",
    img: "https://lh3.googleusercontent.com/d/1g_zFmzng_zYlZirUK-qYeMj124Bck9Y_",
  },
  {
    email: "asier.garcia.catalan@colegiolitterator.com",
    nombre: "Asier",
    apellido: "Garcia Catalan",
    imagen: "https://drive.google.com/open?id=1WrlQ_1aJRj3L7HsbeVHtO-H5l8WeUe11",
    img: "https://lh3.googleusercontent.com/d/1WrlQ_1aJRj3L7HsbeVHtO-H5l8WeUe11",
  },
  {
    email: "aitor.fernandezmarcos.salto@colegiolitterator.com",
    nombre: "Aitor",
    apellido: "Fernandez de marcos",
    imagen: "https://drive.google.com/open?id=1asm3kYY4Wu3K7o-Fch8tzNo8SQbtg046",
    img: "https://lh3.googleusercontent.com/d/1asm3kYY4Wu3K7o-Fch8tzNo8SQbtg046",
  },
  {
    email: "pablopinazo656@gmail.com",
    nombre: "Pablo",
    apellido: "Fernández Pinazo",
    imagen: "https://drive.google.com/open?id=1AzxBEWocn9ZShJLYAHvChI0m8OpQxEa-",
    img: "https://lh3.googleusercontent.com/d/1AzxBEWocn9ZShJLYAHvChI0m8OpQxEa-",
  },
  {
    email: "davidtole62@gmail.com",
    nombre: "David",
    apellido: "Tole",
    imagen: "https://drive.google.com/open?id=1fyXQRUcIl-clk7olrZD554w6vE55jP_T",
    img: "https://lh3.googleusercontent.com/d/1fyXQRUcIl-clk7olrZD554w6vE55jP_T",
  },
  {
    email: "daniel.martinbuitrago@colegiolitterator.com",
    nombre: "Daniel",
    apellido: "Martin-Buitrago Del Cerro",
    imagen: "https://drive.google.com/open?id=1QIbvVnRrfQeicn0Z0zy7xA3fn6obl_76",
    img: "https://lh3.googleusercontent.com/d/1QIbvVnRrfQeicn0Z0zy7xA3fn6obl_76",
  },
  {
    email: "angel.estebanez@colegiolitterator.com",
    nombre: "Ángel",
    apellido: "Estébanez Gómez",
    imagen: "https://drive.google.com/open?id=1cIRcoZ9I_14Anmpp1-ID-5i3NJTnOH9k",
    img: "https://lh3.googleusercontent.com/d/1cIRcoZ9I_14Anmpp1-ID-5i3NJTnOH9k",
  }
];

@Component({
  imports: [],
  selector: 'app-ejercicio1s',
  styleUrl: './ejercicio1s.css',
  templateUrl: './ejercicio1s.html',
})
export class Ejercicio1s {
    listaAlumnos = signal<Alumno[]>(listadoAlumnos);
    isModalOpen: boolean = false;
    alumnoSeleccionado = signal<any>(null);
    openModal(alumno: Alumno) {
      this.isModalOpen = true;
      this.alumnoSeleccionado.set(alumno);
    }
    closeModal() {
      this.isModalOpen = false;
      this.alumnoSeleccionado.set(null);
    }
    listacompra = signal<Alumno[]>([]);
    isCarritoOpen: boolean = false;
    isAvisoOpen: boolean = false;
    anadirCarrito() {
      let lista = this.listacompra();
      lista.push(this.alumnoSeleccionado());
      this.listacompra.set([...lista]);
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
      let lista = this.listacompra();
      lista.splice(index, 1);
      this.listacompra.set([...lista]);
    }
}
