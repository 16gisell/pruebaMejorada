import { Component, OnInit } from '@angular/core';
import { DataApiService } from '../../service/data-api.service';
import { AuthService } from '../../service/auth.service';
import { pagosInterface } from '../../models/pagoInterface';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  tiendas: any =[];
  constructor(private dataApi: DataApiService, private authService: AuthService) { }

  ngOnInit() {
    this.getListTienda();
  }

  getListTienda(){
    this.dataApi.getAllTienda().subscribe(
      resp => {
        //console.log(resp)
         this.tiendas = resp;
      },
      error => console.log(error)
      );
  }
}
