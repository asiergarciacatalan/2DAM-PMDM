# SIMULACRO DE EXAMEN — hazlo hoy en 2 horas, con apuntes, SIN IA

Usa solo tus proyectos y el INDICE-EXAMEN.md. Cronométrate.

## Enunciado: Torneo de pádel del pueblo

Añade a **proyecto3** un nuevo apartado "Torneo" en el menú lateral, con dos páginas.

### Página 1 — Inscripción (`/torneo-inscripcion`) — 5 puntos
1. Interface `Jugador { nombre: string; nivel: string; categoria: string; precio: number }`. (0,5)
2. Formulario con `[(ngModel)]`: nombre (input), tipo de jugador (select: socio, no socio, invitado) y categoría (select: masculina, femenina, mixta). (1)
3. Al cambiar la categoría, se muestra con `@for` la lista de niveles disponibles de esa categoría (3 niveles por categoría, cada uno con precio). Usa `(ngModelChange)`. (1)
4. Descuento: socio 30 %, no socio 10 %, invitado 0 %. Muestra el descuento y el precio final. (1)
5. Botón "Inscribir" deshabilitado si falta el nombre o el nivel. Al pulsarlo se añade a una tabla de inscritos y se limpian los campos. Si no hay inscritos: "Todavía no hay inscritos". (1,5)

### Página 2 — Jugadores (`/torneo-jugadores`) — 5 puntos
6. Tarjetas de 6 jugadores (array fijo con foto de `https://picsum.photos/400/300?random=N`). (1)
7. Cada tarjeta es un componente hijo `TarjetaJugador` que recibe el jugador con `@Input` y emite "seleccionar" con `@Output`. (1,5)
8. Al seleccionar, se abre un modal con los datos y un botón "Añadir a mi pareja". Clic fuera cierra el modal. (1)
9. La "pareja" se guarda en un **signal** (máximo 2 jugadores; si ya hay 2, muestra un aviso). Se puede borrar a cualquiera. (1)
10. Muestra el total de la pareja (suma de precios) con `computed`. (0,5)

## Corrección
Cuando termines, pídeme en el chat: "corrige mi simulacro" y pégame los .ts y .html. Te lo puntúo sobre 10 con esta rúbrica.
