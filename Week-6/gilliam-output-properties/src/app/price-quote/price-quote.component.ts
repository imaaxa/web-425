import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { PriceQuote } from './iprice-quote';
import { interval } from 'rxjs';

@Component({
  selector: 'app-price-quote',
  template: `<strong>
     <span class="card__label" fxFlex="45%">Inside PriceQuoteComponent: </span>
     <span class="card__content" fxFlex="auto">{{ priceQuote?.stockSymbol }}
     {{ priceQuote?.lastPrice | currency: 'USD' }}</span>
   </strong>
  `,
  styles: [`
    :host {
      background-color: pink;
      height: 100%;
      width: 100%;
      line-height: 3em;
      display: inline-block;
      padding: 1em;
    }
  `]
})
export class PriceQuoteComponent implements OnInit {
  @Output() lastPrice = new EventEmitter<PriceQuote>();

  priceQuote: PriceQuote;

  constructor() {
    interval(2000)
      .subscribe(data => {
        this.priceQuote = {
          stockSymbol: 'IBM',
          lastPrice: 100 * Math.random()
        };

        this.lastPrice.emit(this.priceQuote);
      });
  }

  ngOnInit() {
  }

}
