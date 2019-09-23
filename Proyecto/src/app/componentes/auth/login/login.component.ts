import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../service/auth.service';
import { userInterface } from '../../../models/userInterface';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  private user: userInterface={
    nombre: "",
    password: "",
  }

  ngOnInit() {
  }

  onLogin(){
    return this.authService
    .loginUser(
      this.user.nombre, 
      this.user.password
      )
      .subscribe(data =>{
        console.log(data);//muestra los datos del usuario
        // this.authService.setUser(data.user)
        // let Lotoken = data.id;
        // this.authService.setToken(Lotoken);
        this.router.navigate[('/auth/home')];
      },
      error => console.log(error)
      )
  }

}
