import ICategory from './ICategory';
import { toggleCategory } from './CategoriesActions';

export class Categories {
  categories: Array<ICategory> = [];
  constructor(categories: Array<ICategory>) {
    this.categories = categories;
  }

  toggleCategory = (categoryItem: ICategory): void => {
    toggleCategory(categoryItem, this.categories);
  };
}
