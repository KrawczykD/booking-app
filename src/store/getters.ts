import IProduct from './IProduct';

export const getCartValue = function (cart: Array<IProduct>): number {
  let cartValue = 0;

  console.log(cart);

  cart.forEach((item) => {
    cartValue += item.price * item.orderedQty;
  });

  console.log(cartValue);

  return cartValue;
};
