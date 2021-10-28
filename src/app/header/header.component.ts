import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;
  currentRoute!: string;

  constructor(private _router: Router) {
    this._router.events.subscribe((e) => {
      if (e instanceof NavigationEnd) {
        this.currentRoute = e.url;
      }
    });
  }

  ngOnInit(): void {}

  menuMobile(event: any) {
    this.openMenu = !this.openMenu;

    event.target.setAttribute('aria-expanded', this.openMenu);

    if (this.openMenu) {
      event.target.setAttribute('aria-label', 'Fechar menu');
    } else {
      event.target.setAttribute('aria-label', 'Abrir menu');
    }
  }
}
