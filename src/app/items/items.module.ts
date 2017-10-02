import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { GruposComponent } from './grupos/grupos.component';
import { ComponentsRoutes } from './item.routing';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule
  ],
  declarations: [
    ItemComponent,
      GruposComponent
  ]
})

export class ItemsModule {}
