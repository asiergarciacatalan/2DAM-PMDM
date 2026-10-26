import { Routes } from '@angular/router';
import { Paginas } from './paginas/paginas';    
import{Inicio} from './paginas/inicio/inicio';
import{Variables} from './paginas/variables/variables';
import{Clases} from './paginas/clases/clases';
import{Funciones} from './paginas/funciones/funciones';
import{Incerfaces} from './paginas/incerfaces/incerfaces';
import{Operaciones} from './paginas/operaciones/operaciones';

export const routes: Routes = [
 
  { path: 'inicio', component: Inicio },
  { path: 'variables', component: Variables },
  { path: 'clases', component: Clases },
  { path: 'funciones', component: Funciones },
  { path: 'interfaces', component: Incerfaces },
  { path: 'operaciones', component: Operaciones },
  {path: '', redirectTo: '/inicio', pathMatch: 'full'},
  {path: '**', redirectTo: '/inicio'}
];
