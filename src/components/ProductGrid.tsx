import { Heart, Star } from 'lucide-react';
import { Product } from '../types';

const products = [
  // Electronics Category (12 products)
  {
    id: 1,
    name: 'Wireless Earbuds',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1572569511254-d8f925fe2cbb?w=500&q=80',
    rating: 4.5,
    reviews: 2456,
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
    rating: 4.3,
    reviews: 1234,
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Smartphone',
    price: 14999,
    originalPrice: 29999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80',
    rating: 4.6,
    reviews: 3456,
    category: 'Electronics'
  },
  {
    id: 4,
    name: 'Gaming Headphones',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1618066279579-c60b334c1d13?w=500&q=80',
    rating: 4.7,
    reviews: 789,
    category: 'Electronics'
  },
  {
    id: 5,
    name: 'Mechanical Keyboard',
    price: 3499,
    originalPrice: 6999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1601445638532-3c6f6c3aa1d6?w=500&q=80',
    rating: 4.8,
    reviews: 567,
    category: 'Electronics'
  },
  {
    id: 6,
    name: 'Wireless Mouse',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1527814050087-3793815479db?w=500&q=80',
    rating: 4.4,
    reviews: 345,
    category: 'Electronics'
  },
  {
    id: 7,
    name: 'Bluetooth Speaker',
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1589256469067-ea99122bbdc9?w=500&q=80',
    rating: 4.3,
    reviews: 432,
    category: 'Electronics'
  },
  {
    id: 8,
    name: '4K Monitor',
    price: 24999,
    originalPrice: 49999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=500&q=80',
    rating: 4.6,
    reviews: 234,
    category: 'Electronics'
  },
  {
    id: 9,
    name: 'Webcam HD',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1587826080692-f144c823de66?w=500&q=80',
    rating: 4.2,
    reviews: 189,
    category: 'Electronics'
  },
  {
    id: 10,
    name: 'WiFi Router',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1544447556-2888b3fad267?w=500&q=80',
    rating: 4.4,
    reviews: 445,
    category: 'Electronics'
  },
  {
    id: 11,
    name: 'Portable SSD',
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=500&q=80',
    rating: 4.7,
    reviews: 323,
    category: 'Electronics'
  },
  {
    id: 12,
    name: 'Action Camera',
    price: 19999,
    originalPrice: 39999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1526815456940-2c11653292a2?w=500&q=80',
    rating: 4.8,
    reviews: 567,
    category: 'Electronics'
  },

  // Fashion Category (12 products)
  {
    id: 13,
    name: 'Denim Jacket',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1516257984-b1b4d707412e?w=500&q=80',
    rating: 4.5,
    reviews: 1256,
    category: 'Fashion'
  },
  {
    id: 14,
    name: 'Floral Summer Dress',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500&q=80',
    rating: 4.3,
    reviews: 892,
    category: 'Fashion'
  },
  {
    id: 15,
    name: 'Classic White Sneakers',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80',
    rating: 4.4,
    reviews: 567,
    category: 'Fashion'
  },
  {
    id: 16,
    name: 'Men\'s Cotton T-Shirt',
    price: 399,
    originalPrice: 799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500&q=80',
    rating: 4.2,
    reviews: 1023,
    category: 'Fashion'
  },
  {
    id: 17,
    name: 'High-Waist Jeans',
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500&q=80',
    rating: 4.6,
    reviews: 789,
    category: 'Fashion'
  },
  {
    id: 18,
    name: 'Formal Blazer',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?w=500&q=80',
    rating: 4.5,
    reviews: 334,
    category: 'Fashion'
  },
  {
    id: 19,
    name: 'Printed Maxi Skirt',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500&q=80',
    rating: 4.4,
    reviews: 223,
    category: 'Fashion'
  },
  {
    id: 20,
    name: 'Sports Track Pants',
    price: 699,
    originalPrice: 1399,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1515710783565-2b1b4fa8dcb5?w=500&q=80',
    rating: 4.2,
    reviews: 445,
    category: 'Fashion'
  },
  {
    id: 21,
    name: 'Casual Hoodie',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500&q=80',
    rating: 4.7,
    reviews: 678,
    category: 'Fashion'
  },
  {
    id: 22,
    name: 'Summer Hat',
    price: 499,
    originalPrice: 999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1576871337622-98d48d1cf531?w=500&q=80',
    rating: 4.3,
    reviews: 234,
    category: 'Fashion'
  },
  {
    id: 23,
    name: 'Leather Belt',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1553486557-6b5768b5d1bf?w=500&q=80',
    rating: 4.5,
    reviews: 156,
    category: 'Fashion'
  },
  {
    id: 24,
    name: 'Wool Sweater',
    price: 1799,
    originalPrice: 3599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1576871337632-b9aef4c17ab9?w=500&q=80',
    rating: 4.6,
    reviews: 445,
    category: 'Fashion'
  },

  // Home Category (12 products)
  {
    id: 25,
    name: 'Laptop Backpack',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=500&q=80',
    rating: 4.4,
    reviews: 567,
    category: 'Home'
  },
  {
    id: 26,
    name: 'Water Bottle',
    price: 499,
    originalPrice: 999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=500&q=80',
    rating: 4.1,
    reviews: 234,
    category: 'Home'
  },
  {
    id: 27,
    name: 'Leather Crossbody Bag',
    price: 1799,
    originalPrice: 3599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1548036328-c9fa89d128fa?w=500&q=80',
    rating: 4.3,
    reviews: 445,
    category: 'Home'
  },
  {
    id: 28,
    name: 'Throw Pillows Set',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1584100936595-c0556a4c1775?w=500&q=80',
    rating: 4.5,
    reviews: 234,
    category: 'Home'
  },
  {
    id: 29,
    name: 'Wall Clock',
    price: 699,
    originalPrice: 1399,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1525452196936-5f0acd644eda?w=500&q=80',
    rating: 4.6,
    reviews: 178,
    category: 'Home'
  },
  {
    id: 30,
    name: 'Table Lamp',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80',
    rating: 4.4,
    reviews: 345,
    category: 'Home'
  },
  {
    id: 31,
    name: 'Storage Basket',
    price: 399,
    originalPrice: 799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4?w=500&q=80',
    rating: 4.2,
    reviews: 167,
    category: 'Home'
  },
  {
    id: 32,
    name: 'Plant Pot',
    price: 299,
    originalPrice: 599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=500&q=80',
    rating: 4.7,
    reviews: 289,
    category: 'Home'
  },
  {
    id: 33,
    name: 'Bed Sheets Set',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1584100396593-c8773cbf425d?w=500&q=80',
    rating: 4.8,
    reviews: 456,
    category: 'Home'
  },
  {
    id: 34,
    name: 'Kitchen Organizer',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1520981825232-bc67ad96c881?w=500&q=80',
    rating: 4.3,
    reviews: 234,
    category: 'Home'
  },
  {
    id: 35,
    name: 'Photo Frames Set',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1513519245088-0e12902e5a38?w=500&q=80',
    rating: 4.5,
    reviews: 189,
    category: 'Home'
  },
  {
    id: 36,
    name: 'Bathroom Set',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1584100396228-520ce4f7085d?w=500&q=80',
    rating: 4.4,
    reviews: 276,
    category: 'Home'
  },

  // Appliances Category (10 products)
  {
    id: 37,
    name: 'Smart Refrigerator',
    price: 35999,
    originalPrice: 71999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1594749794568-f9959e7adbf3?w=500&q=80',
    rating: 4.6,
    reviews: 876,
    category: 'Appliances'
  },
  {
    id: 38,
    name: 'Washing Machine',
    price: 24999,
    originalPrice: 49999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1626806787461-102c1a6f4b48?w=500&q=80',
    rating: 4.4,
    reviews: 567,
    category: 'Appliances'
  },
  {
    id: 39,
    name: 'Microwave Oven',
    price: 8999,
    originalPrice: 17999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?w=500&q=80',
    rating: 4.3,
    reviews: 445,
    category: 'Appliances'
  },
  {
    id: 40,
    name: 'Air Conditioner',
    price: 32999,
    originalPrice: 65999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1589906493606-a3671df7ea56?w=500&q=80',
    rating: 4.7,
    reviews: 892,
    category: 'Appliances'
  },
  {
    id: 41,
    name: 'Air Purifier',
    price: 12999,
    originalPrice: 25999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1626553683558-dd8ddf39ac2e?w=500&q=80',
    rating: 4.5,
    reviews: 234,
    category: 'Appliances'
  },
  {
    id: 42,
    name: 'Water Heater',
    price: 7999,
    originalPrice: 15999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1585011664466-b41ff4ae45b3?w=500&q=80',
    rating: 4.2,
    reviews: 178,
    category: 'Appliances'
  },
  {
    id: 43,
    name: 'Dishwasher',
    price: 28999,
    originalPrice: 57999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?w=500&q=80',
    rating: 4.6,
    reviews: 445,
    category: 'Appliances'
  },
  {
    id: 44,
    name: 'Coffee Maker',
    price: 5999,
    originalPrice: 11999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1520175480921-4edfa2983e0f?w=500&q=80',
    rating: 4.4,
    reviews: 567,
    category: 'Appliances'
  },
  {
    id: 45,
    name: 'Food Processor',
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1612198791368-8e0c39ef9919?w=500&q=80',
    rating: 4.3,
    reviews: 234,
    category: 'Appliances'
  },
  {
    id: 46,
    name: 'Electric Kettle',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1594213114663-d94db9bc8397?w=500&q=80',
    rating: 4.5,
    reviews: 345,
    category: 'Appliances'
  },

  // Travel Category (10 products)
  {
    id: 47,
    name: 'Travel Suitcase',
    price: 4999,
    originalPrice: 9999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1565026057447-bc90a3dceb87?w=500&q=80',
    rating: 4.6,
    reviews: 678,
    category: 'Travel'
  },
  {
    id: 48,
    name: 'Hiking Backpack',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1510972527921-ce03766a1cf1?w=500&q=80',
    rating: 4.5,
    reviews: 445,
    category: 'Travel'
  },
  {
    id: 49,
    name: 'Travel Pillow',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1520973516498-bd9785e9d265?w=500&q=80',
    rating: 4.2,
    reviews: 234,
    category: 'Travel'
  },
  {
    id: 50,
    name: 'Universal Adapter',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1519003300449-424ad0405076?w=500&q=80',
    rating: 4.4,
    reviews: 189,
    category: 'Travel'
  },
  {
    id: 51,
    name: 'Passport Holder',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1530538095376-a4926ea2a165?w=500&q=80',
    rating: 4.3,
    reviews: 156,
    category: 'Travel'
  },
  {
    id: 52,
    name: 'Travel Organizer',
    price: 699,
    originalPrice: 1399,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1581605405669-fcdf81165afa?w=500&q=80',
    rating: 4.5,
    reviews: 278,
    category: 'Travel'
  },
  {
    id: 53,
    name: 'Camera Bag',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1547949003-9792a18a2601?w=500&q=80',
    rating: 4.6,
    reviews: 345,
    category: 'Travel'
  },
  {
    id: 54,
    name: 'Travel Scale',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1506806732259-39c2d0268443?w=500&q=80',
    rating: 4.1,
    reviews: 123,
    category: 'Travel'
  },
  {
    id: 55,
    name: 'Travel Bottles Set',
    price: 499,
    originalPrice: 999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1596755389378-c31d21fd1273?w=500&q=80',
    rating: 4.4,
    reviews: 234,
    category: 'Travel'
  },
  {
    id: 56,
    name: 'Travel First Aid Kit',
    price: 399,
    originalPrice: 799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&q=80',
    rating: 4.7,
    reviews: 167,
    category: 'Travel'
  },

  // Beauty Category (10 products)
  {
    id: 57,
    name: 'Face Serum',
    price: 999,
    originalPrice: 1999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?w=500&q=80',
    rating: 4.7,
    reviews: 789,
    category: 'Beauty'
  },
  {
    id: 58,
    name: 'Hair Dryer',
    price: 1999,
    originalPrice: 3999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80',
    rating: 4.5,
    reviews: 567,
    category: 'Beauty'
  },
  {
    id: 59,
    name: 'Makeup Kit',
    price: 2499,
    originalPrice: 4999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=500&q=80',
    rating: 4.6,
    reviews: 890,
    category: 'Beauty'
  },
  {
    id: 60,
    name: 'Facial Cleanser',
    price: 599,
    originalPrice: 1199,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80',
    rating: 4.4,
    reviews: 445,
    category: 'Beauty'
  },
  {
    id: 61,
    name: 'Hair Straightener',
    price: 1499,
    originalPrice: 2999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1590166774851-bc49b23a18fe?w=500&q=80',
    rating: 4.3,
    reviews: 234,
    category: 'Beauty'
  },
  {
    id: 62,
    name: 'Perfume Set',
    price: 3999,
    originalPrice: 7999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1541643600914-78b084683601?w=500&q=80',
    rating: 4.8,
    reviews: 678,
    category: 'Beauty'
  },
  {
    id: 63,
    name: 'Face Mask Set',
    price: 799,
    originalPrice: 1599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1596541223130-5d31a73fb6c6?w=500&q=80',
    rating: 4.5,
    reviews: 345,
    category: 'Beauty'
  },
  {
    id: 64,
    name: 'Nail Polish Kit',
    price: 899,
    originalPrice: 1799,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1585657797765-20c8fd2b5273?w=500&q=80',
    rating: 4.2,
    reviews: 234,
    category: 'Beauty'
  },
  {
    id: 65,
    name: 'Beauty Mirror',
    price: 1299,
    originalPrice: 2599,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1596543425292-49ca0277df47?w=500&q=80',
    rating: 4.6,
    reviews: 456,
    category: 'Beauty'
  },
  {
    id: 66,
    name: 'Skincare Set',
    price: 2999,
    originalPrice: 5999,
    discount: 50,
    image: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=500&q=80',
    rating: 4.7,
    reviews: 567,
    category: 'Beauty'
  }
];

