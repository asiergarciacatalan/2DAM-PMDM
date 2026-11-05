import { TestBed } from '@angular/core/testing';
import { Control1Servicio } from './control1-servicio';

describe('Control1Servicio', () => {
  let service: Control1Servicio;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Control1Servicio);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
