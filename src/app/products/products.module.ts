import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsRoutingModule } from './products-routing.module';
import { ShoesComponent } from './shoes/shoes.component';
import { ProductComponent } from './product/product.component';
import { ProductsService } from '../services/products.service';
import { ProductsComponent } from './products.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ShoesComponent,
    ProductsComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    FormsModule
  ],  
  exports: [ProductsComponent],
  providers: [ProductsService]
})
export class ProductsModule { }
