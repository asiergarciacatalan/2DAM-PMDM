import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Directiva1 } from './directiva1';

describe('Directiva1', () => {
  let component: Directiva1;
  let fixture: ComponentFixture<Directiva1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Directiva1],
    }).compileComponents();

    fixture = TestBed.createComponent(Directiva1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
