import { Component } from '@angular/core';


@Component({
  selector: 'app-presu',
  templateUrl: './presupuesto.component.html'
})
export class PresupuestoComponent   {
  


  newgrupo:boolean;
  ref:String = "Presupuesto";
  nombre:String = "Creacion de Presupuesto";
 

tableData1 =  [
        ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
        ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['4','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['5', 'Paul Dickens', 'Communication', '2015', '69,201', ''],
        ['6', 'Paul Dickens', 'Communication', '2015', '69,201', '']
    ];

  CreadoGrupo(){
    this.newgrupo=true;
    this.ref="Pr1Pro"
    this.nombre= "Presupuesto para el Proyecto 1";
    console.log("dio clic");
  }

  addItem(){
    this.tableData1.push( ['7', 'Walter', 'Prueba', '2017', '99,225','']);
  }

  borrarItem(){

    this.tableData1.splice(1, 1);
    
  }

}
