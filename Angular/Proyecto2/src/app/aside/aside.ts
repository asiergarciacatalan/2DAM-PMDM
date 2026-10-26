import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
@Component({
  imports: [RouterLink],
  selector: 'app-aside',
  styleUrl: './aside.css',
  templateUrl: './aside.html',
})
export class Aside {
  desplegable: boolean = false;
public toggleDesplegable() {
  this.desplegable = !this.desplegable;
}
}