interface ProductGridProps {
  selectedCategory: string;
  onProductSelect: (product: Product) => void;
}

const ProductGrid = ({ selectedCategory, onProductSelect }: ProductGridProps) => {
  const filteredProducts = selectedCategory === 'All' 
    ? products 
    : products.filter(product => product.category === selectedCategory);

  // Helper function to render stars
  const renderStars = (rating: number) => {
    return [...Array(5)].map((_, index) => (
      <Star
        key={index}
        className={`w-4 h-4 ${
          index < Math.floor(rating)
            ? 'fill-yellow-400 text-yellow-400'
            : 'fill-gray-200 text-gray-200'
        }`}
      />
    ));
  };

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
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded-lg mb-4"
                loading="lazy"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1610024062303-e355e94c7568?w=500&q=80';
                }}
              />
              <button 
                title="Add to Wishlist"
                className="absolute top-2 right-2 p-1.5 bg-white rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                onClick={(e) => {
                  e.stopPropagation();
                  // Handle wishlist functionality here
                }}
              >
                <Heart className="w-5 h-5 text-gray-600" />
              </button>
            </div>
            <h3 className="font-medium text-gray-800 mb-1">{product.name}</h3>
            <div className="flex items-center mb-2">
              <span className="text-lg font-bold">₹{product.price}</span>
              <span className="text-sm text-gray-500 line-through ml-2">₹{product.originalPrice}</span>
              <span className="text-sm text-green-600 ml-2">{product.discount}% off</span>
            </div>
            <div className="flex items-center">
              <div className="flex items-center gap-0.5 mr-2">
                {renderStars(product.rating)}
              </div>
              <span className="text-sm text-gray-500">({product.reviews})</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductGrid;