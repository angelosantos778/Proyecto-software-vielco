import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { InicioComponent } from './inicio/inicio.component';
import { ClienteComponent } from './cliente/cliente.component';
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
import { EjemploComponent } from './ejemplo/ejemplo.component';

const routes: Routes = [
  {path:"login",component:LoginComponent },
  {path:"", component: InicioComponent},
  {path:"cliente", component:ClienteComponent},
  {path:"crear", component:CrearCuentaComponent},
  {path:"menu", component:MenuComponent},
  {path:"agregar", component:AgregarComponent},
  {path:"modificar",component:ModificarComponent},
  {path:"eliminar", component:EliminarComponent},
  {path:"carritoAgregar", component:CarritoAgregarComponent},
  {path:"loginError", component:LoginErrorComponent},
  {path:"agregarVentana", component:AgregarVentanaComponent},
  {path:"modificarVentana", component:ModificarVentanaComponent},
  {path:"eliminarVentana",component:EliminarVentanaComponent},
  {path:"ejemplo",component: EjemploComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
