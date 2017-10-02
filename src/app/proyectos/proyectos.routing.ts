import { Routes } from '@angular/router';


import { OrdenCompraComponent } from './ordencompra/ordencompra.component';
import { OrdenPagoComponent } from './ordenpago/ordenpago.component';
import { PresupuestoComponent } from './presupuesto/presupuesto.component';
import { ProyectoComponent } from './proyecto/proyecto.component';
import { RequisicionesComponent } from './requisiciones/requisiciones.component';


export const ComponentsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'ordencompra',
        component: OrdenCompraComponent
    }]},{
    path: '',
    children: [ {
      path: 'ordenpago',
      component: OrdenPagoComponent
    }]},{
    path: '',
    children: [ {
        path: 'presupuesto',
        component: PresupuestoComponent
    }]},{
    path: '',
    children: [ {
        path: 'proyecto',
        component: ProyectoComponent
        }]},{
    path: '',
    children: [ {
        path: 'requisiciones',
        component: RequisicionesComponent
    }]
    }
];
