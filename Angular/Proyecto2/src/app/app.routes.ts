import { Routes } from '@angular/router';
import { Inicio } from './paginas/inicio/inicio';
import { Controlflow } from './paginas/controlflow/controlflow';

export const routes: Routes = [
    {
        path: "inicio",
        component: Inicio,
    },
    {
        path: "controlflow",
        component: Controlflow,
    },
    {
        path: "**", 
        redirectTo: "inicio", 
        pathMatch: "full"
    }
];


    

