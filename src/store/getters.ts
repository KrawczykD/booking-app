import IProduct from './IProduct';

export const getCartValue = function (cart: Array<IProduct>): number {
  let cartValue = 0;

  cart.forEach((item) => {
    cartValue += item.price * item.orderedQty;
  });
  return cartValue;
};

export const getProductById = function (array: Array<IProduct>, id: number): IProduct | undefined {
  let product = null;
  product = array.find((item) => item.id === id);
  return product;
};
