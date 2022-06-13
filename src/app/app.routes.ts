import { RouterModule, Routes } from "@angular/router";
import { IniciarSesionComponent } from "./Components/iniciar-sesion/iniciar-sesion.component";
import { CrearCuentaComponent } from "./Components/crear-cuenta/crear-cuenta.component";
import { BodyComponent } from "./Components/body/body.component";
import { OlvidoContrasenaComponent } from "./Components/olvido-contrasena/olvido-contrasena.component";
import { PerfilComponent } from "./Components/perfil/perfil.component";
import { ProductComponent } from "./Components/product/product.component";
import { BusquedaComponent } from "./Components/busqueda/busqueda.component";
import { CarritoComponent } from "./Components/carrito/carrito.component";

const APP_ROUTES: Routes = [
    { path: 'home', component: BodyComponent },
    { path: 'login', component: IniciarSesionComponent },
    { path: 'register', component: CrearCuentaComponent },
    { path: 'forgot', component: OlvidoContrasenaComponent },
    { path: 'perfil', component: PerfilComponent },
    { path: 'product', component: ProductComponent },
    { path: 'search', component: BusquedaComponent },
    { path: 'cart', component: CarritoComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);