import React, { useState } from 'react';
import { X } from 'lucide-react';

const ads = [
  {
    id: 1,
    title: "Grand Summer Sale!",
    description: "Up to 70% OFF on Summer Fashion",
    bgColor: "bg-gradient-to-r from-orange-500 to-pink-500",
    image: "https://images.unsplash.com/photo-1607083206869-4c7672e72a8a?w=500&q=80"
  },
  {
    id: 2,
    title: "Electronics Fest",
    description: "Extra 10% off on HDFC Bank Cards", // "HDFC" is a proper noun, no change needed
    bgColor: "bg-gradient-to-r from-blue-500 to-purple-500",
    image: "https://images.unsplash.com/photo-1593642702821-c8da6771f0c6?w=500&q=80"
  },
  {
    id: 3,
    title: "Mega Deals of the Day",
    description: "12 Hours Left - Shop Now!",
    bgColor: "bg-gradient-to-r from-green-500 to-teal-500",
    image: "https://images.unsplash.com/photo-1607082350899-7e105aa886ae?w=500&q=80"
  }
];

const AdBanner = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  const nextAd = () => {
    setCurrentAdIndex((prev) => (prev + 1) % ads.length);
  };

  React.useEffect(() => {
    const timer = setInterval(nextAd, 5000); // Change ad every 5 seconds
    return () => clearInterval(timer);
  }, []);

  if (!isVisible) return null;

  const currentAd = ads[currentAdIndex];

  return (
    <div className={`relative ${currentAd.bgColor}`}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between py-2">
          <div className="flex items-center space-x-8 w-full">
            {/* Ad Content */}
            <div className="flex-1 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-lg font-bold">{currentAd.title}</h3>
                <p className="text-sm opacity-90">{currentAd.description}</p>
              </div>
            </div>

            {/* Progress Dots */}
            <div className="hidden md:flex items-center space-x-2">
              {ads.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentAdIndex(index)}
                  title={`Go to ad ${index + 1}`} // Add a title attribute
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${
                    index === currentAdIndex
                      ? 'bg-white w-4'
                      : 'bg-white/50'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Close Button */}
          <button
            onClick={() => setIsVisible(false)}
            className="text-white hover:text-gray-200 p-1"
            title="Close ad" // Add a title attribute
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdBanner;