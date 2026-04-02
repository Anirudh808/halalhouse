
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
      <div className="absolute top-0 left-0 w-full h-64 bg-emerald-600 dark:bg-emerald-700 rounded-b-[60px] shadow-2xl z-0 transition-colors duration-300">
        <div className="absolute inset-0 opacity-10">
           <div className="absolute top-10 left-10"><PartyPopper className="w-12 h-12 rotate-12" /></div>
           <div className="absolute top-20 right-20"><Sparkles className="w-8 h-8" /></div>
           <div className="absolute bottom-10 left-1/4"><PartyPopper className="w-10 h-10 -rotate-12" /></div>
        </div>
      </div>

      <div className="relative z-10 flex-1 flex flex-col items-center justify-center px-8 text-center pt-20">
        <div className="relative mb-8">
          <div className="absolute inset-0 bg-white/20 blur-2xl rounded-full scale-150 animate-pulse"></div>
          <div className="bg-white dark:bg-neutral-900 rounded-full p-8 shadow-2xl relative z-10 animate-in zoom-in duration-500">
            <CheckCircle className="w-20 h-20 text-emerald-600 dark:text-emerald-500" />
          </div>
        </div>

        <h1 className="text-3xl font-black dark:text-white mb-2 tracking-tight drop-shadow-md">Order Confirmed!</h1>
        <p className="dark:text-emerald-100 text-emerald-500 font-medium mb-8 opacity-90 drop-shadow-sm">
          Your delicious halal meal is being prepared
        </p>

        {/* Order Details Card */}
        <div className="w-full max-w-md bg-card rounded-[40px] shadow-2xl p-8 mb-8 border border-border/50 animate-in slide-in-from-bottom-8 duration-700">
          <div className="text-center mb-8 pb-8 border-b border-border/50">
            <p className="text-[11px] text-muted-foreground font-black uppercase tracking-[0.2em] mb-2">Order Tracking Number</p>
            <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">{orderId}</p>
          </div>

          <div className="space-y-6">
            <div className="flex items-center gap-4 group">
              <div className="bg-emerald-100 dark:bg-emerald-900/30 p-3 rounded-2xl transition-transform group-hover:scale-110">
                <Clock className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-black text-foreground text-xs uppercase tracking-tight">Estimated Pickup</p>
                <p className="text-sm text-muted-foreground font-bold tracking-widest uppercase">20 minutes</p>
              </div>
            </div>

            <div className="flex items-center gap-4 group">
              <div className="bg-blue-100 dark:bg-blue-900/30 p-3 rounded-2xl transition-transform group-hover:scale-110">
                <MapPin className="w-6 h-6 text-blue-600 dark:text-blue-400" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-black text-foreground text-xs uppercase tracking-tight">Pickup Location</p>
                <p className="text-sm text-muted-foreground font-medium italic underline decoration-blue-500/30">
                  HalalHouse Tánger
                </p>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-dashed border-border/50">
            <div className="bg-yellow-50 dark:bg-yellow-900/10 rounded-2xl p-4 text-left border border-yellow-200/50 dark:border-yellow-700/30">
              <p className="text-sm text-yellow-800 dark:text-yellow-500 font-medium">
                <span className="font-black flex items-center gap-2 mb-1 uppercase text-[10px] tracking-widest">
                  <Sparkles className="w-3.5 h-3.5" /> Loyalty Reward
                </span>
                You earned <span className="font-black text-yellow-900 dark:text-white">20 points</span>! Your new balance is {120 + 20} points.
              </p>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="bg-emerald-600/10 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 px-8 py-3 rounded-2xl mb-8 border border-emerald-500/20 backdrop-blur-sm">
          <p className="font-black uppercase text-[11px] tracking-widest">Status: Preparing your order 👨‍🍳</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-8 pb-10 space-y-4 relative z-10">
        <Button
          onClick={() => navigate('/orders')}
          className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white font-black rounded-2xl shadow-xl shadow-emerald-900/20 transition-all active:scale-95 flex items-center justify-center gap-2 group"
        >
          <ListOrdered className="w-5 h-5 group-hover:rotate-12 transition-transform" />
          GO TO MY ORDERS
        </Button>
        <Button
          onClick={() => navigate('/home')}
          variant="outline"
          className="w-full h-16 border-2 border-emerald-600 text-emerald-600 dark:border-emerald-500 dark:text-emerald-500 hover:bg-emerald-50 dark:hover:bg-emerald-950 font-black rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-2 group"
        >
          <Home className="w-5 h-5 group-hover:-translate-y-1 transition-transform" />
          BACK TO HOME
        </Button>
      </div>
    </div>
  );
}
