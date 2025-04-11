export interface Product {
  id: number;
  name: string;
  price: number;
  originalPrice: number;
  discount: number;
  image: string;
  rating: number;
  reviews: number;
  category: string;
  description?: string;
  features?: string[];
  specifications?: {
    [key: string]: string;
  };
  highlights?: string[];
}

export interface Brand {
  id: number;
  name: string;
  logo: string;
  discount: string;
  productCount: number;
  featured: boolean;
}
