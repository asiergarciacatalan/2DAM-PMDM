import {  Component, Input, SimpleChanges } from '@angular/core';
import{OnInit,OnChanges,OnDestroy,AfterViewInit  }from '@angular/core';


@Component({
  imports: [],
  selector: 'app-hijo',
  styleUrl: './hijo.css',
  templateUrl: './hijo.html',
})
export class Hijo implements OnInit,OnChanges,OnDestroy,AfterViewInit {
  @Input() nombre: string=""
  fechaCarga=''
  contador=0
  timer:any

  constructor(){
    console.log('Constructor ejecutado')
  }
  ngOnInit(): void {
    console.log('ngOnInit ejecutado')
    this.fechaCarga=new Date().toLocaleString()
    this.timer=setInterval(()=>{
      this.contador++
    },1000)
    
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ejecutado')
    if(changes['nombre']){
      console.log(`Nuevo nombre recibido: ${changes['nombre'].currentValue}`)
    }
  }
  ngAfterViewInit(): void {
     console.log('Vista completamente renderizada');
  }
  ngOnDestroy(): void {
    console.log('Componente destruido');
    clearInterval(this.timer)
    console.log('timer liberado')
  }
}
