export interface Shirt {
  text: string;
  color: Color;
  size: Size;
}

export enum Color {
  Red = 'Red',
  Blue = 'Blue',
  Green = 'Green',
  Yellow = 'Yellow',
  Pink = 'Pink',
}

export enum Size {
  xs = 'XS',
  small = 'S',
  medium = 'M',
  large = 'L',
  xl = 'XL',
  xxl = 'XXL',
}
