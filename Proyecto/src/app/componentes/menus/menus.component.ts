import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { pagosInterface } from '../../models/pagoInterface';

@Component({
  selector: 'app-menus',
  templateUrl: './menus.component.html',
  styleUrls: ['./menus.component.css']
})
export class MenusComponent implements OnInit {

  constructor(private dataApi: DataApiService,private router: Router) { }

  private ganar: pagosInterface={
    id:0,
    detalle:'',
    ingresos:0,
    egresos: 0,
    cantidadTotal: 0,
    monto:0,
    fecha: new Date,
  }
  mensaje:string;

  ngOnInit() {
  }

  ganancia(){
    //console.log(this.ganar)
    this.dataApi.pagar(this.ganar)
    .subscribe(
      res=>{
       // console.log(this.ganar.ingresos)
        alert('Ganancia registrada por un monto de: '+ this.ganar.ingresos)
        this.router.navigate(['']);
      },
      error=>console.error(error)
    )
  }
}
