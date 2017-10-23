import { Component } from '@angular/core';
import { ItemService } from 'app/services/item.service';


@Component({
  selector: 'app-item',
  templateUrl: './item.component.html'
})
export class ItemComponent   {

  items:any[];

  constructor(private itemservices:ItemService){
    this.items=this.itemservices.getItems();
   
  }

  public setItem(ref:string, nombre:string){
    
      this.itemservices.additem(ref,nombre);
      this.items=this.itemservices.getItems();
      
    }

    public delItem(ref:string){
      this.itemservices.delItem(Number(ref));
      this.items=this.itemservices.getItems();
    }
}

