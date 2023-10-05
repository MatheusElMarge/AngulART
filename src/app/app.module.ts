import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PessoalistComponent } from './pessoa/pessoa-list/pessoa-list.component';
import { LayoutComponent } from './layout/layout.component';
import { HeaderComponent } from './layout/header/header.component';
import { IndexComponent } from './index/index.component';
import { FooterComponent } from './layout/footer/footer.component';
import { LoginComponent } from './sistema/login/login.component';
import { PessoadetailsComponent } from './pessoa/pessoadetails/pessoadetails.component';
import { CarroComponent } from './carro/carro.component';
import { CarrolistComponent } from './carro/carrolist/carrolist.component';
import { LivrosComponent } from './livros/livros.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PessoalistComponent,
    LayoutComponent,
    HeaderComponent,
    IndexComponent,
    FooterComponent,
    PessoadetailsComponent,
    LoginComponent,
    PessoadetailsComponent,
    CarroComponent,
    CarrolistComponent,
    LivrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
