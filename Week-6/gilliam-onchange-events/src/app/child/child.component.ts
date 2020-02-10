import { Component, OnChanges, Input } from '@angular/core';
import { SimpleChanges } from "@angular/core";
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-child',
  template: `
    <div class="card child">
      <h2>Child</h2>
      <div><span class="label">Greeting: </span>{{ greeting }}</div>
      <div><span class="label">User name: </span>{{ user.name }}</div>
    </div>
  `,
  styles: [`
    .child {
      background: lightgray;
    }

    .card {
      background-color: #bbbbbb;
      border-radius: .5em;
      border: 1px solid;
      margin-bottom: 1em;
      padding: 0em 2em 2em 2em;
      overflow: hidden;
    }

    .card div {
      margin-bottom: 1em;
      display: grid;
      grid-template-columns: 5em auto;
    }
  `]
})
export class ChildComponent implements OnChanges {

  @Input() greeting: string;
  @Input() user: { name: string };

  constructor() { }

  ngOnChanges( changes: SimpleChanges ): void {
    console.log(JSON.stringify(changes, null, 2));
  }
}
