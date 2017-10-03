import { Component } from '@angular/core';


@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html'
})
export class GruposComponent   {

  newgrupo:boolean;
 

tableData1 = {
    headerRow: [ '#', 'Name', 'Job Position', 'Since', 'Salary', 'Actions'],
    dataRows: [
        ['1', 'Andrew Mike', 'Develop', '2013', '99,225',''],
        ['2', 'John Doe', 'Design', '2012', '89,241', 'btn-round'],
        ['3', 'Alex Mike', 'Design', '2010', '92,144', 'btn-simple'],
        ['4','Mike Monday', 'Marketing', '2013', '49,990', 'btn-round'],
        ['5', 'Paul Dickens', 'Communication', '2015', '69,201', '']
    ]
 };

  CreadoGrupo(){
    this.newgrupo=true
    console.log("dio clic")
  }
  
}
