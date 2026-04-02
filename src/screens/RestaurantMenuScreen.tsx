import { useState } from 'react';
import { ArrowLeft, ShoppingCart, Plus, UtensilsCrossed, Clock, ChevronRight } from 'lucide-react';
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
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-6 sticky top-0 z-30 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-colors duration-500">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/home')} 
              className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
            >
              <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
            </button>
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">Fresh Hub</h1>
              <div className="flex items-center gap-2 opacity-60">
                <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-heading-gold" />
                <p className="text-[10px] font-black uppercase tracking-[0.2em]">Tánger Selection</p>
              </div>
            </div>
          </div>
          <button
            onClick={() => navigate('/cart')}
            className="relative bg-accent/50 dark:bg-neutral-900 rounded-2xl p-3 hover:bg-accent dark:hover:bg-neutral-800 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ShoppingCart className="w-6 h-6 text-foreground dark:text-heading-gold" />
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-emerald-600 dark:bg-heading-gold text-white dark:text-black text-[10px] font-black rounded-full w-6 h-6 flex items-center justify-center border-2 border-white dark:border-black shadow-lg animate-in zoom-in ring-2 ring-transparent group-hover:ring-emerald-500/20">
                {cartItemCount}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Category Tabs */}
      <div className="bg-white/50 dark:bg-black/50 border-b border-border/30 dark:border-neutral-900 sticky top-[88px] z-20 backdrop-blur-xl transition-all duration-300">
        <div className="flex overflow-x-auto px-6 py-5 gap-3 no-scrollbar">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-3 rounded-2xl whitespace-nowrap text-[11px] font-black uppercase tracking-widest transition-all duration-300 active:scale-95 shadow-md border-2 ${
                selectedCategory === category
                  ? 'bg-emerald-600 dark:bg-heading-gold text-white dark:text-black border-emerald-500 dark:border-yellow-600 shadow-xl'
                  : 'bg-card dark:bg-neutral-950 text-muted-foreground border-border/50 dark:border-neutral-900 hover:border-emerald-500/30'
              }`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>

      {/* Products Grid */}
      <div className="px-6 py-8 space-y-6">
        <div className="flex items-center gap-3 mb-2 opacity-70">
          <div className="p-2 bg-accent/50 dark:bg-neutral-900 rounded-xl">
            <UtensilsCrossed className="w-5 h-5 text-emerald-600 dark:text-heading-gold" />
          </div>
          <h2 className="text-sm font-black text-foreground dark:text-white uppercase tracking-[0.3em]">{selectedCategory} Menu</h2>
        </div>
        
        <div className="grid grid-cols-1 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-card dark:bg-neutral-950 rounded-[45px] shadow-sm border border-border/50 dark:border-neutral-900 overflow-hidden hover:shadow-2xl hover:border-emerald-500/20 dark:hover:border-heading-gold/20 transition-all duration-500 active:scale-[0.99] group flex flex-col"
            >
              <div className="relative w-full h-56 overflow-hidden">
                <ImageWithFallback
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-6 left-8 right-8 flex items-center justify-between">
                   <div className="bg-emerald-600/90 dark:bg-heading-gold/90 backdrop-blur-sm text-white dark:text-black text-[9px] font-black px-4 py-1.5 rounded-full uppercase tracking-[0.2em] shadow-xl border border-white/10 dark:border-black/10">
                    Halal Hub Certified
                   </div>
                   <div className="flex items-baseline gap-1 bg-black/40 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/10">
                      <span className="text-xs font-black text-emerald-400 dark:text-heading-gold">€</span>
                      <span className="text-lg font-black text-white tracking-tighter">
                        {product.price.toFixed(2)}
                      </span>
                   </div>
                </div>
              </div>
              
              <div className="px-8 py-8 flex flex-col gap-6">
                <div>
                  <h3 className="font-black text-xl text-foreground dark:text-heading-gold tracking-tighter uppercase italic transition-colors duration-300 mb-2 truncate">{product.name}</h3>
                  <p className="text-muted-foreground dark:text-muted-foreground text-xs leading-relaxed line-clamp-2 font-medium opacity-70">
                    {product.ingredients.join(' • ')}
                  </p>
                </div>

                <Button
                  onClick={() => addToRestaurantCart(product)}
                  className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 dark:bg-heading-gold dark:hover:bg-heading-gold/80 text-white dark:text-black text-xs font-black rounded-[28px] shadow-2xl active:scale-95 transition-all px-6 uppercase tracking-[0.3em] border-2 border-white/10 dark:border-black/10 italic shadow-emerald-500/10 dark:shadow-heading-gold/10"
                >
                  <Plus className="w-5 h-5 mr-3" />
                  Add to Cart
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Floating View Cart Button */}
      {cartItemCount > 0 && (
        <div className="fixed bottom-8 left-8 right-8 z-40 animate-in slide-in-from-bottom-12 duration-700 ease-out">
          <Button
            onClick={() => navigate('/cart')}
            className="w-full h-16 bg-emerald-600 dark:bg-heading-gold hover:bg-emerald-700 dark:hover:shadow-heading-gold/20 text-white dark:text-black shadow-[0_20px_50px_rgba(16,185,129,0.3)] dark:shadow-[0_20px_50px_rgba(191,153,6,0.2)] rounded-[24px] font-black text-sm uppercase tracking-[0.3em] transition-all active:scale-95 group border-2 border-white/10 dark:border-black/5"
          >
            <div className="flex items-center justify-between w-full px-4">
               <div className="flex items-center">
                  <ShoppingCart className="w-5 h-5 mr-3 group-hover:rotate-12 transition-transform" />
                  <span className="hidden xs:inline">Proceed to Checkout</span>
               </div>
               <div className="flex items-center gap-3">
                  <span className="bg-white/20 dark:bg-black/10 px-3 py-1 rounded-xl text-[10px] font-black">
                    {cartItemCount} ITEMS
                  </span>
                  <ChevronRight className="w-5 h-5 opacity-40 group-hover:translate-x-1 transition-transform" />
               </div>
            </div>
          </Button>
        </div>
      )}
    </div>
  );
}
