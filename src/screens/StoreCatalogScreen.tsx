import { useState } from 'react';

import { ArrowLeft, Store } from 'lucide-react';
import { storeProducts } from '../data/mockData';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';



export function StoreCatalogScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', ...Array.from(new Set(storeProducts.map((p) => p.category)))];
  const filteredProducts =
    selectedCategory === 'All'
      ? storeProducts
      : storeProducts.filter((p) => p.category === selectedCategory);

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <div>
            <h1 className="text-xl font-bold">Shop Products</h1>
            <p className="text-emerald-100 text-xs">Buy it packaged - Take it home</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-6 py-4 bg-emerald-50 border-b">
        <div className="flex items-start gap-3">
          <Store className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-medium text-emerald-900">Available in store</p>
            <p className="text-xs text-emerald-700 mt-0.5">
              Browse our products and pick them up at HalalHouse Tánger
            </p>
          </div>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white border-b sticky top-16 z-10">
        <div className="flex overflow-x-auto px-6 py-3 gap-2 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full whitespace-nowrap text-sm font-medium transition ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white'
                  : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 py-6 grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition text-left"
          >
            <div className="relative aspect-square">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
              <Badge className="absolute top-2 right-2 bg-emerald-600 text-white text-xs">
                ✓ Halal
              </Badge>
            </div>
            <div className="p-3">
              <h3 className="font-bold text-gray-900 text-sm mb-1 line-clamp-2">
                {product.name}
              </h3>
              <p className="text-emerald-600 font-bold text-lg mb-2">€{product.price.toFixed(2)}</p>
              <Badge variant="outline" className="text-xs border-emerald-200 text-emerald-700">
                In Store
              </Badge>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
