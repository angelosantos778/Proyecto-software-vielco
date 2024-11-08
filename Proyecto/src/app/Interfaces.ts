export interface Categoria {
    codigoCategoria?: String;
    nombre?: String;

}

export interface Producto{

    codigoProducto?: String;
    descripcion?: String;
    marca?: String;
    modelo?: String;
    codigoPrecio?: String;
    codigo_categoria: Categoria;
}

export interface RespuestaProducto{
    lista_producto: Producto[]
}