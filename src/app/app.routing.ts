import { Routes } from '@angular/router';

import { AdminLayoutComponent } from './layouts/admin/admin-layout.component';
import { AuthLayoutComponent } from './layouts/auth/auth-layout.component';

export const AppRoutes: Routes = [
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
    {
      path: '',
      component: AdminLayoutComponent,
      children: [
          {
        path: '',
        loadChildren: './dashboard/dashboard.module#DashboardModule'
    },{
        path: 'proyectos',
        loadChildren: './proyectos/proyectos.module#ProyectosModule'
    },{
        path: 'proveedores',
        loadChildren: './proveedores/proveedores.module#ProveedoresModule'
    },{
        path: 'items',
        loadChildren: './items/items.module#ItemsModule'
    }
  ]
    },
    {
      path: '',
      component: AuthLayoutComponent,
      children: [{
        path: 'pages',
        loadChildren: './pages/pages.module#PagesModule'
      }
    
    
    ]
    }
];
