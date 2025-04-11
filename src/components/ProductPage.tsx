import { useState } from 'react';
import { Heart, ShoppingCart, Star, Shield, Box, Truck, ArrowLeft, Check } from 'lucide-react';
import { Product } from '../types';

interface ProductPageProps {
  product: Product;
  onBack: () => void;
}

const getProductDescription = (product: Product, category: string) => {
  const descriptions = {
    Electronics: `Experience the latest in technology with this premium ${product.name.toLowerCase()}. Featuring cutting-edge design and superior performance, this device delivers exceptional quality and reliability. Perfect for both personal and professional use, it combines innovative features with user-friendly operation.`,
    Fashion: `Step out in style with this trendy ${product.name.toLowerCase()}. Made with high-quality materials and attention to detail, this piece offers both comfort and fashion-forward design. Perfect for any occasion, it's a must-have addition to your wardrobe.`,
    Home: `Transform your living space with this elegant ${product.name.toLowerCase()}. Crafted with premium materials and contemporary design, it adds both functionality and style to your home. This piece perfectly balances aesthetics with practicality.`,
    Appliances: `Upgrade your home with this efficient ${product.name.toLowerCase()}. Designed for modern living, it combines energy-efficient operation with powerful performance. Built to last, it features innovative technology and user-friendly controls.`,
    Travel: `Make your journeys more comfortable with this essential ${product.name.toLowerCase()}. Designed for the modern traveler, it offers convenience and durability. Perfect for both short trips and long adventures.`,
    Beauty: `Enhance your beauty routine with this premium ${product.name.toLowerCase()}. Formulated with high-quality ingredients and modern technology, it delivers exceptional results. Safe and effective for regular use.`,
  };

  return descriptions[category as keyof typeof descriptions] || 
    `Discover the outstanding quality of our ${product.name.toLowerCase()}. This product combines exceptional craftsmanship with modern design to deliver an outstanding user experience.`;
};

const getProductFeatures = (category: string): string[] => {
  const features = {
    Electronics: [
      'Advanced technology for superior performance',
      'Energy efficient design',
      'Smart connectivity features',
      'Premium build quality',
    ],
    Fashion: [
      'Premium fabric quality',
      'Comfortable fit',
      'Trendy design',
      'Easy maintenance',
    ],
    Home: [
      'Durable construction',
      'Modern design aesthetic',
      'Premium materials',
      'Easy to clean',
    ],
    Appliances: [
      'Energy-efficient operation',
      'Advanced features',
      'Quiet performance',
      'Smart controls',
    ],
    Travel: [
      'Durable construction',
      'Lightweight design',
      'Weather-resistant',
      'Ample storage',
    ],
    Beauty: [
      'Premium ingredients',
      'Dermatologist tested',
      'Long-lasting results',
      'Gentle formula',
    ],
  };
  
  return features[category as keyof typeof features] || [];
};

