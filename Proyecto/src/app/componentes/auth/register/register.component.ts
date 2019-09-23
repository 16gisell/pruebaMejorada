import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { userInterface } from '../../../models/userInterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor( private authService : AuthService, private router:Router) { }

  private user: userInterface={
    id:0,
    nombre:'',
    apellido:'',
    password: '',  
    fecha: new Date(),  
  }

  message:any;
  ngOnInit() {
  }

  //metodo para registrar un usuario
  onRegister(){
    delete this.user.fecha;
    delete this.user.id;

    this.authService.CreateUser(this.user)
    .subscribe(
      rest =>{
        //console.log(rest.message)
        alert(rest.message);
        this.router.navigate(['/auth/profile']);
      },
      error => console.log(error, "hola desde error")
    )
    // this.authService
    // .CreateUser(this
    //   this.user.nombre,
    //   this.user.apellido,
    //   this.user.password,
    // )
    // .subscribe(user =>
    //   console.log(user)//debe de traerme todos los elementos de usuario
    //   // this.authService.setUser(user);
    //   // let Lotoke = user.id;
    //   // this.authService.setToken(Lotoke);
    //   // this.router.navigate(['/auth/profile']);
    // );
  }

}
