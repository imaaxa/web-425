import { Component } from '@angular/core';
import { debounceTime } from "rxjs/operators";
import { FormControl } from "@angular/forms";

@Component({
  selector: 'app-root',
  template: `
    <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
        aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarText">
        <ul class="navbar-nav mr-auto">
          <li class="nav-item">
            <a class="nav-link" href="#" routerLinkActive="active">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" routerLinkActive="active">About</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#" routerLinkActive="active">Contact Us</a>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <div class="row">
        <div class="col">
          <h2>Handling Form Events with Observables</h2>
          <div class="form-group">
            <label for="txtStockPrice">Stock Price: </label>
            <input type="text" class="form-control" id="txtStockPrice" placeholder="Enter stock price..." [formControl]="searchInput">
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <h4 class="txt-bold">Results: {{ convertedStockPrice }}</h4>
        </div>
      </div>
    </div>
  `,
  styles: [`
    .txt-bold {
      font-weight: bold;
    }
    .row:nth-child(2) {
      background-color: lightgreen;
      padding: .75em 0 .5em;
      border: 1px solid darkgreen;
    }
  `]
})
export class AppComponent {
  searchInput = new FormControl('');
  convertedStockPrice: string;

  constructor() {
    this.searchInput.valueChanges.pipe(debounceTime(500))
      .subscribe(stock => this.getStockQuoteFromServer(stock));
  }

  getStockQuoteFromServer(stock: string) {
    this.convertedStockPrice = `The price of ${stock} is ${(100 * Math.random()).toFixed(4)}`;
  }
}
