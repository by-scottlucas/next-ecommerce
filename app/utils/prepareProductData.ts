import { ProductProps } from "../models/Product";
import { getUniqueColors, getUniqueValues, parsePrice } from "./productsPage.utils";

export function prepareProductData(products: ProductProps[]) {
    const uniqueColors = getUniqueColors(products);
    const brands = getUniqueValues(products, 'brand').filter(Boolean) as string[];
    const categories = getUniqueValues(products, 'category').filter(Boolean) as string[];
    const prices = products
      .map(p => parsePrice(p.price))
      .filter((price): price is number => typeof price === 'number')
      .sort((a, b) => a - b);
  
    return { uniqueColors, brands, categories, prices };
}  