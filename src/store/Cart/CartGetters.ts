import { ICartItem } from './ICartItem';

export const getCartValue = function (cart: Array<ICartItem>): number {
  let cartValue = 0;

  cart.forEach((item) => {
    cartValue += item.price * item.orderedQty;
  });
  return cartValue;
};

export const getCartItemById = function (array: Array<ICartItem>, id: number): ICartItem | undefined {
  let cartItem = null;
  cartItem = array.find((item) => item.id === id);
  return cartItem;
};
