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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AgregarComponent } from './Components/agregar/agregar.component';
import { TokenInterceptorInterceptor } from './Helpers/token-interceptor.interceptor';
import { ErrorHttpInterceptorInterceptor } from './Helpers/error-http-interceptor.interceptor';

@NgModule({
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule,
    FormsModule,
    APP_ROUTING,
  ],
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
    AgregarComponent,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ErrorHttpInterceptorInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
