import { Component } from '@angular/core';
import { Item } from './cart/item';
import { Shirt } from './shirt/shirt';
import { isEqual } from 'lodash';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  items = [] as Item<Shirt>[];

  onAddShirtToCartRequested(item: Item<Shirt>): void {
    const existing = this.items.find((i) => isEqual(i.item, item.item));

    if (existing) {
      existing.quantity += item.quantity;
      return;
    }

    this.items.push(item);
  }
}
