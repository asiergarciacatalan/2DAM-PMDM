import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Hijo } from '../hijo/hijo';

@Component({
  imports: [FormsModule, Hijo],
  selector: 'app-padre',
  styleUrl: './padre.css',
  templateUrl: './padre.html',
})
export class Padre {
  
  nombre :string="";
  esVisible:boolean=false;
  alternarComponente()  {
    this.esVisible = !this.esVisible;
  }

}
