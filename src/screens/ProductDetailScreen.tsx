
import { ArrowLeft, Store, ShieldCheck, QrCode, Star, Info, Package, Truck, ChevronRight } from 'lucide-react';
import { storeProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';

export function ProductDetailScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const productId = "store-1"; // Hardcoded default for showcase

  const product = storeProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-8 transition-colors duration-300">
        <div className="text-center">
          <p className="text-muted-foreground mb-6 font-medium">Product not found</p>
          <Button onClick={() => navigate('/store')} className="bg-emerald-600 rounded-xl px-8 h-12 font-bold shadow-lg shadow-emerald-900/20">Back to Store</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-32 transition-colors duration-300">
      {/* Product Image Header */}
      <div className="relative h-[45vh] overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/30" />
        
        {/* Top Actions */}
        <div className="absolute top-0 left-0 right-0 p-6 flex items-center justify-between z-10 pt-10">
          <button
            onClick={() => navigate('/store')}
            className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 hover:bg-white/30 transition-all shadow-xl active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <button className="bg-white/20 backdrop-blur-md text-white rounded-full p-3 hover:bg-white/30 transition-all shadow-xl active:scale-95">
             <Star className="w-5 h-5" />
          </button>
        </div>

        {/* Halal Badge Overlay */}
        <div className="absolute bottom-12 left-8 z-10 flex items-center gap-2">
           <Badge className="bg-emerald-500/90 backdrop-blur-md text-white border-2 border-white/20 pl-4 pr-1 py-1.5 rounded-full flex items-center gap-3 shadow-2xl">
              <span className="font-black text-[10px] uppercase tracking-widest">Trust Verified</span>
              <div className="bg-white rounded-full p-1 shadow-inner">
                 <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
              </div>
           </Badge>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="px-8 -mt-24 relative z-20">
        <div className="bg-card rounded-[40px] shadow-2xl p-8 border border-border/50 animate-in slide-in-from-bottom-10 duration-700">
          <div className="flex justify-between items-start mb-4">
            <div className="flex-1">
              <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-[0.3em] mb-2">{product.category}</p>
              <h1 className="text-3xl font-black text-foreground tracking-tight leading-tight">{product.name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-1 mb-8">
             {[1,2,3,4].map(i => <Star key={i} className="w-3.5 h-3.5 fill-yellow-400 text-yellow-400" />)}
             <Star className="w-3.5 h-3.5 text-muted-foreground mr-2" />
             <span className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">(4.0 • 12 Reviews)</span>
          </div>

          <div className="flex items-baseline gap-2 mb-8">
             <span className="text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">€{product.price.toFixed(2)}</span>
             <span className="text-xs text-muted-foreground font-bold uppercase tracking-widest opacity-60">incl. VAT</span>
          </div>

          {/* Verification Banner */}
          <button 
            onClick={() => navigate('/scan')}
            className="w-full bg-emerald-50/50 dark:bg-emerald-950/20 border border-emerald-100 dark:border-emerald-900/50 rounded-[28px] p-5 flex items-center justify-between group hover:border-emerald-500 transition-all mb-10 shadow-sm"
          >
            <div className="flex items-center gap-4">
              <div className="bg-emerald-600 text-white p-3 rounded-2xl shadow-lg shadow-emerald-900/20">
                 <QrCode className="w-6 h-6" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-emerald-600 dark:text-emerald-400 uppercase tracking-widest leading-none mb-1">Pedigree Check</p>
                <p className="text-foreground text-sm font-bold tracking-tight">Trace Halal Ethics</p>
              </div>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2 rounded-xl group-hover:bg-emerald-600 group-hover:text-white transition-colors">
               <ChevronRight className="w-4 h-4" />
            </div>
          </button>

          {/* Description */}
          <div className="space-y-4 mb-10">
            <h3 className="font-black text-foreground text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 opacity-60">
               <Info className="w-4 h-4 text-emerald-600" />
               Product Persona
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed font-bold italic">
              {product.description || "Carefully sourced and handled under strict halal standards to ensure the highest quality and compliance. A premium product from our Tánger selection."}
            </p>
          </div>

          {/* Pure Ingredients */}
          <div className="space-y-4 mb-10">
             <h3 className="font-black text-foreground text-[11px] uppercase tracking-[0.2em] flex items-center gap-2 opacity-60">
               <Package className="w-4 h-4 text-emerald-600" />
               Composition
            </h3>
            <div className="flex flex-wrap gap-2.5">
              {product.ingredients.map((ing, idx) => (
                <Badge key={idx} variant="outline" className="border-border bg-muted/20 dark:bg-neutral-800/20 text-foreground/80 font-black px-4 py-1.5 rounded-xl text-[10px] uppercase tracking-tighter shadow-sm">
                  {ing}
                </Badge>
              ))}
            </div>
          </div>

          {/* Sourcing Info */}
          <div className="grid grid-cols-2 gap-6 pb-6 pt-6 border-t border-dashed border-border/50">
             <div className="flex items-center gap-4">
                <div className="bg-emerald-100 dark:bg-emerald-900/40 p-3 rounded-2xl">
                   <Store className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Availability</p>
                   <p className="text-foreground font-bold text-xs uppercase tracking-tighter">In Hub Stock</p>
                </div>
             </div>
             <div className="flex items-center gap-4">
                <div className="bg-blue-100 dark:bg-blue-900/40 p-3 rounded-2xl">
                   <Truck className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <div>
                   <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest leading-none mb-1">Logistics</p>
                   <p className="text-foreground font-bold text-xs uppercase tracking-tighter">Express In-Store</p>
                </div>
             </div>
          </div>
        </div>
      </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 dark:bg-neutral-900/80 backdrop-blur-2xl border-t border-border shadow-2xl px-8 py-8 z-30 rounded-t-[40px] transition-all duration-300">
        <div className="flex items-center gap-4 justify-between">
          <div className="bg-muted/50 dark:bg-neutral-800/50 p-1 rounded-2xl flex items-center border border-border/50">
            <button className="w-12 h-12 flex items-center justify-center text-foreground font-black hover:bg-emerald-500 hover:text-white rounded-xl transition-all active:scale-95">−</button>
            <span className="w-10 text-center font-black text-foreground">1</span>
            <button className="w-12 h-12 flex items-center justify-center text-foreground font-black hover:bg-emerald-500 hover:text-white rounded-xl transition-all active:scale-95">+</button>
          </div>
          
          <Button
            onClick={() => navigate('/store')}
            className="flex-1 h-16 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-lg font-black rounded-2xl shadow-xl shadow-emerald-900/20 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Store className="w-5 h-5" />
            FIND IN STORE
          </Button>
        </div>
      </div>
    </div>
  );
}
