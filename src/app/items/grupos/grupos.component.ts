import { Component } from '@angular/core';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent   {

  newgrupo:boolean;
  ref:String = "Grupo";
  nombre:String = "Creacion Grupo";
 

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
    this.ref="G1ParDem"
    this.nombre= "Demolicion de pared";
    console.log("dio clic");
  }

  addItem(){
    this.tableData1.push( ['7', 'Walter', 'Prueba', '2017', '99,225','']);
  }

  borrarItem(){

    this.tableData1.splice(1, 1);
    
  }
  
}
