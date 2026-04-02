
import { CheckCircle, Clock, MapPin, Sparkles, PartyPopper, Home, ListOrdered } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useEffect } from 'react';

export function OrderConfirmationScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const orderId = 'ORD-1001'; // Default for showcase

  useEffect(() => {
    // Add confetti effect or celebration animation here
  }, []);

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300 overflow-hidden">
      {/* Success Decoration */}
      <div className="absolute top-0 left-0 w-full h-[450px] bg-black dark:bg-black rounded-b-[80px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] z-0 border-b border-white/5 transition-all duration-700">
        <div className="absolute inset-0 opacity-20">
           <div className="absolute top-20 left-12 animate-bounce delay-75"><PartyPopper className="w-14 h-14 text-heading-gold rotate-12" /></div>
           <div className="absolute top-40 right-16 animate-pulse"><Sparkles className="w-10 h-10 text-heading-gold" /></div>
           <div className="absolute bottom-20 left-1/3 animate-bounce delay-300"><PartyPopper className="w-12 h-12 text-heading-gold -rotate-12" /></div>
           <div className="absolute top-1/2 right-1/4 animate-pulse delay-500"><Sparkles className="w-8 h-8 text-heading-gold" /></div>
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-10 text-center pt-24">
        <div className="relative mb-12">
          <div className="absolute inset-0 bg-heading-gold/20 blur-[100px] rounded-full scale-150 animate-pulse"></div>
          <div className="bg-white dark:bg-neutral-900 rounded-full p-12 shadow-[0_30px_60px_rgba(0,0,0,0.4)] relative z-10 animate-in zoom-in duration-700 border border-white/10 dark:border-heading-gold/30">
            <CheckCircle className="w-24 h-24 text-emerald-600 dark:text-heading-gold drop-shadow-2xl" />
          </div>
        </div>

        <h1 className="text-5xl font-black text-white mb-3 tracking-tighter uppercase italic drop-shadow-2xl transition-colors">Protocol Locked</h1>
        <p className="text-emerald-300 dark:text-heading-gold font-black mb-12 opacity-90 uppercase tracking-[0.3em] text-xs italic transition-colors">
          Synthesis Initialized • Prepare For Receipt
        </p>

        {/* Order Details Card */}
        <div className="w-full max-w-md bg-card dark:bg-neutral-950 rounded-[50px] shadow-[0_40px_80px_rgba(0,0,0,0.3)] p-12 mb-10 border border-border/50 dark:border-neutral-900 animate-in slide-in-from-bottom-12 duration-1000 transition-all">
          <div className="text-center mb-10 pb-10 border-b border-border/30 dark:border-neutral-900">
            <p className="text-[10px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.4em] mb-4 opacity-60">Fulfillment Token</p>
            <p className="text-5xl font-black text-emerald-600 dark:text-heading-gold tracking-tighter italic transition-colors animate-pulse">{orderId}</p>
          </div>

          <div className="space-y-8">
            <div className="flex items-center gap-6 group">
              <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-[22px] transition-all border border-border/5 dark:border-neutral-800 shadow-inner group-hover:scale-110">
                <Clock className="w-7 h-7 text-emerald-600 dark:text-heading-gold" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-black text-foreground dark:text-white text-[11px] uppercase tracking-[0.3em] mb-1 transition-colors italic">Synthesis Window</p>
                <p className="text-xs text-muted-foreground dark:text-neutral-500 font-black tracking-widest uppercase opacity-80 transition-colors">20 Minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-6 group">
              <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-[22px] transition-all border border-border/5 dark:border-neutral-800 shadow-inner group-hover:scale-110">
                <MapPin className="w-7 h-7 text-emerald-600 dark:text-heading-gold" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-black text-foreground dark:text-white text-[11px] uppercase tracking-[0.3em] mb-1 transition-colors italic">Node Location</p>
                <p className="text-[11px] text-muted-foreground dark:text-muted-foreground font-bold uppercase tracking-widest leading-relaxed opacity-80 transition-colors">
                  HalalHouse Tánger Hub
                </p>
              </div>
            </div>
          </div>

          <div className="mt-10 pt-10 border-t border-dashed border-border/30 dark:border-neutral-900">
            <div className="bg-yellow-50/50 dark:bg-heading-gold/5 rounded-[30px] p-6 text-left border border-yellow-200/50 dark:border-heading-gold/10 transition-colors shadow-inner">
              <p className="text-sm text-yellow-800 dark:text-neutral-400 font-bold transition-colors">
                <span className="font-black flex items-center gap-3 mb-2 uppercase text-[9px] tracking-[0.4em] text-yellow-700 dark:text-heading-gold italic">
                  <Sparkles className="w-4 h-4 animate-spin-slow" /> Loyalty Yield
                </span>
                Net weight acquired: <span className="font-black text-yellow-900 dark:text-white">20 points</span>. Protocol balance verified.
              </p>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="bg-black dark:bg-neutral-950 text-emerald-500 dark:text-heading-gold px-10 py-4 rounded-2xl mb-12 border border-white/5 dark:border-neutral-900 transition-all shadow-2xl">
          <p className="font-black uppercase text-[10px] tracking-[0.4em] italic animate-pulse">Status: Culinary Synthesis Active 👨‍🍳</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-10 pb-16 space-y-5 relative z-10">
        <Button
          onClick={() => navigate('/orders')}
          className="w-full h-20 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 text-white dark:text-black font-black rounded-[35px] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.3em] border-2 border-white/5 italic text-lg shadow-black/20"
        >
          <ListOrdered className="w-6 h-6 transition-transform group-hover:scale-110" />
          Review Orders
        </Button>
        <Button
          onClick={() => navigate('/home')}
          variant="outline"
          className="w-full h-18 border-2 border-border/50 dark:border-neutral-800 text-foreground dark:text-neutral-500 hover:bg-accent dark:hover:bg-neutral-900/50 font-black rounded-[35px] transition-all active:scale-95 flex items-center justify-center gap-4 uppercase tracking-[0.3em] italic text-sm"
        >
          <Home className="w-6 h-6 transition-transform group-hover:-translate-y-1" />
          Return to Hub
        </Button>
      </div>
    </div>
  );
}
