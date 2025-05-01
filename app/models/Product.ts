export interface Color {
  name: string;
  value: string;
}

export interface Spec {
  label: string;
  value: string;
}

export interface ProductProps {
  id: number;
  name: string;
  description: string;
  category: string;
  brand: string;
  images: string[];
  colors: Color[];
  price: number;
  originalPrice?: number | null;
  specs?: Spec[];
  rating?: number;
  reviewCount?: number;
  stock?: number;
  badges?: string[];
  link: string;
}
