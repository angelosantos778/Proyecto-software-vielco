import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
import { LoginComponent } from './login/login.component';
import { CrearCuentaComponent } from './crear-cuenta/crear-cuenta.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarComponent } from './agregar/agregar.component';
import { ModificarComponent } from './modificar/modificar.component';
import { EliminarComponent } from './eliminar/eliminar.component';
import { CarritoAgregarComponent } from './carrito-agregar/carrito-agregar.component';
import { LoginErrorComponent } from './login-error/login-error.component';
import { AgregarVentanaComponent } from './agregar-ventana/agregar-ventana.component';
import { ModificarVentanaComponent } from './modificar-ventana/modificar-ventana.component';
import { EliminarVentanaComponent } from './eliminar-ventana/eliminar-ventana.component';
import { StoreModule } from '@ngrx/store';
import { EjemploComponent } from './ejemplo/ejemplo.component';
//import { productoReducer } from './Reducer';


@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    ClienteComponent,
    LoginComponent,
    CrearCuentaComponent,
    MenuComponent,
    AgregarComponent,
    ModificarComponent,
    EliminarComponent,
    CarritoAgregarComponent,
    LoginErrorComponent,
    AgregarVentanaComponent,
    ModificarVentanaComponent,
    EliminarVentanaComponent,
    EjemploComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule,
    FormsModule
//    StoreModule.forRoot({producto:productoReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
