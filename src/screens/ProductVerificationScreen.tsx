import { useParams } from 'react-router';
import { ArrowLeft, CheckCircle, MapPin, Calendar, Package, ShieldCheck, FileText, Sparkles, ExternalLink, Scan } from 'lucide-react';
import { productBatches, storeProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function ProductVerificationScreen() {
  const { batchId: paramBatchId } = useParams();
  const navigate = (path: string) => console.log('navigate', path);
  const batchId = paramBatchId || "BATCH-2026-03-15-001"; // Valid default mock batch

  const batch = productBatches.find((b) => b.batchId === batchId);
  const product = batch ? storeProducts.find((p) => p.id === batch.productId) : null;

  if (!batch || !product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-8 transition-colors duration-300 font-outfit">
        <div className="text-center">
          <p className="text-muted-foreground mb-6 font-medium">Verification record not found</p>
          <Button onClick={() => navigate('/home')} className="bg-heading-gold text-black rounded-xl px-8 h-12 font-bold shadow-lg">Go Home</Button>
        </div>
      </div>
    );
  }

  const manufactureDate = new Date(batch.manufactureDate);
  const expiryDate = new Date(batch.expiry);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300 font-outfit">
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-8 sticky top-0 z-30 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500 rounded-b-[40px]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase ">Product Verification</h1>
            <p className="text-muted-foreground dark:text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">Halal House Integrity</p>
          </div>
        </div>
      </div>

      {/* Verified Badge - ONYX & GOLD */}
      <div className="px-6 py-10">
        <div className="bg-black dark:bg-neutral-950 rounded-[50px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] p-12 text-center text-white relative overflow-hidden group border border-white/5 dark:border-neutral-900">
          <div className="absolute top-0 right-0 w-80 h-80 bg-heading-gold/10 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-heading-gold/20 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
          
          <div className="bg-white dark:bg-neutral-900 rounded-full p-10 w-fit mx-auto mb-8 shadow-2xl relative z-10 animate-in zoom-in duration-700 border border-white/10 dark:border-heading-gold/20">
            <CheckCircle className="w-16 h-16 text-emerald-600 dark:text-heading-gold drop-shadow-lg animate-pulse" />
          </div>
          <h2 className="text-5xl font-black mb-3 tracking-tighter relative z-10 uppercase  transition-colors dark:text-white">Halal Verified</h2>
          <p className="text-emerald-100 dark:text-neutral-400 text-sm mb-8 font-bold relative z-10 opacity-90  uppercase tracking-[0.2em]">
            Authenticity guaranteed.
          </p>
          <div className="flex justify-center relative z-10">
            <Badge className="bg-heading-gold text-black text-[10px] font-black px-8 py-3 rounded-2xl uppercase tracking-[0.3em] shadow-[0_20px_40px_rgba(0,0,0,0.4)] border-none  transition-all hover:scale-105">
              {batch.halalCertification}
            </Badge>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="px-6 pb-8">
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] shadow-sm border border-border/50 dark:border-neutral-900 overflow-hidden transition-all duration-500">
          {/* Product Header */}
          <div className="bg-accent/30 dark:bg-neutral-900 px-10 py-10 border-b border-border/30 dark:border-neutral-900 flex items-center justify-between">
            <div>
              <h3 className="font-black text-foreground dark:text-white text-3xl tracking-tighter uppercase  mb-2 transition-colors">{product.name}</h3>
              <p className="text-muted-foreground dark:text-neutral-500 text-[10px] font-black uppercase tracking-[0.3em] opacity-70 ">{product.category}</p>
            </div>
            <div className="bg-white dark:bg-neutral-950 p-4 rounded-3xl shadow-xl border border-border/10 dark:border-neutral-800">
               <Package className="w-8 h-8 text-emerald-600 dark:text-heading-gold" />
            </div>
          </div>

          {/* Batch Details */}
          <div className="p-10 space-y-10">
            <div className="flex items-start gap-6 animate-in slide-in-from-right duration-500 delay-100">
              <div className="bg-accent/50 dark:bg-neutral-900 rounded-[22px] p-4 border border-border/5 dark:border-neutral-800 transition-colors">
                <Receipt className="w-6 h-6 text-muted-foreground dark:text-heading-gold" />
              </div>
              <div className="flex-1">
                <p className="font-black text-foreground dark:text-heading-gold text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60 ">Batch Number</p>
                <p className="text-foreground dark:text-neutral-300 text-sm font-mono font-black tracking-tight transition-colors">{batch.batchId}</p>
              </div>
            </div>

            <div className="flex items-start gap-6 animate-in slide-in-from-right duration-500 delay-200">
              <div className="bg-accent/50 dark:bg-neutral-900 rounded-[22px] p-4 border border-border/5 dark:border-neutral-800 transition-colors">
                <MapPin className="w-6 h-6 text-muted-foreground dark:text-heading-gold" />
              </div>
              <div className="flex-1">
                <p className="font-black text-foreground dark:text-heading-gold text-[10px] uppercase tracking-[0.3em] mb-2 opacity-60 ">Manufacturing Location</p>
                <p className="text-foreground dark:text-white text-base font-black tracking-tighter transition-colors uppercase ">{batch.manufacturingLocation}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-8">
               <div className="flex items-start gap-6 animate-in slide-in-from-right duration-500 delay-300">
                <div className="bg-accent/50 dark:bg-neutral-900 rounded-[20px] p-4 border border-border/5 dark:border-neutral-800 transition-colors">
                  <Calendar className="w-5 h-5 text-muted-foreground dark:text-heading-gold" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-foreground dark:text-heading-gold text-[9px] uppercase tracking-[0.3em] mb-2 opacity-60 ">Production Date</p>
                  <p className="text-foreground dark:text-neutral-300 text-xs font-black tracking-widest transition-colors">
                    {manufactureDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase()}
                  </p>
                </div>
              </div>

               <div className="flex items-start gap-6 animate-in slide-in-from-right duration-500 delay-400">
                <div className="bg-accent/50 dark:bg-neutral-900 rounded-[20px] p-4 border border-border/5 dark:border-neutral-800 transition-colors">
                  <Calendar className="w-5 h-5 text-muted-foreground dark:text-heading-gold" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-foreground dark:text-heading-gold text-[9px] uppercase tracking-[0.3em] mb-2 opacity-60 ">Expiry Date</p>
                  <p className="text-foreground dark:text-neutral-300 text-xs font-black tracking-widest transition-colors">
                     {expiryDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' }).toUpperCase()}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-6 animate-in slide-in-from-right duration-500 delay-500">
              <div className="bg-emerald-100 dark:bg-heading-gold/20 rounded-[22px] p-4 border border-border/5 dark:border-heading-gold/30 transition-colors">
                <ShieldCheck className="w-6 h-6 text-emerald-600 dark:text-heading-gold" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                   <p className="font-black text-foreground dark:text-heading-gold text-[10px] uppercase tracking-[0.3em] opacity-60 ">Halal Certification</p>
                   <Sparkles className="w-3.5 h-3.5 text-yellow-500 animate-pulse" />
                </div>
                <p className="text-foreground dark:text-white text-base font-black tracking-tighter transition-colors uppercase  mb-4">{batch.halalCertification}</p>
                <div className="bg-emerald-50/50 dark:bg-neutral-900 p-6 rounded-[30px] border border-emerald-100 dark:border-neutral-800 transition-colors">
                   <p className="text-[10px] text-emerald-800 dark:text-neutral-500 font-bold leading-relaxed  uppercase tracking-[0.2em]">
                    ✓ Full chain-of-custody verified by IFANCA (Islamic Food and Nutrition Council of America). Node verification authorized.
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="px-6 pb-8">
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] shadow-sm border border-border/50 dark:border-neutral-900 p-10 transition-colors">
          <div className="flex items-center justify-between mb-8 px-2">
            <div className="flex items-center gap-5">
               <div className="bg-accent/50 dark:bg-neutral-900 p-3.5 rounded-[20px] transition-colors">
                 <FileText className="w-6 h-6 text-muted-foreground dark:text-heading-gold" />
               </div>
               <div>
                  <h3 className="font-black text-foreground dark:text-white text-xl tracking-tighter uppercase  transition-colors">Ingredients List</h3>
                  <p className="text-[10px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-widest opacity-60">All Natural Ingredients</p>
               </div>
            </div>
            <div className="text-[9px] font-black text-emerald-600 dark:text-heading-gold uppercase tracking-[0.3em] flex items-center gap-2 bg-emerald-50 dark:bg-heading-gold/10 px-4 py-2 rounded-xl transition-colors ">
               <ShieldCheck className="w-3.5 h-3.5" />
               CLEAN
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {product.ingredients.map((ingredient, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-border/60 dark:border-neutral-800 text-muted-foreground dark:text-neutral-400 bg-accent/20 dark:bg-black font-black px-5 py-2.5 rounded-2xl uppercase tracking-widest text-[9px] transition-all hover:border-emerald-500 dark:hover:border-heading-gold hover:text-foreground dark:hover:text-white"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-12 space-y-5">
        <Button
          onClick={() => navigate('/store')}
          className="w-full h-20 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 text-white dark:text-black font-black rounded-[35px] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.3em] border-2 border-white/5  text-lg shadow-black/20"
        >
          <Package className="w-6 h-6" />
          Buy Now
        </Button>
        <Button
          onClick={() => navigate('/scan')}
          variant="outline"
          className="w-full h-18 border-2 border-border/50 dark:border-neutral-800 text-foreground dark:text-neutral-400 hover:bg-accent dark:hover:bg-neutral-900/50 font-black rounded-[35px] transition-all active:scale-95 flex items-center justify-center gap-4 uppercase tracking-[0.3em]  text-sm"
        >
          <Scan className="w-6 h-6 opacity-60 group-hover:rotate-90 transition-transform" />
          Verify Another Product
        </Button>
      </div>

      <div className="pb-16 text-center">
         <button className="text-[9px] font-black text-muted-foreground dark:text-neutral-700 uppercase tracking-[0.4em] flex items-center gap-3 mx-auto opacity-60 hover:opacity-100 transition-all hover:text-emerald-600 dark:hover:text-heading-gold ">
            View Trust Certificate
            <ExternalLink className="w-3.5 h-3.5" />
         </button>
      </div>
    </div>
  );
}

// Helper component for Receipt icon since it's used in the code but not imported
function Receipt({ className }: { className?: string }) {
  return (
    <svg 
      xmlns="http://www.w3.org/2000/svg" 
      width="24" 
      height="24" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2" 
      strokeLinecap="round" 
      strokeLinejoin="round" 
      className={className}
    >
      <path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1-2-1Z" />
      <path d="M16 8h-6" />
      <path d="M16 12h-9" />
      <path d="M10 16h6" />
    </svg>
  );
}
