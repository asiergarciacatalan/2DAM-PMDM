import { Component, Input } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-hijo1',
  styleUrl: './hijo1.css',
  templateUrl: './hijo1.html',
})
export class Hijo1 {
  @Input() nombreHijo: string = '';
}
