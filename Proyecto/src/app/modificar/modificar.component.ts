import { Component } from '@angular/core';
import { Producto } from '../Interfaces';
import { Apiservice } from '../ApiService';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar',
  templateUrl: './modificar.component.html',
  styleUrls: ['./modificar.component.scss']
})
export class ModificarComponent {
  nombre: String='';
  lista_producto: Producto[]=[];


  constructor(private api:Apiservice) { }
  ngOnInit(): void {
  }

  buscar():void{
    console.log(this.nombre)
    const producto: Producto={
      codigoProducto:null,
      descripcion: this.nombre,
      marca: null,
      modelo: null,
      codigoPrecio: null,
      codigo_categoria: {
        codigoCategoria:null,
        nombre:null
      }
    }
    this.api.obtenerNombreProducto(producto).subscribe(respuesta=>this.lista_producto=respuesta.lista_producto)
  }

}
