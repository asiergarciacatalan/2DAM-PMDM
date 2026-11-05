import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Directivas } from './pages/directivas/directivas';
import { Comunicacion } from './pages/comunicacion/comunicacion';
import { Formularios } from './pages/formularios/formularios';
import { Servicios } from './pages/servicios/servicios';
import { HttpClient } from './pages/http-client/http-client';

export const routes: Routes = [
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'directivas',
        component: Directivas
    },
    {
        path: 'comunicacion',
        component: Comunicacion
    },
    {
        path: 'formularios',
        component: Formularios
    },
    {
        path: 'servicios',
        component: Servicios
    },
    {
        path: 'http-client',
        component: HttpClient
    }
];