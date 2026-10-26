import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Ejercicio1s } from './ejercicio1s';

describe('Ejercicio1s', () => {
  let component: Ejercicio1s;
  let fixture: ComponentFixture<Ejercicio1s>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Ejercicio1s],
    }).compileComponents();

    fixture = TestBed.createComponent(Ejercicio1s);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
