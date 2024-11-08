import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EliminarVentanaComponent } from './eliminar-ventana.component';

describe('EliminarVentanaComponent', () => {
  let component: EliminarVentanaComponent;
  let fixture: ComponentFixture<EliminarVentanaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EliminarVentanaComponent]
    });
    fixture = TestBed.createComponent(EliminarVentanaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
