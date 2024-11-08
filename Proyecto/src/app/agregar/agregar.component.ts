import { Component, OnInit } from '@angular/core';
import { Apiservice } from '../ApiService';
import { Producto, Categoria } from '../Interfaces';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styleUrls: ['./agregar.component.scss']
})
export class AgregarComponent implements OnInit{
  
  codigoProducto: String='';
  descripcion: String='';
  marca: String='';
  modelo: String='';
  codigoPrecio: String='';
  codigo_categoria: Categoria = { codigoCategoria: '', nombre: '' };

  mensaje_final:String='';
  
  constructor(private api: Apiservice) { }
  ngOnInit(): void {
  }

  agregar():void{
    console.log(this.codigoProducto);
    console.log(this.descripcion);
    console.log(this.marca);
    console.log(this.modelo);
    console.log(this.codigoPrecio);
    console.log(this.codigo_categoria);

    const producto:Producto={
      codigoProducto:this.codigoProducto,
      descripcion:this.descripcion,
      marca:this.marca,
      modelo:this.modelo,
      codigoPrecio:this.codigoPrecio,
      codigo_categoria:this.codigo_categoria,
    }
      this.api.agregarProducto(producto).subscribe(data =>{
      this.mensaje_final= 'Se agregó el producto de manera exitosa ';
      window.open('http://localhost:4200/agregarVentana', '_blank');
    })
  }



}