const ProductPage = ({ product, onBack }: ProductPageProps) => {
  const [activeTab, setActiveTab] = useState<'description' | 'specifications' | 'reviews'>('description');

  return (
    <div className="bg-gray-100 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Back Button */}
        <button 
          onClick={onBack}
          className="flex items-center gap-2 text-[#2874f0] mb-6 hover:underline"
          title="Go back to the product list"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Products
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Left Column - Image Section */}
          <div className="bg-white p-4 rounded-lg sticky top-20">
            <div className="relative group">
              <img
                src={product.image}
                alt={product.name}
                className="w-full aspect-square object-cover rounded-lg"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-md" title="Add to Wishlist">
                <Heart className="w-6 h-6 text-gray-600" />
              </button>
            </div>
            <div className="grid grid-cols-2 gap-4 mt-6">
              <button className="flex items-center justify-center gap-2 bg-[#ff9f00] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#ff9500] transition-colors" title="Add this product to your cart">
                <ShoppingCart className="w-5 h-5" />
                ADD TO CART
              </button>
              <button className="flex items-center justify-center gap-2 bg-[#fb641b] text-white py-4 px-6 rounded-lg font-medium hover:bg-[#fb5c1b] transition-colors" title="Buy this product now">
                BUY NOW
              </button>
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-2xl font-medium text-gray-800 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4">
                <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-0.5 rounded text-sm">
                  {product.rating} <Star className="w-4 h-4 fill-current" />
                </div>
                <span className="text-gray-500 text-sm">{product.reviews.toLocaleString()} Ratings</span>
              </div>
            </div>

            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <span className="text-3xl font-bold">₹{product.price.toLocaleString()}</span>
                <span className="text-lg text-gray-500 line-through">₹{product.originalPrice.toLocaleString()}</span>
                <span className="text-lg text-green-600">{product.discount}% off</span>
              </div>
              <p className="text-sm text-gray-500">inclusive of all taxes</p>
            </div>

            {/* Tabs Navigation */}
            <div className="border-b border-gray-200">
              <nav className="flex space-x-8">
                {['description', 'specifications', 'reviews'].map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab as 'description' | 'specifications' | 'reviews')}
                    className={`py-4 px-1 border-b-2 font-medium text-sm ${
                      activeTab === tab
                        ? 'border-blue-500 text-blue-600'
                        : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                    }`}
                    title={`View ${tab} of the product`}
                  >
                    {tab.charAt(0).toUpperCase() + tab.slice(1)}
                  </button>
                ))}
              </nav>
            </div>

            {/* Tab Content */}
            <div className="pt-4">
              {activeTab === 'description' && (
                <div className="space-y-6">
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Product Description</h3>
                    <p className="text-gray-600 leading-relaxed">
                      {getProductDescription(product, product.category)}
                    </p>
                  </div>

                  <div>
                    <h4 className="text-lg font-medium text-gray-900 mb-4">Key Features</h4>
                    <ul className="space-y-3">
                      {getProductFeatures(product.category).map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="w-5 h-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
                          <span className="text-gray-600">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              )}

              {activeTab === 'specifications' && (
                <div>
                  <h3 className="text-lg font-medium text-gray-900 mb-4">Product Specifications</h3>
                  <div className="bg-gray-50 rounded-lg p-4 space-y-3">
                    <div className="grid grid-cols-2 gap-4">
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600">Brand</span>
                          <p className="font-medium">Premium Brand</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Model</span>
                          <p className="font-medium">FK-{product.id}-2024</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Category</span>
                          <p className="font-medium">{product.category}</p>
                        </div>
                      </div>
                      <div className="space-y-3">
                        <div>
                          <span className="text-gray-600">Warranty</span>
                          <p className="font-medium">1 Year</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Stock Status</span>
                          <p className="font-medium text-green-600">In Stock</p>
                        </div>
                        <div>
                          <span className="text-gray-600">Rating</span>
                          <p className="font-medium">{product.rating} out of 5</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'reviews' && (
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-lg font-medium text-gray-900">Customer Reviews</h3>
                    <span className="text-sm text-gray-500">
                      Based on {product.reviews} reviews
                    </span>
                  </div>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <div className="flex items-center mb-4">
                      <div className="flex items-center gap-1 bg-green-500 text-white px-2 py-0.5 rounded text-sm">
                        {product.rating} <Star className="w-4 h-4 fill-current" />
                      </div>
                      <div className="w-full h-2 bg-gray-200 rounded ml-4">
                        <div 
                          className="product-page-style"
                        />
                      </div>
                    </div>
                    <p className="text-gray-600 text-center">
                      Review details coming soon...
                    </p>
                  </div>
                </div>
              )}
            </div>

            {/* Features Section */}
            <div className="border-t border-gray-200 pt-6">
              <div className="space-y-4">
                <h3 className="font-medium text-lg">Features & Details</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="flex items-start gap-3">
                    <Shield className="w-6 h-6 text-[#2874f0]" />
                    <div>
                      <p className="font-medium">1 Year Warranty</p>
                      <p className="text-sm text-gray-500">Manufacturer Warranty</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Box className="w-6 h-6 text-[#2874f0]" />
                    <div>
                      <p className="font-medium">10 Days Return</p>
                      <p className="text-sm text-gray-500">Return policy</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <Truck className="w-6 h-6 text-[#2874f0]" />
                    <div>
                      <p className="font-medium">Free Delivery</p>
                      <p className="text-sm text-gray-500">Orders above ₹500</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;