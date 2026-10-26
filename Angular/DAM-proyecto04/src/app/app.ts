import { Component, signal } from '@angular/core';

import{Respuestas} from './respuestas/respuestas';

@Component({
  imports: [ Respuestas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
}
