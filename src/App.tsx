import { useState } from 'react';
import { Product, Brand } from './types';
import ErrorBoundary from './components/common/ErrorBoundary';
import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import AdBanner from './components/layout/AdBanner';
import Categories from './components/features/category/Categories';
import BrandMall from './components/features/brand/BrandMall';
import BrandProductPage from './components/features/brand/BrandProductPage';
import ProductGrid from './components/features/product/ProductGrid';
import ProductPage from './components/features/product/ProductPage';

function App() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [selectedBrand, setSelectedBrand] = useState<Brand | null>(null);

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
