import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio2s } from './ejercicio2s';

describe('Ejercicio2s', () => {
  let component: Ejercicio2s;
  let fixture: ComponentFixture<Ejercicio2s>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio2s],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio2s);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
