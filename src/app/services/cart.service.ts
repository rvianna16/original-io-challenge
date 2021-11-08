import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  products: any[] = [];

  constructor() {}

  addProductCart(product: Object) {
    this.products.push(product);    
  }

  getItems() {    
    return this.products;
  }

  removeItem(index: number) {
    this.products.splice(index, 1)
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

    return total;
  }
}
