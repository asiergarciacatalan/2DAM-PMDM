import ne from '@angular/common/locales/extra/ne';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo2',
  styleUrl: './hijo2.css',
  templateUrl: './hijo2.html',
})
export class Hijo2 {
  @Output() guardarmensaje: EventEmitter<string> = new EventEmitter();
  guardarusuario(){
    this.guardarmensaje.emit('Usuario guardado');
  }
}
