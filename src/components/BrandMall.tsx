import { Badge, Star } from 'lucide-react';

const brands = [
  {
    id: 1,
    name: 'Apple',
    logo: 'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?w=500&q=80',
    discount: 'Up to 20% off',
    productCount: 156,
    featured: true
  },
  {
    id: 2,
    name: 'Samsung',
    logo: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
    discount: 'Up to 30% off',
    productCount: 243,
    featured: true
  },
  {
    id: 3,
    name: 'Nike',
    logo: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    discount: 'Min 40% off',
    productCount: 189,
    featured: true
  },
  {
    id: 4,
    name: 'Adidas',
    logo: 'https://images.unsplash.com/photo-1518002171953-a080ee817e1f?w=500&q=80',
    discount: 'Up to 50% off',
    productCount: 167,
    featured: false
  },
  {
    id: 5,
    name: 'Puma',
    logo: 'https://images.unsplash.com/photo-1608231387042-66d1773070a5?w=500&q=80',
    discount: '30-60% off',
    productCount: 145,
    featured: false
  }
];

interface BrandMallProps {
  onBrandSelect: (brand: typeof brands[0]) => void;
}

const BrandMall = ({ onBrandSelect }: BrandMallProps) => {
  return (
    <div className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-2">
            <h2 className="text-2xl font-bold">Brand Mall</h2>
            <Badge className="text-blue-600" />
          </div>
          <button className="text-[#2874f0] font-medium hover:underline">
            View All
          </button>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
          {brands.map((brand) => (
            <div
              key={brand.id}
              className="bg-white border rounded-lg p-4 hover:shadow-lg transition-shadow group cursor-pointer"
              onClick={() => onBrandSelect(brand)}
            >
              <div className="relative aspect-square mb-4 overflow-hidden rounded-lg">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                {brand.featured && (
                  <div className="absolute top-2 left-2 bg-yellow-400 text-xs px-2 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3" fill="currentColor" />
                    <span>Featured</span>
                  </div>
                )}
              </div>
              <h3 className="font-medium text-lg mb-1">{brand.name}</h3>
              <p className="text-green-600 font-medium mb-1">{brand.discount}</p>
              <p className="text-sm text-gray-500">{brand.productCount} Products</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default BrandMall;