import { Injectable } from '@angular/core';

@Injectable()
export class GruposService {
  count = 2;
  count2 = 2;
  grupos=[
         ['1','DEMPAR1', 'Demolicion pared'],
         ['2','BOTESC1', 'Botada de escombros']
  ];
  gruposItems=[
    ['DEMPAR1','Luminaria NA 70w', '10', 'Cotizacion 1'],
    ['DEMPAR1','Luminaria NA 150w', '15', 'Cotizacion 2'],
];

  constructor() { 
      if(localStorage.getItem('my_grupos')){
        this.grupos=JSON.parse(localStorage.getItem('my_grupos'));
      }
      if(localStorage.getItem('my_gruposItems')){
        this.gruposItems=JSON.parse(localStorage.getItem('my_gruposItems'));
      }
  }

    getGrupos(){
      return this.grupos;
    }

    addGrupos(ref:string, nombre:string){
      this.count = this.count + 1;
      this.grupos.push([this.count.toString(),ref,nombre]);
      localStorage.setItem('my_grupos', JSON.stringify(this.grupos));
      console.log(ref);
    }

    borraGrupos(ref:number){
     
        this.grupos.splice(ref, 1);
        localStorage.setItem('my_grupos', JSON.stringify(this.grupos));
        console.log(ref);
     
    }

    getItems(){
        return this.gruposItems;
      }
  
      additem(grupo:string,ref:string, nombre:string, cant:string){
        this.count2 = this.count2 + 1;
        this.gruposItems.push([grupo,ref,cant,nombre]);
        localStorage.setItem('my_gruposItems', JSON.stringify(this.gruposItems));
        console.log(ref);
      }
  
      delItem(ref:number){
       
          this.gruposItems.splice(ref, 1);
          localStorage.setItem('my_gruposItems', JSON.stringify(this.gruposItems));
          console.log(ref);
       
      }
}
