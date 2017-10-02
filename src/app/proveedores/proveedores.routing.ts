import { Routes } from '@angular/router';
import { ProveedorComponent } from "../proveedores/proveedor/proveedor.component";
import { CotizacionComponent } from "../proveedores/cotizacion/cotizacion.component";


export const ComponentsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'proveedor',
        component: ProveedorComponent
    }]},{
    path: '',
    children: [ {
      path: 'cotizacion',
      component: CotizacionComponent
    }]
    }
];
