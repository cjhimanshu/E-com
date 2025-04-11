import { ArrowLeft, Star, Box, Tag, Shield } from 'lucide-react';
import { Brand } from '../types';

interface BrandProductPageProps {
  brand: Brand;
  onBack: () => void;
}

const BrandProductPage = ({ brand, onBack }: BrandProductPageProps) => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#2874f0] mb-6 hover:underline"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Brands
        </button>

        {/* Brand Header */}
        <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
          <div className="flex items-center gap-6">
            <div className="w-32 h-32 rounded-lg overflow-hidden">
              <img 
                src={brand.logo} 
                alt={brand.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h1 className="text-2xl font-bold mb-2">{brand.name}</h1>
              <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                <span className="flex items-center gap-1">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span>Top Brand</span>
                </span>
                <span className="flex items-center gap-1">
                  <Box className="w-4 h-4" />
                  <span>{brand.productCount} Products</span>
                </span>
              </div>
              <div className="inline-block bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {brand.discount}
              </div>
            </div>
          </div>
        </div>

        {/* Brand Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
            <Shield className="w-8 h-8 text-[#2874f0]" />
            <div>
              <h3 className="font-medium">100% Genuine</h3>
              <p className="text-sm text-gray-600">Guaranteed Products</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
            <Tag className="w-8 h-8 text-[#2874f0]" />
            <div>
              <h3 className="font-medium">Special Offers</h3>
              <p className="text-sm text-gray-600">Premium Discounts</p>
            </div>
          </div>
          <div className="bg-white p-4 rounded-lg shadow-sm flex items-center gap-4">
            <Box className="w-8 h-8 text-[#2874f0]" />
            <div>
              <h3 className="font-medium">Free Delivery</h3>
              <p className="text-sm text-gray-600">On orders above ₹500</p>
            </div>
          </div>
        </div>

        {/* Product Categories */}
        <div className="bg-white rounded-lg shadow-sm p-6">
          <h2 className="text-xl font-bold mb-6">Popular Categories</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Mobiles', 'Laptops', 'Accessories', 'Wearables'].map((category) => (
              <div key={category} className="bg-gray-50 p-4 rounded-lg cursor-pointer hover:shadow-md transition-shadow">
                <h3 className="font-medium mb-1">{category}</h3>
                <p className="text-sm text-gray-600">Starting from ₹499</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandProductPage;
