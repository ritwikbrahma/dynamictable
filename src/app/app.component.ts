import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tableapp';

  //array of objects
  private fieldArray: Array<any> = [];

  //empty object
  private newAttribute: any = {};

  private rowArray: Array<any> = [];

  private newRow: any = {};


  addRowValue(){
    this.rowArray.push(this.newRow);
    this.newRow = {};
  }

  deleteRowValue(index){
    this.rowArray.splice(index,1);
  }

  addFieldValue(){
    this.fieldArray.push(this.newAttribute);
    this.newAttribute = {};
  }

  deleteFieldValue(index){
    this.fieldArray.splice(index,1);

  }
}
