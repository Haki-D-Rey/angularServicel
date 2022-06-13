import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//Rutas
import { APP_ROUTING } from './app.routes';
//Componentes
import { AppComponent } from './app.component';
import { FooterComponent } from './Components/footer/footer.component';
import { HeaderComponent } from './Components/header/header.component';
import { BodyComponent } from './Components/body/body.component';
import { IniciarSesionComponent } from './Components/iniciar-sesion/iniciar-sesion.component';
import { CrearCuentaComponent } from './Components/crear-cuenta/crear-cuenta.component';
import { OlvidoContrasenaComponent } from './Components/olvido-contrasena/olvido-contrasena.component';
import { PerfilComponent } from './Components/perfil/perfil.component';
//Ng-Bootstrap
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductComponent } from './Components/product/product.component';
import { BusquedaComponent } from './Components/busqueda/busqueda.component';
import { CarritoComponent } from './Components/carrito/carrito.component';
//Modules
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    BodyComponent,
    IniciarSesionComponent,
    CrearCuentaComponent,
    OlvidoContrasenaComponent,
    PerfilComponent,
    ProductComponent,
    BusquedaComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    APP_ROUTING,
    NgbModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
