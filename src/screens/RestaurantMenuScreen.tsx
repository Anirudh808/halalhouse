import { useState } from 'react';

import { ArrowLeft, ShoppingCart, Plus } from 'lucide-react';
import { restaurantProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';



export function RestaurantMenuScreen() {
  const navigate = (path: string) => console.log('Showcase navigate to', path);
  const { addToRestaurantCart, restaurantCart } = useCart();
  const [selectedCategory, setSelectedCategory] = useState(restaurantProducts[0]?.category || 'All');

  const categories = Array.from(new Set(restaurantProducts.map((p) => p.category)));
  const filteredProducts = restaurantProducts.filter(
    (p) => p.category === selectedCategory
  );

  const cartItemCount = restaurantCart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/home')} className="hover:bg-white/10 rounded-full p-2">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <div>
              <h1 className="text-xl font-bold">Order Food</h1>
              <p className="text-emerald-100 text-xs">Eat it fresh - Pickup only</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/cart')}
            className="relative bg-white/10 rounded-full p-2 hover:bg-white/20 transition"
          >
            <ShoppingCart className="w-6 h-6" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1 -right-1 bg-yellow-400 text-emerald-900 text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                {cartItemCount}
              </span>
            )}
          </button>
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
      <div className="px-6 py-6 space-y-4">
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition"
          >
            <div className="flex">
              <div className="relative w-28 h-28 flex-shrink-0">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-2 left-2 bg-emerald-600 text-white text-xs">
                  ✓ Halal
                </Badge>
              </div>
              <div className="flex-1 p-4">
                <h3 className="font-bold text-gray-900 mb-1">{product.name}</h3>
                <p className="text-gray-600 text-xs mb-2 line-clamp-2">
                  {product.ingredients.join(', ')}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-emerald-600 font-bold text-lg">
                    €{product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => addToRestaurantCart(product)}
                    className="bg-emerald-600 hover:bg-emerald-700"
                  >
                    <Plus className="w-4 h-4 mr-1" />
                    Add
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating Cart Button */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-6 left-6 right-6 z-20">
          <Button
            onClick={() => navigate('/cart')}
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 text-white shadow-lg"
          >
            <ShoppingCart className="w-5 h-5 mr-2" />
            View Cart ({cartItemCount} items)
          </Button>
        </div>
      )}
    </div>
  );
}
