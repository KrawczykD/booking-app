import { ICartItem } from './ICartItem';

export class CartItem implements ICartItem {
  id: number;
  orderedQty: number;
  price: number;
  constructor(id: number, price: number) {
    this.id = id;
    this.orderedQty = 0;
    this.price = price;
  }
}
