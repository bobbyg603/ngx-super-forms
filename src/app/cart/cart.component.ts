import { Component, Input } from '@angular/core';
import { Shirt } from '../shirt/shirt';
import { Item } from './item';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  @Input() items = [] as Item<Shirt>[];
}
