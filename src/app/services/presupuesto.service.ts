import { Injectable } from '@angular/core';

@Injectable()
export class PresupuestoService {
  count = 2;
  count2 = 2;
  presu=[
         ['1','PROY1PRE1', 'Presupuesto 1 para el proyecto 1'],
         ['2','PROY2PRE1', 'Presupuesto 2 para el proyecto 1'],
  ];
  presuGrupos=[
    ['PROY1PRE1','Demolicion Pared', '10'],
    ['PROY1PRE1','Pintada muro', '15'],
];

  constructor() { 
      if(localStorage.getItem('my_presu')){
        this.presu=JSON.parse(localStorage.getItem('my_presu'));
      }
      if(localStorage.getItem('my_presuGrupos')){
        this.presuGrupos=JSON.parse(localStorage.getItem('my_presuGrupos'));
      }
  }

    getPresu(){
      return this.presu;
    }

    addPresu(ref:string, nombre:string){
      this.count = this.count + 1;
      this.presu.push([this.count.toString(),ref,nombre]);
      localStorage.setItem('my_presu', JSON.stringify(this.presu));
      console.log(ref);
    }

    borraPresu(ref:number){
     
        this.presu.splice(ref, 1);
        localStorage.setItem('my_presu', JSON.stringify(this.presu));
        console.log(ref);
     
    }

    getItems(){
        return this.presuGrupos;
      }
  
      additem(grupo:string,ref:string,  cant:string){
        this.count2 = this.count2 + 1;
        this.presuGrupos.push([ref,grupo,cant]);
        localStorage.setItem('my_presuGrupos', JSON.stringify(this.presuGrupos));
        console.log(ref);
      }
  
      delItem(ref:number){
       
          this.presuGrupos.splice(ref, 1);
          localStorage.setItem('my_presuGrupos', JSON.stringify(this.presuGrupos));
          console.log(ref);
       
      }
}
