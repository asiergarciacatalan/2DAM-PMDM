# ÍNDICE PARA EL EXAMEN DE ANGULAR

Ábrelo en VS Code (Ctrl+Shift+V para verlo bonito) y usa Ctrl+F.
Regla: no escribas desde cero nada que ya tengas hecho. Busca aquí → abre el archivo → copia → adapta nombres.

---

## 1. "Si me piden esto… lo tengo aquí"

| Me piden… | Archivo donde ya lo tienes | Qué copiar |
|---|---|---|
| Añadir una página nueva con su ruta | `proyecto3/src/app/app.routes.ts` + `proyecto3/src/app/aside/aside.html` | import del componente, `{ path, component }` y el `<a routerLink>` del menú |
| Ruta por defecto y 404 | `DAM-proyecto03/src/app/app.routes.ts` (líneas finales) | `{ path: '', redirectTo: '/inicio', pathMatch: 'full' }` y `{ path: '**', redirectTo: '/inicio' }` |
| Menú con enlace activo | `DAM-proyecto03/src/app/nav/nav.html` | `routerLink="/x" routerLinkActive="active"` |
| Submenú desplegable en el menú lateral | `proyecto3/src/app/aside/aside.html` + `aside.ts` | botón `(click)="togglePagesMenu2()"` + `@if (isPagesMenuOpen2)` |
| Input de texto/número enlazado | `DAM-proyecto04/src/app/ejercicios/ejercicio1/ejercicio1.html` | `[(ngModel)]="num1"` (y `FormsModule` en `imports`) |
| Select que cambia otra lista | `proyecto3/src/app/pages/controlflow/ejercicio1/ejercicio1.html` línea 19 + `.ts` método `cambiarmenu()` | `[(ngModel)]` + `(ngModelChange)="cambiarmenu()"` |
| Descuento según tipo de cliente | `proyecto3/.../controlflow/ejercicio1/ejercicio1.ts` método `descuento()` | if / else if / else que devuelve el % |
| Lista con `@for` / tabla | `proyecto3/.../controlflow/ejercicio1/ejercicio1.html` líneas 46 y 87 | `@for (x of lista; track x.nombre)` |
| Mensaje si la lista está vacía | `proyecto3/.../controlflow/ejercicio2/ejercicio2.html` línea 203 | `} @empty { ... }` |
| `@if` / `@else` | `proyecto3/.../controlflow/ejercicio1/ejercicio1.html` | `@if (tipocarta === '') { } @else { }` |
| Botón deshabilitado | `proyecto3/.../controlflow/ejercicio1/ejercicio1.html` línea 64 | `[disabled]="nombre === '' \|\| platoNombre === ''"` |
| Añadir a un array y limpiar campos | `proyecto3/.../controlflow/ejercicio1/ejercicio1.ts` método `anadirReserva()` | `this.reservas.push({...})` y luego vaciar variables |
| Precio con 2 decimales | `proyecto3/.../controlflow/ejercicio1/ejercicio1.html` | `{{ reserva.precio.toFixed(2) }}` |
| Tarjetas (cards) de productos/alumnos | `proyecto3/.../controlflow/ejercicio2/ejercicio2.html` línea 38 | `<article>` dentro del `@for` |
| Modal (abrir, cerrar, clic fuera) | `proyecto3/.../controlflow/ejercicio2/ejercicio2.html` líneas 76-135 + `.ts` `openModal()` / `closeModal()` | fondo con `(click)="closeModal()"` y caja con `(click)="$event.stopPropagation()"` |
| Carrito: añadir, ver, borrar | `proyecto3/.../controlflow/ejercicio2/ejercicio2.ts` | `anadirCarrito()`, `borrarDelCarrito(index)` con `splice` |
| Lo mismo pero con SIGNALS | `proyecto3/src/app/pages/signal/ejercicio1s/ejercicio1s.ts` | `signal<Alumno[]>([])`, `.set()`, leer con `lista()` |
| Signal booleano (abrir/cerrar) | `proyecto3/src/app/app.ts` (busca isSideMenuOpen) | `isSideMenuOpen = signal(false)` + `.set(!this.isSideMenuOpen())` |
| Padre → hijo (`@Input`) | `DAM-proyecto03/src/app/hijo/hijo1/hijo1.ts` + `paginas/funciones/funciones.html` | `@Input() nombreHijo` y `<app-hijo1 [nombreHijo]="mensaje">` |
| Hijo → padre (`@Output`) | `DAM-proyecto03/src/app/hijo/hijo2/hijo2.ts` + `paginas/clases/clases.html` y `.ts` | `@Output() x = new EventEmitter<string>()`, `.emit()`, `(x)="metodo($event)"` |
| Varios hijos mandando respuesta al padre | `DAM-proyecto04/src/app/respuestas/respuestas.html` y `.ts` | `<app-ejercicio1 (respuesta1)="obtenerRespuesta1($event)" />` |
| Hijo → padre sin datos (solo avisar) | `proyecto3/src/app/header/header.ts` y `header.html` | `@Output() toggleSideMenu = new EventEmitter<void>()` + `toggleSideMenu.emit()` |
| Mostrar/ocultar un componente | `Proyecto_1/src/app/padre/padre.html` y `.ts` | `@if (esVisible) { <app-hijo> }` + `alternarComponente()` |
| Ciclo de vida (ngOnInit, ngOnDestroy…) | `Proyecto_1/src/app/hijo/hijo.ts` | los 4 métodos con `implements` y `clearInterval` |
| Clase con constructor y métodos | `DAM-proyecto04/src/app/ejercicios/ejercicio5/ejercicio5.ts` | `class CuentaBancaria` |
| Interface + array de datos | `proyecto3/src/app/pages/signal/ejercicio1s/ejercicio1s.ts` (arriba) | `export interface Alumno` + `export const listadoAlumnos: Alumno[]` |
| Convertir texto en array | `DAM-proyecto04/src/app/ejercicios/ejercicio3/ejercicio3.ts` | `split(',')` (mejor sin espacios + `trim()`) |
| Objeto a texto | `DAM-proyecto04/src/app/ejercicios/ejercicio2/ejercicio2.ts` | `JSON.stringify(this.alumno)` |
| Cerrar algo al hacer clic fuera | `proyecto3/src/app/aside/aside.ts` | `@HostListener('document:click', ['$event'])` |

