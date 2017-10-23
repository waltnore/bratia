import { Injectable } from '@angular/core';

@Injectable()
export class CotizacionService {

  count = 2;

  coti=[
         ['1','COT1MEGA', 'Cotizacion 1 Mega','Proveedor 1'],
         ['2','COT2EMESA', 'Cotizacion 1 Emesa','Proveedor 2'],
  ];
  cotiItems=[
    ['COT1MEGA','Luminaria NA 70w',  '114.000'],
    ['COT1MEGA','Luminaria NA 150w', '250.000'],
];

  constructor() { 
      if(localStorage.getItem('my_coti')){
        this.coti=JSON.parse(localStorage.getItem('my_coti'));
      }
      if(localStorage.getItem('my_cotiItems')){
        this.cotiItems=JSON.parse(localStorage.getItem('my_cotiItems'));
      }
  }

    getGrupos(){
      return this.coti;
    }

    addGrupos(ref:string, nombre:string, prov:string){
      this.count = this.count + 1;
      this.coti.push([this.count.toString(),ref,nombre,prov]);
      localStorage.setItem('my_coti', JSON.stringify(this.coti));
      console.log(ref);
    }

    borraGrupos(ref:number){
     
        this.coti.splice(ref, 1);
        localStorage.setItem('my_coti', JSON.stringify(this.coti));
        console.log(ref);
     
    }

    getItems(){
        return this.cotiItems;
      }
  
      additem(grupo:string,ref:string, cant:string){
      
        this.cotiItems.push([grupo,ref,cant]);
        localStorage.setItem('my_cotiItems', JSON.stringify(this.cotiItems));
        console.log(ref);
      }
  
      delItem(ref:number){
       
          this.cotiItems.splice(ref, 1);
          localStorage.setItem('my_cotiItems', JSON.stringify(this.cotiItems));
          console.log(ref);
       
      }
}
