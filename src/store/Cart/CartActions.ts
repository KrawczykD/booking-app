import { CartItem } from './CartItem';
import { ICartItem } from './ICartItem';
import IProduct from '../IProduct';

export const addToCart = function (item: IProduct, cart: Array<ICartItem>): void {
  const foundedItem = findCartItemById(cart, item.id) as ICartItem | null;

  if (foundedItem) {
    if (foundedItem.orderedQty < item.maxQty) {
      increaseOrderedQty(foundedItem);
    }
  } else {
    const newItem = new CartItem(item.id);
    addProductToArray(cart, newItem);
  }
};

export const removeFromCart = function (item: ICartItem, cart: Array<ICartItem>): void {
  const productInCart = findCartItemById(cart, item.id) as ICartItem | null;
  if (productInCart) {
    decreaseOrderedQty(productInCart);
    if (productInCart.orderedQty < 1) {
      removeProductFromArray(cart, productInCart.id);
    }
  }
};

// actions helpers
const increaseOrderedQty = function (product: IProduct | ICartItem): void {
  product.orderedQty += 1;
};

const decreaseOrderedQty = function (product: IProduct | ICartItem): void {
  product.orderedQty -= 1;
};

const findCartItemById = function (array: Array<ICartItem>, id: number) {
  let cartItem = null;
  cartItem = array.find((item) => item.id === id);
  return cartItem;
};

const addProductToArray = function (array: Array<IProduct | ICartItem>, product: IProduct | ICartItem): void {
  //const copyOfProductAddedToCart = Object.assign({}, product);
  //   copyOfProductAddedToCart.orderedQty = 1;
  //array.push(copyOfProductAddedToCart);
  array.push(product);
};

const removeProductFromArray = function (array: Array<IProduct | ICartItem>, id: number): void {
  let indexOfProductToRemove = -1;
  indexOfProductToRemove = array.findIndex((item) => item.id === id);
  if (indexOfProductToRemove !== -1) {
    array.splice(indexOfProductToRemove, 1);
  }
};
