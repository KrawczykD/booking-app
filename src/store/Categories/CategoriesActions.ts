import ICategory from './ICategory';

export const toggleCategory = function (categoryItem: ICategory, categories: Array<ICategory>): void {
  categories.forEach((category: { isActive: boolean }) => {
    category.isActive = false;
  });

  categoryItem.isActive = true;
};

export const getActiveCategoryId = function (categories: Array<ICategory>): number {
  let activeCaytegoryId = 0;
  const activeCategory = categories.find((category) => category.isActive);

  activeCategory ? (activeCaytegoryId = activeCategory.id) : 0;

  return activeCaytegoryId;
};
