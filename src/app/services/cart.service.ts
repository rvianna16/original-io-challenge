import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: Array<any> = [];
  totalPrice: Subject<number> = new Subject<number>();

  constructor() {}

  addProductCart(product: any) { 
    product.fixedPrice = product.price;   
    this.products.push(product);  
    this.getTotalPrice();  
  }

  getItems() {    
    return this.products;
  }

  removeItem(index: number) {
    this.products.splice(index, 1)
    this.getTotalPrice();  
  }

  updatePrice(product: any) {
    product.price = product.fixedPrice * product.quantity;
    this.getTotalPrice();
  }

  getTotalPrice() {
    let total = 0;

    if (this.products.length >= 1) {
      total = this.products.map((item) => {
          return item.price;
        }).reduce((total, price) => {
          return (total += price);
        });
    }
    
    this.totalPrice.next(total);
  }
}
