import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
  <nav class="navbar navbar-expand-sm navbar-dark bg-dark">
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav mr-auto">
        <li class="nav-item active">
          <a class="nav-link" href="#">Home <span class="sr-only">(current)</span></a>
        </li>
      </ul>
    </div>
  </nav>
  <div class="container-fluid two-way-form mt-5">
    <div class="row">
      <h2 class="col-8 mx-auto text-center">Two-Way Binding Example</h2>
      <div class="form-group col-8 mx-auto">
        <div class="input-group md-form form-sm form-2">
          <input class="form-control" type="text" placeholder="Enter your name..." [(ngModel)]="name">
          <div class="input-group-append">
            <button class="btn btn-primary-form-control input-group-text red lighten-3" (click)="name=''">Clear Name</button>
          </div>
        </div>
      </div>
      <div class="form-group col-8 mx-auto">
        <p class="alert-success rounded-lg px-4 py-2">Welcome to two-way Binding, {{name}}!</p>
      </div>
    </div>
  </div>
  `,
  styles: [
    `.one-way-form {
      width: 50%;
    }`
  ]
})
export class AppComponent {
  title = 'Gilliam: Two-Way-Binding';

  // Class property
  name:string = 'Ben Skywalker';
}
