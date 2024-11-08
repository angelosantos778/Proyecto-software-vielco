import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgregarVentanaComponent } from './agregar-ventana.component';

describe('AgregarVentanaComponent', () => {
  let component: AgregarVentanaComponent;
  let fixture: ComponentFixture<AgregarVentanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AgregarVentanaComponent]
    });
    fixture = TestBed.createComponent(AgregarVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
