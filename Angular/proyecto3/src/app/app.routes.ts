import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Directivas } from './pages/directivas/directivas';
import { Comunicacion } from './pages/comunicacion/comunicacion';
import { Formularios } from './pages/formularios/formularios';
import { Servicios } from './pages/servicios/servicios';
import { HttpClient } from './pages/http-client/http-client';
import { Controlflow } from './pages/controlflow/controlflow';
import { Ejercicio1 } from './pages/controlflow/ejercicio1/ejercicio1';
import { Ejercicio2 } from './pages/controlflow/ejercicio2/ejercicio2';
import { Ejercicio1s } from './pages/signal/ejercicio1s/ejercicio1s';
import { Ejercicio2s } from './pages/signal/ejercicio2s/ejercicio2s';


export const routes: Routes = [
    {
        path: 'inicio',
        component: Inicio
    },
    {
        path: 'ejercicio1',
        component: Ejercicio1
    },
    {
        path: 'ejercicio2',
        component: Ejercicio2
    },
    {
        path: 'ejercicio1s',
        component: Ejercicio1s
    },
    {
        path: 'ejercicio2s',
        component: Ejercicio2s
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