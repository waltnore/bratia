import { Component } from '@angular/core';
import { ProyectoService } from 'app/services/proyecto.service';


@Component({
  selector: 'app-proy',
  templateUrl: './proyecto.component.html'
})
export class ProyectoComponent   {
  
  proys:any[];
  
    constructor(private _proyService:ProyectoService){
      this.proys=this._proyService.getItems();
     
    }
  
    public setItem(ref:string, nombre:string){
      
        this._proyService.additem(ref,nombre);
        this.proys=this._proyService.getItems();
        
      }
  
      public delItem(ref:string){
        this._proyService.delItem(Number(ref));
        this.proys=this._proyService.getItems();
      }
  }