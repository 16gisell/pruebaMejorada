import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-suma-dias',
  templateUrl: './suma-dias.component.html',
  styleUrls: ['./suma-dias.component.css']
})
export class SumaDiasComponent implements OnInit {
  
  inputNum=0;

  array: any =[3,-8,2,1,-1];
  resp: any = [];
  constructor() { }

  ngOnInit() {
  }

  calcular(){
    const num = +this.inputNum;
    //this.resp
    for (var i=0; i<this.array.length; i++){
      const calculo = (this.array[i]+num);
     // this.resp[i]['data'] = calculo
      this.resp.push(calculo);
      //console.log( this.resp)    
    }
    
    console.log( num,"hola")
  }

}
