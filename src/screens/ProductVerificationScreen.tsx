
import { ArrowLeft, CheckCircle, MapPin, Calendar, Package, ShieldCheck, FileText, Sparkles, ExternalLink, Scan } from 'lucide-react';
import { productBatches, storeProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function ProductVerificationScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const batchId = "BATCH-001"; // Hardcoded default for showcase

  const batch = productBatches.find((b) => b.batchId === batchId);
  const product = batch ? storeProducts.find((p) => p.id === batch.productId) : null;

  if (!batch || !product) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center px-8 transition-colors duration-300">
        <div className="text-center">
          <p className="text-muted-foreground mb-6 font-medium">Verification record not found</p>
          <Button onClick={() => navigate('/home')} className="bg-emerald-600 rounded-xl px-8 h-12 font-bold shadow-lg shadow-emerald-900/20">Go Home</Button>
        </div>
      </div>
    );
  }

  const manufactureDate = new Date(batch.manufactureDate);
  const expiryDate = new Date(batch.expiry);

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 sticky top-0 z-20 shadow-lg transition-colors duration-300 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all shadow-inner active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-black tracking-tight font-outfit">Verification</h1>
        </div>
      </div>

      {/* Verified Badge - PREMIUM DESIGN */}
      <div className="px-6 py-8">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 dark:from-emerald-700 dark:to-teal-800 rounded-[45px] shadow-2xl p-10 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-700"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-emerald-400/20 rounded-full -ml-12 -mb-12 blur-xl"></div>
          
          <div className="bg-white dark:bg-neutral-900 rounded-full p-8 w-fit mx-auto mb-6 shadow-2xl relative z-10 animate-in zoom-in duration-500">
            <CheckCircle className="w-16 h-16 text-emerald-600 dark:text-emerald-500" />
          </div>
          <h2 className="text-4xl font-black mb-2 tracking-tighter relative z-10">✓ Halal Verified</h2>
          <p className="text-emerald-100 text-lg mb-6 font-medium relative z-10 opacity-90 italic">
            Integrity check complete.
          </p>
          <div className="flex justify-center relative z-10">
            <Badge className="bg-yellow-400 hover:bg-yellow-500 text-yellow-900 text-xs font-black px-5 py-2 rounded-full uppercase tracking-widest shadow-lg border-2 border-white/20">
              {batch.halalCertification}
            </Badge>
          </div>
        </div>
      </div>

      {/* Product Information */}
      <div className="px-6 pb-6">
        <div className="bg-card rounded-[40px] shadow-sm border border-border/50 overflow-hidden transition-colors duration-300">
          {/* Product Header */}
          <div className="bg-emerald-50/50 dark:bg-emerald-950/20 px-8 py-6 border-b border-border/50 flex items-center justify-between">
            <div>
              <h3 className="font-black text-foreground text-2xl tracking-tight leading-none mb-2">{product.name}</h3>
              <p className="text-muted-foreground text-xs font-black uppercase tracking-[0.2em]">{product.category}</p>
            </div>
            <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2.5 rounded-2xl">
               <Package className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
          </div>

          {/* Batch Details */}
          <div className="p-8 space-y-8">
            <div className="flex items-start gap-4 animate-in slide-in-from-right duration-300 delay-100">
              <div className="bg-muted dark:bg-neutral-800 rounded-2xl p-3 shadow-sm">
                <Receipt className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-black text-foreground text-[11px] uppercase tracking-widest mb-1 opacity-70">Batch Trace ID</p>
                <p className="text-foreground text-sm font-mono font-bold tracking-tighter">{batch.batchId}</p>
              </div>
            </div>

            <div className="flex items-start gap-4 animate-in slide-in-from-right duration-300 delay-200">
              <div className="bg-muted dark:bg-neutral-800 rounded-2xl p-3 shadow-sm">
                <MapPin className="w-5 h-5 text-muted-foreground" />
              </div>
              <div className="flex-1">
                <p className="font-black text-foreground text-[11px] uppercase tracking-widest mb-1 opacity-70">Sourcing Hub</p>
                <p className="text-foreground text-sm font-bold tracking-tight">{batch.manufacturingLocation}</p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="flex items-start gap-4 animate-in slide-in-from-right duration-300 delay-300">
                <div className="bg-muted dark:bg-neutral-800 rounded-2xl p-3 shadow-sm">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-foreground text-[11px] uppercase tracking-widest mb-1 opacity-70">Born On</p>
                  <p className="text-foreground text-[13px] font-bold tracking-tight leading-snug">
                    {manufactureDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>

               <div className="flex items-start gap-4 animate-in slide-in-from-right duration-300 delay-400">
                <div className="bg-muted dark:bg-neutral-800 rounded-2xl p-3 shadow-sm">
                  <Calendar className="w-5 h-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="font-black text-foreground text-[11px] uppercase tracking-widest mb-1 opacity-70">Best By</p>
                  <p className="text-foreground text-[13px] font-bold tracking-tight leading-snug">
                     {expiryDate.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' })}
                  </p>
                </div>
              </div>
            </div>

            <div className="flex items-start gap-4 animate-in slide-in-from-right duration-300 delay-500">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl p-3 shadow-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                   <p className="font-black text-foreground text-[11px] uppercase tracking-widest opacity-70">Certification Body</p>
                   <Sparkles className="w-3 h-3 text-yellow-500" />
                </div>
                <p className="text-foreground text-sm font-bold tracking-tight">{batch.halalCertification}</p>
                <div className="bg-emerald-50 dark:bg-emerald-950/50 p-3 rounded-xl border border-emerald-100 dark:border-emerald-900/50 mt-3">
                   <p className="text-[10px] text-emerald-700 dark:text-emerald-400 font-bold leading-relaxed italic">
                    ✓ Full chain-of-custody verified by IFANCA (Islamic Food and Nutrition Council of America).
                   </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="px-6 pb-6">
        <div className="bg-card rounded-[40px] shadow-sm border border-border/50 p-8">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center gap-3">
               <div className="bg-muted dark:bg-neutral-800 p-2.5 rounded-xl">
                 <FileText className="w-5 h-5 text-muted-foreground" />
               </div>
               <h3 className="font-black text-foreground text-lg tracking-tight">Pure Ingredients</h3>
            </div>
            <div className="text-[10px] font-black text-emerald-600 uppercase tracking-widest flex items-center gap-1 bg-emerald-50 dark:bg-emerald-950 p-1.5 rounded-lg">
               <ShieldCheck className="w-3 h-3" />
               Clean
            </div>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {product.ingredients.map((ingredient, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-emerald-200 dark:border-emerald-800 text-emerald-700 dark:text-emerald-400 bg-emerald-50/50 dark:bg-emerald-950/20 font-bold px-4 py-1.5 rounded-xl uppercase tracking-tighter text-[10px]"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-12 space-y-4">
        <Button
          onClick={() => navigate('/store')}
          className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-900/20 active:scale-95 transition-all flex items-center justify-center gap-3 group"
        >
          <Package className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          SHOP THIS PRODUCT
        </Button>
        <Button
          onClick={() => navigate('/scan')}
          variant="outline"
          className="w-full h-16 border-2 border-emerald-600 text-emerald-600 dark:border-emerald-500 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950/50 font-black rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3 group"
        >
          <Scan className="w-5 h-5 group-hover:rotate-90 transition-transform" />
          SCAN ANOTHER
        </Button>
      </div>

      <div className="pb-10 text-center">
         <button className="text-[10px] font-black text-muted-foreground uppercase tracking-[0.3em] flex items-center gap-2 mx-auto opacity-40 hover:opacity-100 transition-opacity">
            View Blockchain Proof
            <ExternalLink className="w-3 h-3" />
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
