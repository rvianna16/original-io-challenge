import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";
import { ProductsService } from '../services/products.service';
SwiperCore.use([Autoplay, Pagination, Navigation]);

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class SliderComponent implements OnInit {
  subscription!: Subscription;
  id!: number;
  product: any = {};

  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService
    ) { }

  ngOnInit(): void {
    this.subscription = this.route.params.subscribe( params => {
      this.id = params['id']; 

      this.product = this.productsService.getProduct(this.id); 
    })
  }
}
