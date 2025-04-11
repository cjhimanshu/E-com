import { useState } from 'react';
import { Product } from './types';
import ErrorBoundary from './components/ErrorBoundary';
import Navbar from './components/Navbar';
import Categories from './components/Categories';
import ProductGrid from './components/ProductGrid';
import Footer from './components/Footer';
import AdBanner from './components/AdBanner';
import BrandMall from './components/BrandMall';
import ProductPage from './components/ProductPage';
import BrandProductPage from './components/BrandProductPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<string | null>(null);

  const brand: Brand = { id: 1, name: "BrandName", logo: "logo.png", discount: "10%", productCount: 100, featured: true };

  const setBrand = (brand: { id: number; name: string; logo: string; discount: string; productCount: number; featured: boolean; }) => {
    // ...existing code...
  };

  return (
    <ErrorBoundary>
      <div className="min-h-screen bg-gray-100 flex flex-col">
        <AdBanner />
        <Navbar />
        {selectedProduct ? (
          <ProductPage 
            product={selectedProduct}
            onBack={() => setSelectedProduct(null)}
          />
        ) : selectedBrand ? (
          <BrandProductPage
            brand={selectedBrand}
            onBack={() => setSelectedBrand(null)}
          />
        ) : (
          <>
            <Categories 
              selectedCategory={selectedCategory}
              onCategorySelect={setSelectedCategory}
            />
            <BrandMall onBrandSelect={setSelectedBrand} />
            <ProductGrid 
              selectedCategory={selectedCategory}
              onProductSelect={setSelectedProduct}
            />
          </>
        )}
        <Footer />
      </div>
    </ErrorBoundary>
  );
}

export default App;