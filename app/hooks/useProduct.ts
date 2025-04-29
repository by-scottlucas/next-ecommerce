import { useLanguage } from '@/app/contexts/LanguageContext';
import { ProductProps } from '@/app/models/Product';
import { useParams } from 'next/navigation';
import { useMemo } from 'react';

export function useProduct(): ProductProps | undefined {
  const { translations: data } = useLanguage();
  const { productId } = useParams();

  return useMemo(() => {
    return data.productsPage.products.find(
      (product: ProductProps) => product.id.toString() === productId
    );
  }, [data.productsPage.products, productId]);
}
