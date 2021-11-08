import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  cartItems!: any[];
  @Input() openCart!: boolean;
  @Output() closeCart = new EventEmitter();
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();
    this.total = this.cartService.getTotalPrice();    
  } 

  toggleCart() {
    this.openCart = false;
    this.closeCart.emit(false);   
  }

  removeCart(index: number) {
    this.cartService.removeItem(index);
  }
  
}
