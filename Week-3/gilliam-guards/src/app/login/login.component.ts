import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'home',
  template: `
    <div class="container login mx-auto my-4 p-4 rounded-pill">
      <div class="row login__wrapper">
        <h1 class="login__title">Please login</h1>
      </div>
    </div>
  `,
  styles: [`
    .login {
      width: 75%;
      background-color: cyan;
    }
    .login__wrapper {
      justify-content: center;
    }
  `]
})
export class LoginComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
