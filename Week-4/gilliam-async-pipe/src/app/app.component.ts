import { Component } from '@angular/core';
import { Fruit } from "./fruit";
import { Observable } from 'rxjs';
import { FruitService } from './fruit.service';

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
        <h2>Awesome Fruits</h2>
        <table class="table table-hover table-striped">
          <thead class="tbl-header">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Price Per Pound</th>
              <th>Quantity</th>
            </tr>
          </thead>
          <tbody>
            <tr *ngFor="let fruit of fruits | async>
              <td>{{ fruit.id }}</td>
              <td>{{ fruit.name }}</td>
              <td>{{ fruit.pricePerPound }}</td>
              <td>{{ fruit.quantity }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  fruits: Observable<Fruit[]>;
  title = 'Gilliam Async Pipe';

  constructor(private fruitService: FruitService) {}

  ngOnInit() {
    this.fruits = this.fruitService.getFruits();
  }
}
