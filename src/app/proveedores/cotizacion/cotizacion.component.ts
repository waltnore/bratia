import { Component } from '@angular/core';
import { ItemService } from 'app/services/item.service';
import { CotizacionService } from 'app/services/cotizacion.service';


@Component({
  selector: 'app-coti',
  templateUrl: './cotizacion.component.html'
})
export class CotizacionComponent   {
  
  
  newgrupo:boolean;
  ref:String = "Cotizacion";
  nombre:String = "Creacion de Cotizaciones";
  items :any[];
  grupos :any[];
  gruposItems :any[];

  constructor(private itemService:ItemService, private cotiService:CotizacionService){
    this.items=itemService.getItems();
    this.grupos=cotiService.getGrupos();
    this.gruposItems=cotiService.getItems();
  
  }

  CreadoGrupo(ref2:string, nombre:string, prov:string){
    this.newgrupo=true;
    this.ref=ref2;
    this.nombre= nombre;
    this.cotiService.addGrupos(ref2,nombre,prov);
    this.grupos = this.cotiService.getGrupos();

  }

  borrarGrupo(ref:string){
    this.cotiService.borraGrupos(Number(ref));
    this.grupos=this.cotiService.getGrupos();
    
  }

  addItem(grupo:string,ref:string,cant:string){
    this.cotiService.additem(grupo,ref,cant)
    this.gruposItems=this.cotiService.getItems();
  }

  borrarItem(ref:string){
    this.cotiService.delItem(Number(ref));
    this.gruposItems=this.cotiService.getItems();
    
  }
}

