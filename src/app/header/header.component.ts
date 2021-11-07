import { Component, ElementRef, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit { 
  tsCart: boolean = true;
  openMenu: boolean = false;
  currentRoute!: string;

  constructor(private router: Router) {
    this.router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });
  }

  ngOnInit(): void {
    
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
