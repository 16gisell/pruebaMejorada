import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { Router, ActivatedRoute } from '@angular/router';
import { pagosInterface } from '../../models/pagoInterface';

@Component({
  selector: 'app-producto-t',
  templateUrl: './producto-t.component.html',
  styleUrls: ['./producto-t.component.css']
})
export class ProductoTComponent implements OnInit {
  closeResult: string;
  productos:any=[]
  public precioP:any;
  public detalleP: any;
 
  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) { }

  private pago: pagosInterface={
    id:0,
    detalle:'',
    ingresos:0,
    egresos: 0,
    cantidadTotal: 0,
    monto:0,
    fecha: new Date,
  }

  ngOnInit() {
    const params = this._router.snapshot.params;
    if(params.id){
      this.dataApi.getProductId(params.id)
      .subscribe(
        res=>{
          //console.log(res.precio);
          this.precioP =res.precio;
          this.detalleP = res.titulo;
          this.productos =res;
        },
        error=>console.error(error)
      )
    }
  }

  comprar(){
    //console.log(this.pago)
    this.dataApi.pagar(this.pago)
    .subscribe(
      res=>{
        alert('Gracias por hacer su compra de: '+ this.pago.detalle + ' por un monto de: ' + this.pago.egresos + '$')
        this.router.navigate(['']);
      },
      error=>console.error(error)
    )
  }

}
