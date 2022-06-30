import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriaComponent } from './categoria/categoria.component';
import { SidenavComponent } from '../sidenav/sidenav.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ProductoComponent } from './producto/producto.component';
import { TablaComponent } from '../tabla/tabla.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { UsuarioComponent } from './usuario/usuario.component';

@NgModule({
  declarations: [
    AdminComponent,
    CategoriaComponent,
    SidenavComponent,
    ProductoComponent,
    TablaComponent,
    UsuarioComponent,
  ],
  imports: [CommonModule, AdminRoutingModule, NgbModule, FormsModule,ReactiveFormsModule],
  providers: [],
})
export class AdminModule {}
