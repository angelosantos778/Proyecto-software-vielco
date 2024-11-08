import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoAgregarComponent } from './carrito-agregar.component';

describe('CarritoAgregarComponent', () => {
  let component: CarritoAgregarComponent;
  let fixture: ComponentFixture<CarritoAgregarComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CarritoAgregarComponent]
    });
    fixture = TestBed.createComponent(CarritoAgregarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
