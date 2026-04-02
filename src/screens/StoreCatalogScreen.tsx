import { useState } from 'react';
import { ArrowLeft, Store, ShoppingBag, Eye, Sparkles } from 'lucide-react';
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
    <div className="min-h-screen bg-background pb-6 transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-4 sticky top-0 z-20 shadow-lg backdrop-blur-md bg-emerald-600/90 transition-colors duration-300">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all active:scale-95 shadow-inner"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h1 className="text-xl font-black tracking-tight">Shop Products</h1>
            <p className="text-emerald-100 text-[10px] font-bold uppercase tracking-widest opacity-90">Buy Packaged • Take Home</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-6 py-5 bg-emerald-50 dark:bg-emerald-950/30 border-b border-emerald-100 dark:border-emerald-900/50 transition-colors duration-300">
        <div className="flex items-start gap-4">
          <div className="bg-white dark:bg-emerald-900/50 p-2.5 rounded-2xl shadow-sm border border-emerald-100 dark:border-emerald-800">
            <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p className="text-sm font-bold text-emerald-900 dark:text-emerald-400 tracking-tight">Available in store</p>
              <Sparkles className="w-3 h-3 text-yellow-500 animate-pulse" />
            </div>
            <p className="text-xs text-emerald-700 dark:text-emerald-500 mt-1 leading-relaxed font-medium">
              Browse our premium products and pick them up at HalalHouse Tánger today.
            </p>
          </div>
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
      <div className="px-6 py-6 grid grid-cols-2 gap-5">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-card rounded-3xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md hover:border-emerald-500/30 transition-all duration-500 group active:scale-[0.98] text-left relative flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500"></div>
              <div className="absolute top-3 right-3 z-10 transition-transform duration-300 group-hover:scale-105">
                <Badge className="bg-emerald-500/90 backdrop-blur-md text-white text-[9px] font-black px-2 py-0.5 rounded-full uppercase tracking-widest shadow-lg border border-white/20">
                  ✓ Halal
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                 <div className="bg-white/90 dark:bg-neutral-900/90 p-3 rounded-full shadow-2xl scale-75 group-hover:scale-100 transition-transform duration-300">
                   <Eye className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
                 </div>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-bold text-foreground text-xs mb-2 line-clamp-2 leading-snug tracking-tight h-8">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-auto pt-2 border-t border-border/30">
                <p className="text-emerald-600 dark:text-emerald-400 font-extrabold text-base tracking-tighter">€{product.price.toFixed(2)}</p>
                <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2 rounded-xl group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                  <ShoppingBag className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
