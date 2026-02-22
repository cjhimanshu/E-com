import { Heart, Star } from 'lucide-react';
import { Product } from '../../../types';
import { products } from '../../../data/products';
import LazyImage from '../../common/LazyImage';

interface ProductGridProps {
  selectedCategory: string;
  onProductSelect: (product: Product) => void;
}

const ProductGrid = ({ selectedCategory, onProductSelect }: ProductGridProps) => {
  const filteredProducts =
    selectedCategory === 'All'
      ? products
      : products.filter((p) => p.category === selectedCategory);

  const renderStars = (rating: number) =>
    [...Array(5)].map((_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${
          i < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h2 className="text-2xl font-bold mb-6">
        {selectedCategory === 'All' ? 'Top Deals' : `${selectedCategory} Products`}
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white p-4 rounded-lg shadow-sm hover:shadow-md transition-shadow cursor-pointer"
            onClick={() => onProductSelect(product)}
          >
            <div className="relative group">
              <LazyImage
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg"
                wrapperClassName="h-48 rounded-lg mb-4"
              />
              <button
                title="Add to Wishlist"
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                }}
              >
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold">₹{product.price.toLocaleString()}</span>
              <span className="text-sm text-gray-500 line-through ml-2">
                ₹{product.originalPrice.toLocaleString()}
              </span>
              <span className="text-sm text-green-600 ml-2">{product.discount}% off</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-0.5 mr-2">{renderStars(product.rating)}</div>
              <span className="text-sm text-gray-500">({product.reviews.toLocaleString()})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;
