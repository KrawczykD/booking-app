import ICategory from './ICategory';
import IProduct from './IProduct';
// actions helpers
const increaseOrderedQty = function (product: IProduct): void {
  product.orderedQty += 1;
};

const decreaseOrderedQty = function (product: IProduct): void {
  product.orderedQty -= 1;
};

const findProductById = function (array: Array<IProduct>, id: number): IProduct | undefined {
  let product = undefined;
  product = array.find((item) => item.id === id);
  return product;
};

const addProductToArray = function (array: Array<IProduct>, product: IProduct): void {
  //const copyOfProductAddedToCart = Object.assign({}, product);
  //   copyOfProductAddedToCart.orderedQty = 1;
  //array.push(copyOfProductAddedToCart);
  array.push(product);
};

const removeProductFromArray = function (array: Array<IProduct>, id: number): void {
  let indexOfProductToRemove = -1;
  indexOfProductToRemove = array.findIndex((item) => item.id === id);
  if (indexOfProductToRemove !== -1) {
    array.splice(indexOfProductToRemove, 1);
  }
};
// actions helpers end

export const toggleCategory = function (categoryItem: ICategory, categories: Array<ICategory>): void {
  categories.forEach((category: { isActive: boolean }) => {
    category.isActive = false;
  });

  categoryItem.isActive = true;
};

export const addToCart = function (id: number, products: Array<IProduct>, cart: Array<IProduct>): void {
  const productToAdd = findProductById(products, id);
  const productExistingInCart = findProductById(cart, id);
  if (productExistingInCart == undefined && productToAdd != undefined) {
    if (productToAdd.maxQty > productToAdd.orderedQty) {
      productToAdd.orderedQty += 1;
      addProductToArray(cart, productToAdd);
    }
  }

  if (productExistingInCart != undefined && productToAdd != undefined) {
    if (productExistingInCart.maxQty > productExistingInCart.orderedQty) {
      increaseOrderedQty(productExistingInCart);
      //increaseOrderedQty(productToAdd);
    }
  }
};

export const removeFromCart = function (id: number, cart: Array<IProduct>): void {
  const productExistingInCart: IProduct | undefined = findProductById(cart, id);
  if (productExistingInCart) {
    if (productExistingInCart.orderedQty > 1) {
      decreaseOrderedQty(productExistingInCart);
    } else {
      decreaseOrderedQty(productExistingInCart);
      removeProductFromArray(cart, productExistingInCart.id);
    }
  }
};
