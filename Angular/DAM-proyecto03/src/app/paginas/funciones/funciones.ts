import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import{Hijo1} from '../../hijo/hijo1/hijo1';

@Component({
  imports: [FormsModule,Hijo1],
  selector: 'app-funciones',
  styleUrl: './funciones.css',
  templateUrl: './funciones.html',
})
export class Funciones {
  mensaje: string = 'Juan Calvo';
}
