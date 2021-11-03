import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

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
    private productsService: ProductsService
  ) {}

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( params => {
      this.id = params['id'];
      console.log(this.id);
    })

    this.product = this.productsService.getProduct(this.id);    
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();    
  }

  getSize(size: any) {
    this.sizeNumber = size;
  }

  
}
