import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarVentanaComponent } from './modificar-ventana.component';

describe('ModificarVentanaComponent', () => {
  let component: ModificarVentanaComponent;
  let fixture: ComponentFixture<ModificarVentanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModificarVentanaComponent]
    });
    fixture = TestBed.createComponent(ModificarVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
