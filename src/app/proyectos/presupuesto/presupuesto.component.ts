import { Component } from '@angular/core';
import { GruposService } from 'app/services/grupos.service';
import { PresupuestoService } from 'app/services/presupuesto.service';
import { ProyectoService } from 'app/services/proyecto.service';


@Component({
  selector: 'app-presu',
  templateUrl: './presupuesto.component.html'
})
export class PresupuestoComponent   {
  

  newgrupo:boolean;
  ref:String = "Presupuesto";
  nombre:String = "Creacion de Presupuestos";
  presu :any[];
  presoGrupos :any[];
  proy: any[];
  grupos: any[];

  constructor(private presuService:PresupuestoService, private gruposService:GruposService, private proyectoService:ProyectoService){
    this.presu=presuService.getPresu();
    this.presoGrupos=presuService.getItems();
    this.proy = proyectoService.getItems();
    this.grupos = gruposService.getGrupos();
  
  }

  CreadoGrupo(ref2:string, nombre:string){
    this.newgrupo=true;
    this.ref=ref2;
    this.nombre= nombre;
    this.presuService.addPresu(ref2,nombre);
    this.presu = this.presuService.getPresu();

  }

  borrarGrupo(ref:string){
    this.presuService.borraPresu(Number(ref));
    this.presu=this.presuService.getPresu();
    
  }

  addItem(ref:string,grupo:string, cant:string){
    this.presuService.additem(grupo,ref,cant)
    this.presoGrupos=this.presuService.getItems();
  }

  borrarItem(ref:string){
    this.presuService.delItem(Number(ref));
    this.presoGrupos=this.presuService.getItems();
    
  }
  
}
