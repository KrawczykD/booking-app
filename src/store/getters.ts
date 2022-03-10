import IProduct from './IProduct';

export const getCartValue = function (cart: Array<IProduct>): number {
  let cartValue = 0;

  cart.forEach((item) => {
    cartValue += item.price * item.orderedQty;
  });
  return cartValue;
};
