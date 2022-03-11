import { addToCart, removeFromCart } from './CartActions';
import { ICartItem } from './ICartItem';
import IProduct from '../IProduct';

export class Cart {
  cart: Array<ICartItem>;
  constructor() {
    this.cart = [];
  }

  addToCart = (product: IProduct): void => {
    addToCart(product, this.cart);
  };

  removeFromCart = (product: ICartItem): void => {
    removeFromCart(product, this.cart);
  };
}
