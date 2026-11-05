import { Component, ElementRef, HostListener } from '@angular/core';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-aside',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './aside.html',
  styleUrl: './aside.css',
})
export class Aside {

  constructor(private el: ElementRef, private router: Router) { }

  isOpen = true;
  isPagesMenuOpen1 = false;
  isPagesMenuOpen2 = false;
  isPagesMenuOpen3 = false;
  isPagesMenuOpen4 = false;
  isPagesMenuOpen5 = false;


  closeSideMenu() {
    this.isOpen = false;
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as Node;
    const clickedInside = this.el.nativeElement.contains(target);
    if (!clickedInside && this.isOpen) {
      this.closeSideMenu();
    }
  }



  togglePagesMenu1() {
    this.isPagesMenuOpen1 = !this.isPagesMenuOpen1;
  }
  togglePagesMenu2() {
    this.isPagesMenuOpen2 = !this.isPagesMenuOpen2;
  }
  togglePagesMenu3() {
    this.isPagesMenuOpen3 = !this.isPagesMenuOpen3;
  }
   togglePagesMenu4() {
    this.isPagesMenuOpen4 = !this.isPagesMenuOpen4;
  }

 togglePagesMenu5() {
    this.isPagesMenuOpen5 = !this.isPagesMenuOpen5;
  }
}
