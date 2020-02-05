import { Component, OnInit, Input } from '@angular/core';
import { componentFactoryName } from '@angular/compiler';

@Component({
  selector: 'app-order',
  template: `
    <span *ngIf="!!stockSymbol">Buying {{ quantity }} shares of {{ stockSymbol }}</span>
  `,
  styles: [`
    :host { background-color: componentFactoryName; }
  `]
})
export class OrderComponent implements OnInit {
  @Input() quantity: number;
  @Input() stockSymbol: string;

  constructor() { }

  ngOnInit() {
  }

}
