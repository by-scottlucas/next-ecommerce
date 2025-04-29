import { Color, ProductProps } from "../models/Product";

export const parsePrice = (price: string | number): number => {
  return typeof price === 'string'
    ? parseFloat(price.replace('R$', '').replace(',', '.'))
    : price;
};

export const getUniqueValues = <T, K extends keyof T>(array: T[], key: K): T[K][] => {
  return [...new Set(array.map(item => item[key]))];
};

export const getUniqueColors = (products: ProductProps[]): Color[] => {
  const allColors = products.flatMap(product => product.colors);
  return allColors.filter((color, index, self) => self.findIndex(
    c => c.name === color.name && c.value === color.value
  ) === index
  );
};
