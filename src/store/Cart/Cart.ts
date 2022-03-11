import { addToCart, removeFromCart } from './CartActions';
import { getCartValue, getCartItemById } from './CartGetters';
import { ICartItem } from './ICartItem';
import IProduct from '../IProduct';

export class Cart {
  #cart: Array<ICartItem>;
  constructor(cart: Array<ICartItem>) {
    this.#cart = cart;
  }

  addToCart = (product: IProduct): void => {
    addToCart(product, this.#cart);
  };

  removeFromCart = (product: ICartItem): void => {
    removeFromCart(product, this.#cart);
  };

  getCartValue = (): number => {
    return getCartValue(this.#cart);
  };

  getCartItemById = (id: number): ICartItem | undefined => {
    return getCartItemById(this.#cart, id);
  };

  getCart = () => {
    return this.#cart;
  };
}
