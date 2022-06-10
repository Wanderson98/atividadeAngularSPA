import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavegationComponent } from './components/navegation/navegation.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { ContatoComponent } from './components/contato/contato.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavegationComponent,
    ProdutosComponent,
    RodapeComponent,
    ContatoComponent,
    QuemsomosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
