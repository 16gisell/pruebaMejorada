import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
//service
import {DataApiService} from './service/data-api.service';
import { AuthService } from './service/auth.service';

import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { ProfileComponent } from './componentes/auth/profile/profile.component';
import { Page404Component } from './componentes/page404/page404.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { NavbarComponent } from './componentes/navbar/navbar.component';
import { HeroComponent } from './componentes/hero/hero.component';
import { ProductoTComponent } from './componentes/producto-t/producto-t.component';
import { SumaDiasComponent } from './componentes/suma-dias/suma-dias.component';
import { RelacionPagosComponent } from './componentes/relacion-pagos/relacion-pagos.component';
import { VerRelacionComponent } from './componentes/ver-relacion/ver-relacion.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    RegisterComponent,
    ProfileComponent,
    Page404Component,
    MenusComponent,
    NavbarComponent,
    HeroComponent,
    ProductoTComponent,
    SumaDiasComponent,
    RelacionPagosComponent,
    VerRelacionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [
    DataApiService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
