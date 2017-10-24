import { Injectable } from '@angular/core';

@Injectable()
export class ItemService {
  count = 2;
  items=[
         ['1','NA70', 'Luminara NA 70w'],
         ['2','NA1000', 'Luminara NA 100w']
  ];

  constructor() {
    
    this.items=JSON.parse(localStorage.getItem('my_items'));
   }

    getItems(){
      return this.items;
    }

    additem(ref:string, nombre:string){
      this.count = this.count + 1;
      this.items.push([this.count.toString(),ref,nombre]);
      localStorage.setItem('my_items', JSON.stringify(this.items));
      console.log(ref);
    }

    delItem(ref:number){
     
        this.items.splice(ref, 1);
        localStorage.setItem('my_items', JSON.stringify(this.items));
        console.log(ref);
     
    }
}
