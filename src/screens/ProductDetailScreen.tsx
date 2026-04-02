
import { ArrowLeft, Store, ShieldCheck, QrCode, Star, Info, Package, Truck, ChevronRight, ShoppingBag, Activity, ChefHat, MessageSquare, ThumbsUp } from 'lucide-react';
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
          <Button onClick={() => navigate('/store')} className="bg-emerald-600 dark:bg-heading-gold rounded-xl px-8 h-12 font-bold shadow-lg shadow-emerald-900/20 dark:text-black">Back to Store</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-[180px] transition-colors duration-300 font-outfit">
      {/* Product Image Header */}
      <div className="relative h-[50vh] overflow-hidden">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-1000"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-black/40" />
        
        {/* Top Actions */}
        <div className="absolute top-0 left-0 right-0 p-8 flex items-center justify-between z-10 pt-12">
          <button
            onClick={() => navigate('/store')}
            className="bg-white/10 dark:bg-black/40 backdrop-blur-xl text-white rounded-[20px] p-3.5 hover:bg-white/20 transition-all shadow-2xl active:scale-95 border border-white/20"
          >
            <ArrowLeft className="w-6 h-6 dark:text-heading-gold" />
          </button>
          <button className="bg-white/10 dark:bg-black/40 backdrop-blur-xl text-white rounded-[20px] p-3.5 hover:bg-white/20 transition-all shadow-2xl active:scale-95 border border-white/20">
             <Star className="w-6 h-6 dark:text-heading-gold" />
          </button>
        </div>

        {/* Halal Badge Overlay */}
        <div className="absolute bottom-16 left-8 z-10 animate-in zoom-in duration-500">
           <Badge className="bg-emerald-600/90 dark:bg-heading-gold/90 backdrop-blur-xl text-white dark:text-black border-2 border-white/20 dark:border-black/10 pl-5 pr-1.5 py-2 rounded-full flex items-center gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
              <span className="font-black text-[10px] uppercase tracking-[0.2em] ">Certified Halal Integrity</span>
              <div className="bg-white/20 dark:bg-black/10 rounded-full p-1.5 backdrop-blur-md">
                 <ShieldCheck className="w-4 h-4 text-white dark:text-black" />
              </div>
           </Badge>
        </div>
      </div>

      {/* Product Details Content */}
      <div className="px-8 -mt-24 relative z-20 pb-12">
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] shadow-2xl p-10 border border-border/50 dark:border-neutral-900 animate-in slide-in-from-bottom-12 duration-700">
          <div className="flex justify-between items-start mb-6">
            <div className="flex-1">
              <p className="text-[10px] font-black text-emerald-600 dark:text-heading-gold uppercase tracking-[0.4em] mb-3 opacity-80">{product.category} Series</p>
              <h1 className="text-4xl font-black text-foreground dark:text-white tracking-tighter leading-[0.9] transition-colors mb-2 uppercase">{product.name}</h1>
            </div>
          </div>

          <div className="flex items-center gap-1.5 mb-8">
             {[1,2,3,4].map(i => <Star key={i} className="w-4 h-4 fill-yellow-500 text-yellow-500 shadow-sm" />)}
             <Star className="w-4 h-4 text-muted-foreground mr-3 opacity-30" />
             <span className="text-[11px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.2em]">(4.8 • Top Choice)</span>
          </div>

          <div className="flex items-baseline gap-3 mb-10 transition-transform hover:scale-105 origin-left duration-300">
             <div className="flex items-baseline dark:text-heading-gold transition-colors">
               <span className="text-xl font-black mr-1">€</span>
               <span className="text-5xl font-black tracking-tighter">{product.price.toFixed(2)}</span>
             </div>
             <span className="text-[10px] text-muted-foreground dark:text-neutral-600 font-extrabold uppercase tracking-widest opacity-60">Premium Value</span>
          </div>

          {/* Verification Banner */}
          <button 
            onClick={() => navigate('/scan')}
            className="w-full bg-emerald-50 dark:bg-neutral-900 border-2 border-emerald-100/50 dark:border-neutral-800 rounded-[35px] p-6 flex items-center justify-between group hover:border-emerald-500 dark:hover:border-heading-gold transition-all mb-12 shadow-inner"
          >
            <div className="flex items-center gap-5">
              <div className="bg-emerald-600 dark:bg-heading-gold text-white dark:text-black p-4 rounded-3xl shadow-xl transition-transform group-hover:rotate-12">
                 <QrCode className="w-7 h-7" />
              </div>
              <div className="text-left">
                <p className="text-[10px] font-black text-emerald-600 dark:text-heading-gold uppercase tracking-[0.3em] leading-none mb-1.5">Ethics Protocol</p>
                <p className="text-foreground dark:text-white text-base font-black tracking-tighter uppercase ">Trace Intelligence</p>
              </div>
            </div>
            <div className="bg-white dark:bg-black/20 p-2.5 rounded-2xl group-hover:bg-emerald-600 dark:group-hover:bg-heading-gold group-hover:text-white dark:group-hover:text-black transition-all">
               <ChevronRight className="w-5 h-5" />
            </div>
          </button>

          {/* Product Info Sections */}
          <div className="grid grid-cols-1 gap-12">
            {/* Description */}
            <div className="space-y-5">
              <h3 className="font-black text-foreground dark:text-heading-gold text-[12px] uppercase tracking-[0.3em] flex items-center gap-3 opacity-50 underline decoration-2 underline-offset-4 decoration-current">
                 <Info className="w-5 h-5" />
                 Biography
              </h3>
              <p className="text-muted-foreground dark:text-neutral-400 text-sm leading-relaxed font-bold  opacity-90 transition-colors">
                {product.description || "Synthesizing traditional Tánger methodologies with modern quality control, this selection embodies the pinnacle of Halal House standards. Sourced directly from verified artisanal creators."}
              </p>
            </div>

            {/* Pure Ingredients */}
            <div className="space-y-5">
               <h3 className="font-black text-foreground dark:text-heading-gold text-[12px] uppercase tracking-[0.3em] flex items-center gap-3 opacity-50 underline decoration-2 underline-offset-4 decoration-current">
                 <Package className="w-5 h-5" />
                 Elements
              </h3>
              <div className="flex flex-wrap gap-3">
                {product.ingredients.map((ing, idx) => (
                  <Badge key={idx} variant="outline" className="border-border dark:border-neutral-800 bg-muted/30 dark:bg-neutral-900 text-foreground dark:text-neutral-300 font-black px-6 py-2 rounded-2xl text-[10px] uppercase tracking-widest shadow-sm hover:border-heading-gold/30 transition-colors">
                    {ing}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sourcing Info */}
            <div className="grid grid-cols-2 gap-8 pt-10 border-t border-dashed border-border/50 dark:border-neutral-900 mt-4">
               <div className="flex items-center gap-5">
                  <div className="bg-emerald-100 dark:bg-neutral-900 p-4 rounded-3xl shadow-sm">
                     <Store className="w-6 h-6 text-emerald-600 dark:text-heading-gold" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-600 uppercase tracking-widest leading-none mb-1.5">Availability</p>
                     <p className="text-foreground dark:text-white font-black text-xs uppercase tracking-tighter">In Hub Stock</p>
                  </div>
               </div>
               <div className="flex items-center gap-5">
                  <div className="bg-blue-100 dark:bg-neutral-900 p-4 rounded-3xl shadow-sm">
                     <Truck className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                  </div>
                  <div>
                     <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-600 uppercase tracking-widest leading-none mb-1.5">Logistics</p>
                     <p className="text-foreground dark:text-white font-black text-xs uppercase tracking-tighter">Express Transit</p>
                  </div>
               </div>
            </div>

            {/* Nutritional Info */}
            <div className="space-y-5">
               <h3 className="font-black text-foreground dark:text-heading-gold text-[12px] uppercase tracking-[0.3em] flex items-center gap-3 opacity-50 underline decoration-2 underline-offset-4 decoration-current">
                 <Activity className="w-5 h-5" />
                 Nutrition
               </h3>
               <div className="grid grid-cols-4 gap-4">
                 {[
                   { label: "Calories", value: "240" },
                   { label: "Protein", value: "12g" },
                   { label: "Carbs", value: "30g" },
                   { label: "Fat", value: "8g" }
                 ].map((stat, i) => (
                   <div key={i} className="bg-card dark:bg-neutral-900 border border-border/50 dark:border-neutral-800 rounded-2xl p-3 text-center shadow-sm">
                     <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mb-1">{stat.label}</p>
                     <p className="text-foreground dark:text-white font-black text-sm">{stat.value}</p>
                   </div>
                 ))}
               </div>
            </div>

            {/* Preparation Steps */}
            <div className="space-y-5">
               <h3 className="font-black text-foreground dark:text-heading-gold text-[12px] uppercase tracking-[0.3em] flex items-center gap-3 opacity-50 underline decoration-2 underline-offset-4 decoration-current">
                 <ChefHat className="w-5 h-5" />
                 Preparation
               </h3>
               <div className="space-y-4">
                  <div className="flex items-start gap-4">
                     <div className="bg-emerald-100 dark:bg-heading-gold/20 text-emerald-700 dark:text-heading-gold font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0">1</div>
                     <p className="text-sm font-medium text-muted-foreground dark:text-neutral-400 leading-snug pt-1">Remove product from vacuum-sealed packaging and let rest for 5 minutes.</p>
                  </div>
                  <div className="flex items-start gap-4">
                     <div className="bg-emerald-100 dark:bg-heading-gold/20 text-emerald-700 dark:text-heading-gold font-black w-8 h-8 rounded-full flex items-center justify-center shrink-0">2</div>
                     <p className="text-sm font-medium text-muted-foreground dark:text-neutral-400 leading-snug pt-1">Heat gently in a pan or microwave according to personal preference.</p>
                  </div>
               </div>
            </div>

            {/* Reviews */}
            <div className="space-y-5">
               <h3 className="font-black text-foreground dark:text-heading-gold text-[12px] uppercase tracking-[0.3em] flex items-center gap-3 opacity-50 underline decoration-2 underline-offset-4 decoration-current">
                 <MessageSquare className="w-5 h-5" />
                 Community
               </h3>
               <div className="bg-muted/30 dark:bg-neutral-900 border border-border/50 dark:border-neutral-800 rounded-3xl p-5 relative">
                  <div className="absolute top-4 right-4 text-emerald-500"><ThumbsUp className="w-4 h-4"/></div>
                  <div className="flex items-center gap-2 mb-2">
                     {[1,2,3,4,5].map(i => <Star key={i} className="w-3 h-3 fill-yellow-500 text-yellow-500" />)}
                  </div>
                  <p className="text-sm font-bold text-foreground dark:text-neutral-300 mb-2">"Absolutely exceptional quality. You can really taste the authenticity and care in the preparation!"</p>
                  <p className="text-[10px] font-black text-muted-foreground uppercase tracking-widest mt-3">— Nadia R. (Verified Hub)</p>
               </div>
            </div>
            </div>

            {/* Related Pairs */}
            <div className="space-y-4 pt-6 border-t border-dashed border-border/50 dark:border-neutral-900">
               <h3 className="font-black text-foreground dark:text-heading-gold text-[12px] uppercase tracking-[0.3em] opacity-80">
                 Pairs well with
               </h3>
               <div className="flex gap-4 overflow-x-auto pb-4 no-scrollbar">
                  {storeProducts.filter(p => p.id !== product.id).slice(0, 2).map((related, idx) => (
                    <button key={idx} onClick={() => navigate('/store')} className="min-w-[140px] flex-1 bg-card dark:bg-neutral-950 border border-border/50 dark:border-neutral-900 rounded-[24px] p-3 shadow-sm hover:shadow-md transition-all text-left group">
                      <div className="w-full h-24 mb-3 rounded-[16px] overflow-hidden bg-muted/30">
                         <img src={related.image} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" alt={related.name} />
                      </div>
                      <p className="text-[10px] font-black text-emerald-600 dark:text-heading-gold uppercase tracking-widest leading-none mb-1 line-clamp-1">{related.category}</p>
                      <p className="font-black text-foreground dark:text-white text-xs leading-tight mb-2 line-clamp-2">{related.name}</p>
                      <p className="text-sm font-black text-foreground dark:text-heading-gold">€{related.price.toFixed(2)}</p>
                    </button>
                  ))}
               </div>
            </div>

          </div>
        </div>

      {/* Floating Bottom Action Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/90 backdrop-blur-3xl border-t border-border/30 dark:border-neutral-900 shadow-[0_-20px_50px_rgba(0,0,0,0.15)] px-8 py-10 z-40 rounded-t-[50px] transition-all duration-500">
        <div className="flex items-center gap-5 justify-between">
          <div className="bg-accent/50 dark:bg-neutral-900/50 p-1.5 rounded-[22px] flex items-center border border-border/50 dark:border-neutral-800 shadow-inner">
            <button className="w-12 h-12 flex items-center justify-center text-foreground dark:text-white font-black hover:bg-black dark:hover:bg-heading-gold hover:text-white dark:hover:text-black rounded-xl transition-all active:scale-90 text-lg">−</button>
            <span className="w-12 text-center font-black text-xl text-foreground dark:text-heading-gold tracking-tighter">1</span>
            <button className="w-12 h-12 flex items-center justify-center text-foreground dark:text-white font-black hover:bg-black dark:hover:bg-heading-gold hover:text-white dark:hover:text-black rounded-xl transition-all active:scale-90 text-lg">+</button>
          </div>
          
          <Button
            onClick={() => navigate('/store')}
            className="flex-1 h-16 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/90 text-white dark:text-black text-base font-black rounded-[22px] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] border-2 border-white/10 dark:border-black/5"
          >
            <ShoppingBag className="w-6 h-6" />
            Find in Hub
          </Button>
        </div>
      </div>
    </div>
  );
}
