import { useState } from 'react';
import { Search, ShoppingCart, User, Menu, X, ChevronDown } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  return (
    <nav className="bg-[#2874f0] text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold italic">Flipkart</h1>
            <span className="text-xs ml-1 italic flex flex-col">
              <span>Explore</span>
              <span className="text-yellow-200 font-semibold">Plus</span>
            </span>
          </div>

          {/* Search Bar */}
          <div className="hidden md:flex flex-1 max-w-2xl mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Search for products, brands and more"
                className="w-full py-2.5 px-4 rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400 transition-shadow"
              />
              <Search className="absolute right-3 top-2.5 text-[#2874f0] cursor-pointer hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-6">
            {/* Login Dropdown */}
            <div className="relative">
              <button 
                className="bg-white text-[#2874f0] px-8 py-1.5 font-medium hover:bg-gray-100 transition-colors flex items-center gap-1"
                onClick={() => setIsLoginOpen(!isLoginOpen)}
              >
                Login
                <ChevronDown className="w-4 h-4" />
              </button>
              
              {/* Login Dropdown Menu */}
              {isLoginOpen && (
                <div className="absolute right-0 mt-2 w-72 bg-white rounded-sm shadow-lg py-3 text-sm text-gray-700">
                  <div className="flex px-4 py-3 border-b">
                    <p className="text-base">New customer?</p>
                    <button className="ml-auto text-[#2874f0] font-medium hover:underline">
                      Sign Up
                    </button>
                  </div>
                  <div className="py-2">
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50">
                      <User className="w-5 h-5 mr-3 text-[#2874f0]" />
                      <span>My Profile</span>
                    </a>
                    <a href="#" className="flex items-center px-4 py-2 hover:bg-gray-50">
                      <ShoppingCart className="w-5 h-5 mr-3 text-[#2874f0]" />
                      <span>Orders</span>
                    </a>
                  </div>
                </div>
              )}
            </div>

            <a href="#" className="hover:text-gray-200 font-medium transition-colors flex items-center gap-1">
              Become a Seller
            </a>
            
            <div className="flex items-center space-x-1 hover:text-gray-200 cursor-pointer group">
              <ShoppingCart className="group-hover:scale-110 transition-transform" />
              <span>Cart</span>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-1 hover:bg-blue-600 rounded-sm transition-colors"
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 animate-fade-in">
            <div className="flex flex-col space-y-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search for products, brands and more"
                  className="w-full py-2 px-4 rounded-sm text-black focus:outline-none focus:ring-2 focus:ring-blue-400"
                />
                <Search className="absolute right-3 top-2 text-[#2874f0]" />
              </div>
              <div className="flex flex-col space-y-3 text-sm">
                <button className="bg-white text-[#2874f0] py-2 font-medium hover:bg-gray-100 transition-colors">
                  Login
                </button>
                <a href="#" className="text-white hover:text-gray-200 py-1">Sign Up</a>
                <a href="#" className="text-white hover:text-gray-200 py-1">Become a Seller</a>
                <div className="flex items-center space-x-2 py-1">
                  <ShoppingCart className="w-5 h-5" />
                  <span>Cart</span>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;