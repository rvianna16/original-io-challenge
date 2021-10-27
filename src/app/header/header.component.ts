import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  openMenu: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  menuMobile(event: any) {
    this.openMenu = !this.openMenu;

    event.target.setAttribute('aria-expanded', this.openMenu)

    if(this.openMenu) {
      event.target.setAttribute('aria-label', 'Fechar menu');
    }else {
      event.target.setAttribute('aria-label', 'Abrir menu')
    }
  }
}
