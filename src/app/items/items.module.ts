import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { ItemComponent } from './item/item.component';
import { GruposComponent } from './grupos/grupos.component';
import { ComponentsRoutes } from './item.routing';
import { ItemService } from 'app/services/item.service';
import { GruposService } from 'app/services/grupos.service';


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(ComponentsRoutes),
    FormsModule
  ],
  declarations: [
    ItemComponent,
      GruposComponent
  ],
  providers:[
    ItemService,
    GruposService
  ]
})

export class ItemsModule {}
