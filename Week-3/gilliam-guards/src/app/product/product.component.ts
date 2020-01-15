import { Component, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-product',
  template: `
    <div class="container product mx-auto my-4 p-4 rounded-pill">
      <div class="row product__wrapper">
        <h1 class="product__title">Product Detail Component</h1>
      </div>
      <input class="product__input" type="text" placeholder="Enter your name" [formControl]="name">
    </div>
  `,
  styles: [`
    .product {
      background-color: black;
      color: white;
    }
    .product__wrapper {
      justify-content: center;
    }
    .product__input {
      width: 80%;
      margin-left: 50%;
      transform: translateX(-50%);
  `]
})
export class ProductComponent implements OnInit {
  name: FormControl = new FormControl();
  constructor() { }
  ngOnInit() { }
}
