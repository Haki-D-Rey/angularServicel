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
import { SidenavComponent } from './admin/Components/sidenav/sidenav.component';
import { DashboardComponent } from './admin/Components/dashboard/dashboard.component';
import { ProductsComponent } from './admin/Components/products/products.component';
import { StatisticsComponent } from './admin/Components/statistics/statistics.component';
import { CoupenComponent } from './admin/Components/coupen/coupen.component';
import { PagesComponent } from './admin/Components/pages/pages.component';
import { MediaComponent } from './admin/Components/media/media.component';
import { SettingsComponent } from './admin/Components/settings/settings.component';
import { AdminComponentComponent } from './admin/Components/admin-component/admin-component.component';
import { BodyAdminComponent } from './admin/Components/bodyAdmin/bodyAdmin.component';

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
    SidenavComponent,
    DashboardComponent,
    ProductsComponent,
    StatisticsComponent,
    CoupenComponent,
    PagesComponent,
    MediaComponent,
    SettingsComponent,
    AdminComponentComponent,
    BodyAdminComponent,
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
