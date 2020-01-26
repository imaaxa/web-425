import { Injectable } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable } from "rxjs";
import "rxjs/add/observable/of";

@Injectable()
export class FruitService {

  fruits: Fruit[] = [
    { id: 1, name: 'Apple', pricePerPound: '1.99', quantity: 5 },
    { id: 2, name: 'Banana', pricePerPound: '.39', quantity: 8 },
    { id: 3, name: 'Cherries', pricePerPound: '.75', quantity: 50 },
    { id: 4, name: 'Date', pricePerPound: '.49', quantity: 24 },
    { id: 5, name: 'Elderberry', pricePerPound: '1.25', quantity: 36 }
  ];

  constructor() { }

  getFruits(): Observable<Fruit[]> {
    return Observable.of(this.fruits);
  }
}
