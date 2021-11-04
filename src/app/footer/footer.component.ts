import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  toggleAccordion(event: any) {
    event.target.classList.toggle('active')
    event.target.nextElementSibling.classList.toggle('active');
  }
}
