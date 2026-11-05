import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Control1 } from './control1';

describe('Control1', () => {
  let component: Control1;
  let fixture: ComponentFixture<Control1>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Control1],
    }).compileComponents();

    fixture = TestBed.createComponent(Control1);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
