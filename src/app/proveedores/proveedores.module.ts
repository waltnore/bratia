import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ProveedorComponent } from "./proveedor/proveedor.component";
import { CotizacionComponent } from "./cotizacion/cotizacion.component";
import { ComponentsRoutes } from './proveedores.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule
  ],
  declarations: [
    ProveedorComponent,
    CotizacionComponent
  ]
})

export class ProveedoresModule {}
