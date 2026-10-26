import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
export class CuentaBancaria {
  saldo: number;

  constructor(saldoInicial: number) {
    this.saldo = saldoInicial;
  }

  ingresar(cantidad: number) {
    this.saldo = this.saldo + cantidad;
  }

  retirar(cantidad: number) {
    this.saldo = this.saldo - cantidad;
  }

  verSaldo() {
    return this.saldo;
  }
}

@Component({
  imports: [FormsModule],
  selector: 'app-ejercicio5',
  styleUrl: './ejercicio5.css',
  templateUrl: './ejercicio5.html',
})
export class Ejercicio5 {
  
 
  saldoInicial: number = 0;
  cantidadIngresar: number = 0;
  cantidadRetirar: number = 0;
  cuenta: CuentaBancaria = new CuentaBancaria(0);
  

  crearCuenta() {
    this.cuenta = new CuentaBancaria(this.saldoInicial);
    this.respuesta5.emit('Cuenta creada con saldo ' + this.saldoInicial);
  }

  ingresar() {
    this.cuenta.ingresar(this.cantidadIngresar);
    this.respuesta5.emit('Dinero ingresado, saldo: ' + this.cuenta.saldo);
  }

  retirar() {
    if (this.cantidadRetirar <= this.cuenta.saldo) {
      this.cuenta.retirar(this.cantidadRetirar);
      this.respuesta5.emit('Dinero retirado, saldo: ' + this.cuenta.saldo);
    } else {
      this.respuesta5.emit('No hay suficiente dinero');
    }
  }

  pedirSaldo() {
    this.respuesta5.emit('Tu saldo es: ' + this.cuenta.verSaldo());
  }
 @Output() respuesta5 = new EventEmitter<any>();


  
}
 

