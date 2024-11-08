/*
import { createReducer, on } from '@ngrx/store';
import * as states from'./Action';
import { Producto } from './Interfaces';

export const initialProducto: Producto={
    codigoProducto:'',
    descripcion:'',
    marca:'',
    modelo:'',
    codigoPrecio:''
};

const _productoReducer = createReducer(
    initialProducto,
    on(states.producto,(state,{codigoProducto, descripcion, marca, modelo, codigoPrecio}) =>
    ({codigoProducto: codigoProducto, descripcion:descripcion, marca:marca, modelo:modelo, codigoPrecio:codigoPrecio}))
)

export function productoReducer(state:Producto,action:any){
    return _productoReducer(state,action);
}
/*

