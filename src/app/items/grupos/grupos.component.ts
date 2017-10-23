import { Component } from '@angular/core';
import { ItemService } from 'app/services/item.service';
import { GruposService } from 'app/services/grupos.service';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent   {


  newgrupo:boolean;
  ref:String = "Grupo";
  nombre:String = "Creacion Grupo";
  items :any[];
  grupos :any[];
  gruposItems :any[];

  constructor(private itemService:ItemService, private gruposService:GruposService){
    this.items=itemService.getItems();
    this.grupos=gruposService.getGrupos();
    this.gruposItems=gruposService.getItems();
  
  }

  CreadoGrupo(ref2:string, nombre:string){
    this.newgrupo=true;
    this.ref=ref2;
    this.nombre= nombre;
    this.gruposService.addGrupos(ref2,nombre);
    this.grupos = this.gruposService.getGrupos();

  }

  borrarGrupo(ref:string){
    this.gruposService.borraGrupos(Number(ref));
    this.grupos=this.gruposService.getGrupos();
    
  }

  addItem(grupo:string,ref:string, nombre:string, cant:string){
    this.gruposService.additem(grupo,ref,nombre,cant)
    this.gruposItems=this.gruposService.getItems();
  }

  borrarItem(ref:string){
    this.gruposService.delItem(Number(ref));
    this.gruposItems=this.gruposService.getItems();
    
  }
}

