import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Item } from '../cart/item';
import { ControlsOf } from './controls-of';
import { Shirt, Color, Size } from './shirt';

@Component({
  selector: 'app-shirt',
  templateUrl: './shirt.component.html',
  styleUrls: ['./shirt.component.css'],
})
export class ShirtComponent {
  @Input() shirt!: Shirt;
  @Output() addShirtToCartRequested = new EventEmitter<Item<Shirt>>();

  readonly Colors = Object.values(Color);
  readonly Sizes = Object.values(Size);

  formGroup = new FormGroup<ControlsOf<Item<Shirt>>>({
    quantity: new FormControl(1),
    item: new FormGroup({
      color: new FormControl(Color.Green as Color),
      size: new FormControl(Size.medium as Size),
      text: new FormControl('hello world 🌎'),
    }),
  });

  onSubmit(): void {
    this.addShirtToCartRequested.next(this.formGroup.getRawValue());
  }
}
