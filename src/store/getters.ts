import IProduct from './IProduct';

export const getProductById = function (array: Array<IProduct>, id: number): IProduct | undefined {
  let product = null;
  console.log(array, id);
  product = array.find((item) => item.id === id);
  return product;
};
