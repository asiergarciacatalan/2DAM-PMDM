import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-header2',
  styleUrl: './header2.css',
  templateUrl: './header2.html',
})
export class Header2 {
  togglemenu2() {
    const menu = document.querySelector('.menu2');
    menu?.classList.toggle('hidden');
  }
}
