import ICategory from './ICategory';

export const toggleCategory = function (categoryItem: ICategory, categories: Array<ICategory>): void {
  categories.forEach((category: { isActive: boolean }) => {
    category.isActive = false;
  });

  categoryItem.isActive = true;
};
