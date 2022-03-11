import { ICartItem } from './ICartItem';

export class CartItem implements ICartItem {
  id: number;
  orderedQty: number;
  constructor(id: number) {
    this.id = id;
    this.orderedQty = 0;
  }
}
