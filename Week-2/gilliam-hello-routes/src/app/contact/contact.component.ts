import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact',
  template: `
    <div class="container">
      <div class="row">
        <h2 class="text-danger">We both already know how to contact me.</h2>
      </div>
    </div>
  `,
  styles: [
    `
    .container {
      margin-top: 20px;
    }
    `
  ]
})
export class ContactComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
