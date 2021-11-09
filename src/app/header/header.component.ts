import { Component, OnInit} from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CartService } from '../services/cart.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit { 
  tsCart: boolean = false;
  openMenu: boolean = false;
  currentRoute!: string;
  cartItems: Array<any> = [];

  constructor(
    private router: Router,
    private cartSerice: CartService
    ) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });
  }

  ngOnInit(): void {      
    this.cartItems = this.cartSerice.getItems();
  }

  menuMobile(event: any) {
    this.openMenu = !this.openMenu;

    event.target.setAttribute('aria-expanded', this.openMenu);

    if (this.openMenu) {
      event.target.setAttribute('aria-label', 'Fechar menu');
    } else {
      event.target.setAttribute('aria-label', 'Abrir menu');
    }
  } 

  openCart() {
    this.tsCart = true;
  }

  onCloseCart(event: any) {
   this.tsCart = event;    
  }
}
