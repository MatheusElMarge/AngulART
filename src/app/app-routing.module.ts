import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './sistema/login/login.component';
import { IndexComponent } from './index/index.component';
import { PessoalistComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { PessoadetailsComponent } from './pessoa/pessoadetails/pessoadetails.component';
import { LivrosComponent } from './livros/livros.component';
import { CarroComponent } from './carro/carro.component';
import { CarrolistComponent } from './carro/carrolist/carrolist.component';
import { LivroslistComponent } from './livros/livroslist/livroslist.component';

const routes: Routes = [
  {path: "", redirectTo: "login", pathMatch: 'full'},
  {path: "login", component:LoginComponent},
  {path: "admin",component:IndexComponent, children:[
    {path: "pessoas",component:PessoalistComponent},
    {path: "pessoas/novo", component: PessoadetailsComponent},
    {path: "pessoas/editar/:id", component: PessoadetailsComponent},
  { path: 'livros', component: LivrosComponent },
  { path: 'livroslist', component: LivroslistComponent},
  { path: 'carro', component: CarroComponent },
  { path: 'carrolist', component: CarrolistComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
