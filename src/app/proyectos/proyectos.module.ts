import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { OrdenCompraComponent } from './ordencompra/ordencompra.component';
import { OrdenPagoComponent } from './ordenpago/ordenpago.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RequisicionesComponent } from './requisiciones/requisiciones.component';

import { ComponentsRoutes } from './proyectos.routing';
import { ProyectoService } from 'app/services/proyecto.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule
  ],
  declarations: [
    OrdenCompraComponent,
    OrdenPagoComponent,
    PresupuestoComponent,
    ProyectoComponent,
    RequisicionesComponent
  ],
  providers:[
    ProyectoService
  ]
})

export class ProyectosModule {}
