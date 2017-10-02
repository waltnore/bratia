import { RouteInfo } from './sidebar.metadata';

export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Dashboard', icon: 'material-icons' },

    { path: '/pages/timeline', title: 'Timeline Page', icon:'material-icons' },
    { path: '/pages/user', title: 'User Page', icon:'material-icons' },

    { path: '/proyectos/proyecto', title: 'Proyectos', icon:'pe-7s-plugin' },
    { path: '/proyectos/presupuesto', title: 'Presupuestos', icon:'pe-7s-plugin' },
    { path: '/proyectos/requisiciones', title: 'Pedido de Material', icon:'pe-7s-plugin' },
    { path: '/proyectos/ordencompra', title: 'Ordenes de Compra', icon:'pe-7s-plugin' },
    { path: '/proyectos/ordenpago', title: 'Ordenes de Pago', icon:'pe-7s-plugin' },

    { path: '/proveedores/proveedor', title: 'Proveedor', icon:'pe-7s-plugin' },
    { path: '/proveedores/cotizacion', title: 'Cotizacion', icon:'pe-7s-plugin' },

    { path: '/items/item', title: 'Items', icon:'pe-7s-plugin' },
    { path: '/items/grupos', title: 'Grupos', icon:'pe-7s-plugin' },

  
    { path: '/pages/login', title: 'Login Page', icon:'material-icons' },
    { path: '/pages/register', title: 'Register Page', icon:'material-icons' },
    { path: '/pages/lock', title: 'Lock Screen Page', icon:'material-icons' },




];
