import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';
import { CartService } from 'src/app/services/cart.service';

import { ProductsService } from 'src/app/services/products.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  subscription!: Subscription;
  id!: number;
  product: any = {};
  colorName!: any;
  sizeNumber!: any;

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
    private cartService: CartService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( params => {
      this.id = params['id'];    
    })

    this.product = this.productsService.getProduct(this.id);    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();    
  }  

  addCart() {
    if(this.colorName === undefined) {
      alert('Você deve selecionar uma cor')
    }else if(this.sizeNumber === undefined) {
      alert('Você deve selecionar um tamanho')
    }else {
      this.cartService.addProductCart({
        name: this.product.name,
        price: this.product.price,
        color: this.colorName,
        size: this.sizeNumber,
        image: this.product.images[0]
      })
      alert('Produto adicionado!')
      this.colorName = undefined;
      this.sizeNumber = undefined;
    }
  }
}
