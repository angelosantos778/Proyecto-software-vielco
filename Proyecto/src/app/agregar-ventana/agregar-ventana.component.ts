import { Component } from '@angular/core';
import { Apiservice } from '../ApiService';
import { Producto } from '../Interfaces';

@Component({
  selector: 'app-agregar-ventana',
  templateUrl: './agregar-ventana.component.html',
  styleUrls: ['./agregar-ventana.component.scss']
})
export class AgregarVentanaComponent {
  lista: Producto[] = [];
  constructor(private api: Apiservice) { }

  ngOnInit(): void {
      this.api.obtenerProductos().subscribe(data =>{
        this.lista = data.lista_producto;
      });
  }
}
