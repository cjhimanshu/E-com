import React, { useState } from 'react';
import { X } from 'lucide-react';

const ads = [
  {
    id: 1,
    title: 'Grand Summer Sale!',
    description: 'Up to 70% OFF on Summer Fashion',
    bgColor: 'bg-gradient-to-r from-orange-500 to-pink-500',
  },
  {
    id: 2,
    title: 'Electronics Fest',
    description: 'Extra 10% off on HDFC Bank Cards',
    bgColor: 'bg-gradient-to-r from-blue-500 to-purple-500',
  },
  {
    id: 3,
    title: 'Mega Deals of the Day',
    description: '12 Hours Left - Shop Now!',
    bgColor: 'bg-gradient-to-r from-green-500 to-teal-500',
  },
];

const AdBanner = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextAd = () => setCurrentAdIndex((prev) => (prev + 1) % ads.length);

  React.useEffect(() => {
    const timer = setInterval(nextAd, 5000);
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentAd = ads[currentAdIndex];

  return (
    <div className={`relative ${currentAd.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-8 w-full">
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">{currentAd.title}</h3>
                <p className="text-sm opacity-90">{currentAd.description}</p>
              </div>
            </div>
            <div className="hidden md:flex items-center space-x-2">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdIndex(index)}
                  title={`Go to ad ${index + 1}`}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentAdIndex ? 'bg-white w-4' : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 p-1"
            title="Close ad"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;
