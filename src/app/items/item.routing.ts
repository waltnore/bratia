import { Routes } from '@angular/router';
import { GruposComponent } from "../items/grupos/grupos.component";
import { ItemComponent } from "../items/item/item.component";


export const ComponentsRoutes: Routes = [
    {
      path: '',
      children: [ {
        path: 'item',
        component: ItemComponent
    }]},{
    path: '',
    children: [ {
      path: 'grupos',
      component: GruposComponent
    }]
    }
];
