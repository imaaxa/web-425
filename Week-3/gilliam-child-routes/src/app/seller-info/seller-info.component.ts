import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-seller-info',
  template: `
    <p>The seller is: Ahsoka Tano, and the seller Id: {{sellerID}}.</p>
  `,
  styles: [`
    :host {
      background-color: yellow;
      padding: .5em;
      display: block;
      height: 2.5rem;
      text-align: center;
      border-radius: .5em;
      margin: .5em;
    }
  `]
})
export class SellerInfoComponent implements OnInit {
  sellerID: string;

  constructor(route: ActivatedRoute) {
    this.sellerID = route.snapshot.paramMap.get('id');
  }

  ngOnInit() {
  }

}