---

## 2. Lo que NO tienes hecho todavía (aquí abajo está listo para copiar)

### Signals bien hechos: update y computed
```typescript
import { Component, signal, computed } from '@angular/core';

lista = signal<Producto[]>([]);

total = computed(() => {
  let suma = 0;
  for (let p of this.lista()) {
    suma = suma + p.precio;
  }
  return suma;
});

anadir(p: Producto) {
  this.lista.update(l => [...l, p]);
}

borrar(index: number) {
  this.lista.update(l => l.filter((x, i) => i !== index));
}
```
```html
<p>Total: {{ total().toFixed(2) }} €</p>
@for (p of lista(); track $index) { ... }
```

### @switch
```html
@switch (categoria) {
  @case ('bebida') { <span>🥤</span> }
  @case ('postre') { <span>🍰</span> }
  @default { <span>🍽️</span> }
}
```

### Clase CSS condicional
```html
<p [class.text-red-500]="precio > 100">{{ precio }}</p>
<tr [class.bg-gray-100]="$even">
```

### Ruta con parámetro
```typescript
{ path: 'detalle/:id', component: Detalle }
```

---

## 3. Pasos para añadir una página al proyecto (proyecto3)

1. `ng g c pages/examen/ejercicio1`
2. En `app.routes.ts`: `import { Ejercicio1 } from './pages/examen/ejercicio1/ejercicio1';` y `{ path: 'examen1', component: Ejercicio1 },`
3. En `aside.html` (y `aside-m.html` para móvil): `<a routerLink="/examen1">Examen 1</a>`
4. Si usas `[(ngModel)]`: `FormsModule` en `imports` del componente.
5. Si usas un componente hijo: el hijo en `imports` del padre.
6. ¡OJO! Si dos componentes se llaman igual (`Ejercicio1` en controlflow y en examen), al importarlo usa `as`: `import { Ejercicio1 as Examen1 } from ...`

---

## 4. Errores típicos al copiar y pegar

| Error | Solución |
|---|---|
| `Can't bind to 'ngModel'` | Falta `FormsModule` en `imports` |
| `'app-xxx' is not a known element` | Falta el hijo en `imports` del padre |
| Pantalla en blanco al pulsar un enlace | La ruta no está en `app.routes.ts` (pasa con `/ejercicio3` y `/ejercicio3s` en proyecto3) |
| `{{ lista }}` sale raro con signals | Los signals se leen con paréntesis: `lista()` |
| El signal no se actualiza | No hagas `push` al array del signal: usa `update(l => [...l, x])` o `set([...lista])` |
| Copias un `@for` y no sale nada | Cambia el nombre del array y de la variable en TODO el bloque |
| `Duplicate identifier` | Dos clases con el mismo nombre importadas: usa `as` |
| `String` vs `string` | Usa siempre `string` en minúscula |

---

## 5. Antes de entregar (últimos 10 minutos)

- [ ] `ng serve` sin errores rojos en la terminal ni en la consola del navegador (F12)
- [ ] Todos los enlaces del menú funcionan
- [ ] He probado cada botón con datos reales
- [ ] Mensaje de lista vacía (`@empty`)
- [ ] Sin `any` donde se puede poner el tipo, sin imports sin usar, sin `console.log`
- [ ] Nombres de variables claros (no `algo`, `x`, `aaa`)
