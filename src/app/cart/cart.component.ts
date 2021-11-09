import { Component, EventEmitter, Input, OnInit, Output, } from '@angular/core';
import { Subscription } from 'rxjs';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() openCart!: boolean;
  @Output() closeCart = new EventEmitter();  
  cartItems!: Array<any>;
  total: number = 0;
  subscription!: Subscription;

  constructor(private cartService: CartService) { 
    this.subscription = this.cartService.totalPrice.subscribe(total => {
      this.total = total;      
    })
  }

  ngOnInit(): void {
    this.cartItems = this.cartService.getItems();        
  } 

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  toggleCart() {
    this.openCart = false;
    this.closeCart.emit(false);       
  }

  removeCart(index: number) {
    this.cartService.removeItem(index);
  }

  increments(item: any) {
    item.quantity += 1    
    this.cartService.updatePrice(item);
  }

  decrements(item: any) {
    if(item.quantity === 1) {
      item.quantity = 1;      

    }else {
      item.quantity -= 1
    }    

    this.cartService.updatePrice(item);
  }  
}
