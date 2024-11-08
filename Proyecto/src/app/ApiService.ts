import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable, throwError } from "rxjs";
import { retry, catchError } from "rxjs/operators";
import { Producto, RespuestaProducto } from "./Interfaces";

@Injectable({ providedIn: 'root'})
export class Apiservice{
    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type':'application/json;chartset=utf-8'
        })
    }

    errorHandl(error:any){
        let errorMessage= '';
        if(error.error instanceof ErrorEvent){
            errorMessage = error.error.message;
        }
        else{
            errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
        }
        console.log(errorMessage);
        return throwError(errorMessage);
    }

    constructor(private http: HttpClient){ }
    
    agregarProducto(data:Producto): Observable<Producto> { 
        return this.http.post<Producto>('http://127.0.0.1:8080/agregar-producto',data , this.httpOptions)
            .pipe(
                retry(1),
                catchError(this.errorHandl)
           ); 
    }

    obtenerNombreProducto(producto :Producto): Observable<RespuestaProducto> { 
        return this.http.post<RespuestaProducto>('http://127.0.0.1:8080/obtener-nombre-producto', producto, this.httpOptions)
         .pipe(
                retry(1),
                catchError(this.errorHandl)
           ); 
    }

    obtenerModeloProducto(producto:Producto): Observable<RespuestaProducto> { 
        return this.http.post<RespuestaProducto>('http://127.0.0.1:8080/obtener-modelo-producto', producto, this.httpOptions)
         .pipe(
                retry(1),
                catchError(this.errorHandl)
           ); 
    }
    
    obtenerProductos(): Observable<RespuestaProducto>{
        return this.http.post<RespuestaProducto>('http://127.0.0.1:8080/', null,this.httpOptions)
        .pipe(
            retry(1),
            catchError(this.errorHandl)
        );
    }




    obtenerMarcaProducto(producto:Producto): Observable<RespuestaProducto> { 
        return this.http.post<RespuestaProducto>('http://127.0.0.1:8080/obtener-marca-producto', producto, this.httpOptions)
         .pipe(
                retry(1),
                catchError(this.errorHandl)
           ); 
    }

}




