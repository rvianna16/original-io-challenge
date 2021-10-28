import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ProductComponent } from './product/product.component';
import { ShoesComponent } from './shoes/shoes.component';

const routes: Routes = [
  { path: 'sapatos', children: [
    {path: '', component: ShoesComponent},
    {path: ':id/:produto', component: ProductComponent}
  ]},  
  { path: 'bolsas', component: ShoesComponent},
  { path: 'acessorios', component: ShoesComponent},
  { path: 'off', component: ShoesComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
