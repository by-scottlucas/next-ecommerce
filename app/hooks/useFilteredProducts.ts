import { ProductProps } from '@/app/models/Product';
import { parsePrice } from '@/app/utils/productsPage.utils';
import { useMemo } from 'react';

export function useFilteredProducts(products: ProductProps[], filters: {
  category: string | null;
  brand: string | null;
  color: string | null;
  maxPrice: number;
  searchTerm: string;
}) {
  return useMemo(() => {
    return products.filter(product => {
      const matchesSearchTerm = product.name.toLowerCase().includes(filters.searchTerm.toLowerCase());
      const productPrice = parsePrice(product.price);
      const productColorName = product.colors[0]?.name;

      return (
        matchesSearchTerm &&
        (!filters.category || product.category === filters.category) &&
        (!filters.brand || product.brand === filters.brand) &&
        (!filters.color || productColorName === filters.color) &&
        productPrice <= filters.maxPrice
      );
    });
  }, [products, filters]);
}
