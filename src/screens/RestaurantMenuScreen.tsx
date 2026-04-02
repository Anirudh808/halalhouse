import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, UtensilsCrossed, Clock } from 'lucide-react';
import { restaurantProducts } from '../data/mockData';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
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
    <div className="min-h-screen bg-background pb-24 transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-4 sticky top-0 z-20 shadow-lg backdrop-blur-md bg-emerald-600/90 transition-colors duration-300">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/home')} 
              className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all active:scale-95 shadow-inner"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <div>
              <h1 className="text-xl font-black tracking-tight">Order Food</h1>
              <div className="flex items-center gap-1.5 opacity-90">
                <Clock className="w-3 h-3 text-emerald-100" />
                <p className="text-emerald-50 text-[10px] font-bold uppercase tracking-widest">Eat Fresh • Pickup</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/cart')}
            className="relative bg-white/20 rounded-full p-2.5 hover:bg-white/30 transition-all active:scale-95 shadow-inner"
          >
            <ShoppingCart className="w-5 h-5" />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-yellow-400 text-emerald-900 text-[10px] font-black rounded-full w-5 h-5 flex items-center justify-center border-2 border-emerald-600 shadow-sm animate-in zoom-in">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-card/80 dark:bg-neutral-900/80 border-b border-border sticky top-16 z-20 backdrop-blur-xl transition-colors duration-300">
        <div className="flex overflow-x-auto px-6 py-4 gap-2.5 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-5 py-2.5 rounded-2xl whitespace-nowrap text-sm font-bold transition-all duration-300 active:scale-95 shadow-sm border ${
                selectedCategory === category
                  ? 'bg-emerald-600 text-white border-emerald-500 shadow-emerald-600/20'
                  : 'bg-background text-muted-foreground border-border hover:bg-accent hover:text-foreground'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 py-6 space-y-5">
        <div className="flex items-center gap-2 mb-2">
          <UtensilsCrossed className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
          <h2 className="text-lg font-black text-foreground tracking-tight">{selectedCategory} Specials</h2>
        </div>
        
        {filteredProducts.map((product) => (
          <div
            key={product.id}
            className="bg-card rounded-3xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 active:scale-[0.99]"
          >
            <div className="flex">
              <div className="relative w-32 h-32 flex-shrink-0 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                <div className="absolute bottom-2 left-2">
                   <div className="bg-emerald-500/90 backdrop-blur-sm text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-sm">
                    ✓ Halal
                   </div>
                </div>
              </div>
              <div className="flex-1 p-4 flex flex-col justify-between">
                <div>
                  <h3 className="font-bold text-foreground text-sm mb-1 line-clamp-1">{product.name}</h3>
                  <p className="text-muted-foreground text-[11px] leading-relaxed line-clamp-2 font-medium italic">
                    {product.ingredients.join(', ')}
                  </p>
                </div>
                <div className="flex items-center justify-between mt-2 pt-2 border-t border-border/30">
                  <span className="text-emerald-600 dark:text-emerald-400 font-bold text-base leading-none">
                    €{product.price.toFixed(2)}
                  </span>
                  <Button
                    size="sm"
                    onClick={() => addToRestaurantCart(product)}
                    className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-[11px] font-black h-8 rounded-xl shadow-sm px-4"
                  >
                    <Plus className="w-3.5 h-3.5 mr-1" />
                    ADD
                  </Button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Floating View Cart Button */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-6 left-6 right-6 z-30 animate-in slide-in-from-bottom-8 duration-500">
          <Button
            onClick={() => navigate('/cart')}
            className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white shadow-xl shadow-emerald-900/20 rounded-2xl font-black text-base transition-all active:scale-95 group"
          >
            <div className="flex items-center justify-center w-full relative">
               <ShoppingCart className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform" />
               <span>VIEW CART</span>
               <span className="ml-2 bg-white/20 px-2 py-0.5 rounded-lg text-xs">
                 {cartItemCount} ITEMS
               </span>
               <div className="absolute right-0 font-light opacity-50">→</div>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
