import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  template: `
    <div class="container">
      <div class="row">
        <h2 class="text-success">What about this page do you want to know?</h2>
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
export class AboutComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
