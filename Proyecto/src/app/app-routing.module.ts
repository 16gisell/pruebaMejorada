import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { MenusComponent } from './componentes/menus/menus.component';
import { LoginComponent } from './componentes/auth/login/login.component';
import { RegisterComponent } from './componentes/auth/register/register.component';
import { ProfileComponent } from './componentes/auth/profile/profile.component';
import { Page404Component } from './componentes/page404/page404.component';
import { ProductoTComponent } from './componentes/producto-t/producto-t.component';
import { SumaDiasComponent } from './componentes/suma-dias/suma-dias.component';
import { RelacionPagosComponent } from './componentes/relacion-pagos/relacion-pagos.component';
import { VerRelacionComponent } from './componentes/ver-relacion/ver-relacion.component';

const routes: Routes = [
  {path: '',component: HomeComponent},  
  {path: 'productoTienda/:id', component:ProductoTComponent},
  {path: 'RelacionPagos', component: RelacionPagosComponent},
  {path: 'VerPago/:id', component: VerRelacionComponent},
  {path: 'sumaDias', component: SumaDiasComponent},
  {path: 'ganancias', component: MenusComponent},
  {path: 'auth/login', component: LoginComponent},
  {path: 'auth/register', component: RegisterComponent},
  {path: 'auth/profile', component: ProfileComponent},//usuario logiado 
  {path:  '**', component:Page404Component},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
