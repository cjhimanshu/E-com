import { Brand } from '../types';

export const brands: Brand[] = [
  {
    id: 1,
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    discount: 'Up to 20% off',
    productCount: 156,
    featured: true,
  },
  {
    id: 2,
    name: 'Samsung',
    logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    discount: 'Up to 30% off',
    productCount: 243,
    featured: true,
  },
  {
    id: 3,
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    discount: 'Min 40% off',
    productCount: 189,
    featured: true,
  },
  {
    id: 4,
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&q=80',
    discount: 'Up to 50% off',
    productCount: 167,
    featured: false,
  },
  {
    id: 5,
    name: 'Puma',
    logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80',
    discount: '30-60% off',
    productCount: 145,
    featured: false,
  },
];
