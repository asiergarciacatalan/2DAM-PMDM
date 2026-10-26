import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Incerfaces } from './incerfaces';

describe('Incerfaces', () => {
  let component: Incerfaces;
  let fixture: ComponentFixture<Incerfaces>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Incerfaces],
    }).compileComponents();

    fixture = TestBed.createComponent(Incerfaces);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
