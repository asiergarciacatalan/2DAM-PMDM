import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header',
  styleUrl: './header.css',
  templateUrl: './header.html',
})
export class Header {
  togglemenu() {
    const menu = document.querySelector('.menu');
    menu?.classList.toggle('hidden');
  }
}
