import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-e404',
  template: `
    <div class="container">
      <div class="row">
        <h2>The page you are looking for can not be found.</h2>
      </div>
    </div>
  `,
  styles: [`
    h2 {
      color: red;
    }
  `]
})
export class E404Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
