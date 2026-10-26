import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  imports: [FormsModule],
  selector: 'app-operaciones',
  styleUrl: './operaciones.css',
  templateUrl: './operaciones.html',
})
export class Operaciones {
  mensaje: string = 'Hola desde el arcivo de type script';
}
