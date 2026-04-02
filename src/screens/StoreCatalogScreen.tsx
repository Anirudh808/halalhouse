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
    <div className="min-h-screen bg-background pb-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-6 sticky top-0 z-30 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Market Hub</h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-80">Premium Packaged Selections</p>
          </div>
        </div>
      </div>

      {/* Info Banner */}
      <div className="px-6 py-8 bg-emerald-50/50 dark:bg-neutral-900/30 border-b border-emerald-100/30 dark:border-neutral-900 transition-all duration-500">
        <div className="flex items-center gap-5">
          <div className="bg-white dark:bg-neutral-900 p-4 rounded-[24px] shadow-2xl border border-emerald-100 dark:border-neutral-800 rotate-3 transition-transform hover:rotate-0">
            <Store className="w-6 h-6 text-emerald-600 dark:text-heading-gold" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="text-sm font-black text-emerald-900 dark:text-white tracking-widest uppercase italic">In-Store Collection</p>
              <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
            </div>
            <p className="text-xs text-muted-foreground dark:text-muted-foreground leading-relaxed font-medium">
              Curated artisanal products ready for immediate pickup at Tánger Hub.
            </p>
          </div>
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
      <div className="px-6 py-8 grid grid-cols-2 gap-6">
        {filteredProducts.map((product) => (
          <button
            key={product.id}
            onClick={() => navigate(`/product/${product.id}`)}
            className="bg-card dark:bg-neutral-950 rounded-[35px] shadow-sm border border-border/50 dark:border-neutral-900 overflow-hidden hover:shadow-2xl hover:border-emerald-500/20 dark:hover:border-heading-gold/20 transition-all duration-500 group active:scale-[0.98] text-left relative flex flex-col"
          >
            <div className="relative aspect-square overflow-hidden rounded-[25px] m-1.5 shadow-sm">
              <ImageWithFallback
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-500"></div>
              <div className="absolute top-3 right-3 z-10 transition-transform duration-300 group-hover:scale-110">
                <Badge className="bg-emerald-600/90 dark:bg-heading-gold/90 backdrop-blur-md text-white dark:text-black text-[8px] font-black px-2.5 py-0.5 rounded-full uppercase tracking-widest shadow-xl border border-white/20 dark:border-black/20">
                  ✓ Halal
                </Badge>
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 scale-75 group-hover:scale-100">
                 <div className="bg-white/90 dark:bg-heading-gold/90 p-4 rounded-full shadow-2xl">
                   <Eye className="w-6 h-6 text-black" />
                 </div>
              </div>
            </div>
            <div className="p-4 flex flex-col flex-1">
              <h3 className="font-black text-foreground dark:text-heading-gold text-[10px] mb-3 line-clamp-2 leading-tight uppercase tracking-widest h-8 transition-colors duration-300">
                {product.name}
              </h3>
              <div className="flex items-center justify-between mt-auto pt-3 border-t border-border/30 dark:border-neutral-900">
                <div className="flex items-baseline gap-0.5">
                  <span className="text-[10px] font-black text-emerald-600 dark:text-heading-gold">€</span>
                  <p className="text-foreground dark:text-white font-black text-xl tracking-tighter transition-colors">
                    {product.price.toFixed(2)}
                  </p>
                </div>
                <div className="bg-emerald-100 dark:bg-neutral-900 p-2.5 rounded-xl group-hover:bg-emerald-600 dark:group-hover:bg-heading-gold group-hover:text-white dark:group-hover:text-black transition-all duration-500 shadow-inner">
                  <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-heading-gold group-hover:text-inherit" />
                </div>
              </div>
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}
