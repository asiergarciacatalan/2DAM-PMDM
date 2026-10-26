import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

interface Plato {
  nombre: string;
  descripcion: string;
  precio: number;
}

interface Reserva {
  nombre: string;
  tipocliente: string;
  descuento: number;
  tipocarta: string;
  plato: string;
  precio: number;
}

export const cartanormal: Plato[] = [
  { nombre: 'Normal 1', descripcion: 'Plato normal 1', precio: 14.99 },
  { nombre: 'Normal 2', descripcion: 'Plato normal 2', precio: 16.99 },
  { nombre: 'Normal 3', descripcion: 'Plato normal 3', precio: 12.99 },
];

export const cartavegetariana: Plato[] = [
  { nombre: 'Vegetariano 1', descripcion: 'Plato vegetariano 1', precio: 10.99 },
  { nombre: 'Vegetariano 2', descripcion: 'Plato vegetariano 2', precio: 12.99 },
  { nombre: 'Vegetariano 3', descripcion: 'Plato vegetariano 3', precio: 9.99 },
];

export const cartavegana: Plato[] = [
  { nombre: 'Vegano 1', descripcion: 'Plato vegano 1', precio: 11.99 },
  { nombre: 'Vegano 2', descripcion: 'Plato vegano 2', precio: 13.99 },
  { nombre: 'Vegano 3', descripcion: 'Plato vegano 3', precio: 10.99 },
];

@Component({
  imports: [FormsModule],
  selector: 'app-controlflow',
  styleUrl: './controlflow.css',
  templateUrl: './controlflow.html',
})
export class Controlflow {
  // Bloque 1
  nombre: string = '';
  tipocliente: string = 'noSocio';
  tipocarta: string = '';

  // Bloque 3
  carta: Plato[] = [];
  platoNombre: string = '';
  platoPrecio: number = 0;

  // Bloque 4
  reservas: Reserva[] = [];

  // Cambia los platos según la carta elegida
  cambiarmenu() {
    if (this.tipocarta === 'normal') {
      this.carta = cartanormal;
    } else if (this.tipocarta === 'vegetariana') {
      this.carta = cartavegetariana;
    } else {
      this.carta = cartavegana;
    }
    // Si cambio de carta, quito el plato elegido
    this.platoNombre = '';
    this.platoPrecio = 0;
  }

  // Devuelve el descuento según el tipo de cliente
  descuento(): number {
    if (this.tipocliente === 'socio') {
      return 40;
    } else if (this.tipocliente === 'noSocio') {
      return 20;
    } else {
      return 0;
    }
  }

  // Guarda el plato que ha pulsado el usuario
  elegirPlato(plato: Plato) {
    this.platoNombre = plato.nombre;
    this.platoPrecio = plato.precio;
  }

  // Añade la reserva al array
  anadirReserva() {
    let precioFinal = this.platoPrecio - (this.platoPrecio * this.descuento()) / 100;

    this.reservas.push({
      nombre: this.nombre,
      tipocliente: this.tipocliente,
      descuento: this.descuento(),
      tipocarta: this.tipocarta,
      plato: this.platoNombre,
      precio: precioFinal,
    });

    // Limpio para la siguiente reserva
    this.nombre = '';
    this.platoNombre = '';
    this.platoPrecio = 0;
  }
}