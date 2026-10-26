import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Aside } from './aside/aside';
import { Inicio } from './paginas/inicio/inicio';
import { Header } from './header/header';
import{Header2} from './header2/header2';
import{RouterLink} from '@angular/router';

@Component({
  imports: [RouterOutlet, Aside, Inicio, Header, Header2, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
 
}
