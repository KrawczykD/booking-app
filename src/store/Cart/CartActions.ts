import { CartItem } from './CartItem';
import { ICartItem } from './ICartItem';
import IProduct from '../IProduct';
import { getCartItemById } from './CartGetters';

export const addToCart = function (item: IProduct, cart: Array<ICartItem>): void {
  const foundedItem = getCartItemById(cart, item.id) as ICartItem | null;

  if (foundedItem) {
    if (foundedItem.orderedQty < item.maxQty) {
      increaseOrderedQty(foundedItem);
    }
  } else {
    const newItem = new CartItem(item.id, item.price);
    increaseOrderedQty(newItem);
    addProductToArray(cart, newItem);
  }
};

export const removeFromCart = function (item: ICartItem, cart: Array<ICartItem>): void {
  const productInCart = getCartItemById(cart, item.id) as ICartItem | null;
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

const addProductToArray = function (array: Array<IProduct | ICartItem>, product: IProduct | ICartItem): void {
  array.push(product);
};

const removeProductFromArray = function (array: Array<IProduct | ICartItem>, id: number): void {
  let indexOfProductToRemove = -1;
  indexOfProductToRemove = array.findIndex((item) => item.id === id);
  if (indexOfProductToRemove !== -1) {
    array.splice(indexOfProductToRemove, 1);
  }
};
