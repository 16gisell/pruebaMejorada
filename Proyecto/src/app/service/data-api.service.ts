import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { pagosInterface } from '../models/pagoInterface';
import { promise } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  menus: Observable<any>;
  menu: Observable<any>;

  constructor( private http: HttpClient, private authservice: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'aplication/json',
    Authorization: this.authservice.getToken()
  });

  getAllTienda(){ //devuelve todos los elementos de la tienda
    const url_api = "http://localhost:3000/api/tienda"; 
    return this.http.get(url_api);
  }

  getProductId(id:string): any{ //obtener menu por id
    const url_api ='http://localhost:3000/api';
    return (this.menu = this.http.get(url_api+'/tienda/'+id));
  }
  pagar(pagosInterface:pagosInterface):any{
    const url_api = "";
    return this.http.post('http://localhost:3000/api/pagos',pagosInterface)
  }

  Listpagos():any{
    const url_api = "";
    return this.http.get('http://localhost:3000/api/pagos')
  }
  VerPago(id:string){
    const url_api = "http://localhost:3000/api";
    return this.http.get(url_api+'/pagos/'+id);
  }

  // getPrecios(){
  //   const url_api ='http://localhost/menus?filter[where][oferta]=1';//solo para usuarios logiado
  //   return(this.menus = this.http.get(url_api));
  // }

  // saveMenus(menu){
  //   let token = this.authservice.getToken();
  //   const url_api ='http://localhost/menus?acces_token=${token}'; //debe estar logiado 
  //   return this.http.post(url_api, menu,{headers: this.headers})
  //   .pipe(map(data => data));
  // }

  // updateMenu(menu) {
  //   let token = this.authservice.getToken();
  //   const url_api ='http://localhost/menus?acces_token=${token}'; //debe estar logiado 
  //   return this.http.put(url_api, menu,{headers: this.headers})
  //   .pipe(map(data => data));
  // }

  // deleteMenu(id: string){
  //   let token = this.authservice.getToken();
  //   const url_api ='http://localhost/menus?acces_token=${token}'; //debe estar logiado 
  //   return this.http.delete(url_api, {headers: this.headers})
  //   .pipe(map(data => data));
  // }

   
}
