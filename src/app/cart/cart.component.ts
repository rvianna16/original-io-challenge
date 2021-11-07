import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  @Input() openCart!: boolean;
  @Output() closeCart = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  } 

  toggleCart() {
    this.openCart = false;
    this.closeCart.emit(false);
  }
}
