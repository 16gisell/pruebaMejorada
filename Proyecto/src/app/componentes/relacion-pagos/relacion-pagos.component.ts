import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';

@Component({
  selector: 'app-relacion-pagos',
  templateUrl: './relacion-pagos.component.html',
  styleUrls: ['./relacion-pagos.component.css']
})
export class RelacionPagosComponent implements OnInit {
pagos:any=[];
CIngresos: any;
CEgresos: any;
total: any;
  constructor(private dataApi: DataApiService) { }

  ngOnInit() {
    this.listPagar();
  }
  
  listPagar(){
    this.dataApi.Listpagos().subscribe(
      resp => {
        //console.log(resp)
        this.pagos = resp;
        var num1=0;
        var num2=0;
        for(var i=0; i<=resp.length; i++){
          const obtIngresos= resp[i].ingresos
          this.CIngresos=num1+=obtIngresos
          const obtEgresos= resp[i].egresos
          this.CEgresos=num2+=obtEgresos
          this.total=(this.CIngresos - this.CEgresos);
         // console.log(obtIngresos,obtEgresos)          
        }        
        
      },
      error => console.log(error)
      );
  }

}
