import { Smartphone, Shirt, Home, Tv, Plane, Sparkles } from 'lucide-react';

const categories = [
  {
    name: 'All',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-purple-500 to-pink-500',
  },
  {
    name: 'Electronics',
    icon: <Smartphone className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-blue-500 to-cyan-500',
  },
  {
    name: 'Fashion',
    icon: <Shirt className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-pink-500 to-rose-500',
  },
  {
    name: 'Home',
    icon: <Home className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-orange-500 to-amber-500',
  },
  {
    name: 'Appliances',
    icon: <Tv className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-teal-500 to-emerald-500',
  },
  {
    name: 'Travel',
    icon: <Plane className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-indigo-500 to-purple-500',
  },
  {
    name: 'Beauty',
    icon: <Sparkles className="w-6 h-6" />,
    color: 'bg-gradient-to-r from-red-500 to-pink-500',
  },
];

interface CategoriesProps {
  onCategorySelect: (category: string) => void;
  selectedCategory: string;
}

const Categories = ({ onCategorySelect, selectedCategory }: CategoriesProps) => {
  return (
    <div className="bg-white shadow-sm sticky top-16 z-40">
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="grid grid-cols-3 md:grid-cols-7 gap-4">
          {categories.map((category) => (
            <div
              key={category.name}
              className="flex flex-col items-center cursor-pointer group transition-transform duration-200 hover:-translate-y-1"
              onClick={() => onCategorySelect(category.name)}
            >
              <div
                className={`relative w-16 h-16 mb-3 ${
                  selectedCategory === category.name ? 'scale-110 transform transition-transform' : ''
                }`}
              >
                <div
                  className={`absolute inset-0 rounded-full ${category.color} opacity-10 group-hover:opacity-20 transition-opacity`}
                />
                <div
                  className={`absolute inset-0 flex items-center justify-center ${
                    selectedCategory === category.name
                      ? 'text-blue-600'
                      : 'text-gray-700 group-hover:text-blue-600'
                  }`}
                >
                  {category.icon}
                </div>
              </div>
              <span
                className={`text-sm font-medium text-center ${
                  selectedCategory === category.name
                    ? 'text-blue-600'
                    : 'text-gray-700 group-hover:text-blue-600'
                }`}
              >
                {category.name}
              </span>
              <div
                className={`h-0.5 w-6 mt-1.5 transition-all duration-200 ${
                  selectedCategory === category.name ? 'bg-blue-600' : 'bg-transparent'
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Categories;
