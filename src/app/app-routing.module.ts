import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContatoComponent } from './components/contato/contato.component';
import { ProdutosComponent } from './components/produtos/produtos.component';
import { QuemsomosComponent } from './components/quemsomos/quemsomos.component';

const routes: Routes = [
  {path: 'quemSomos', component: QuemsomosComponent},
  {path: 'contato', component: ContatoComponent},
  {path: 'produtos', component: ProdutosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
