import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { pagosInterface } from '../../models/pagoInterface';
import { DataApiService } from '../../service/data-api.service';
import { subscribeOn } from 'rxjs/operators';

@Component({
  selector: 'app-ver-relacion',
  templateUrl: './ver-relacion.component.html',
  styleUrls: ['./ver-relacion.component.css']
})
export class VerRelacionComponent implements OnInit {

  ver: any=[]
  constructor(private dataApi: DataApiService, private _router:ActivatedRoute,private router: Router ) { }

  ngOnInit() {
    const params = this._router.snapshot.params;
    console.log(params)
    if(params.id){
      this.dataApi.VerPago(params.id)
      .subscribe(
        res=>{
          this.ver=res;
        },
        error=>console.error(error)
      )
    }
    
  }

}
