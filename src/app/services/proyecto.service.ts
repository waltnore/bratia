import { Injectable } from '@angular/core';

@Injectable()
export class ProyectoService {
  count = 2;
  proy=[
         ['1','CPL1', 'Proyecto CPL 1'],
         ['2','EXP1', 'Proyecto Expansion 1']
  ];

  constructor() {
    if(localStorage.getItem('my_proy')){
    this.proy=JSON.parse(localStorage.getItem('my_proy'));
    }
   }

   getItems(){
      return this.proy;
    }

    additem(ref:string, nombre:string){
      this.count = this.count + 1;
      this.proy.push([this.count.toString(),ref,nombre]);
      localStorage.setItem('my_proy', JSON.stringify(this.proy));
      console.log(ref);
    }

    delItem(ref:number){
     
        this.proy.splice(ref, 1);
        localStorage.setItem('my_proy', JSON.stringify(this.proy));
        console.log(ref);
     
    }
}
