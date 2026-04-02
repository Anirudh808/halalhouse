import { useState } from 'react';
import { ArrowLeft, Minus, Plus, Trash2, Clock, ShoppingBag } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';

export function CartScreen() {
  const navigate = (path: string) => console.log('Showcase navigate to', path);
  const {
    restaurantCart,
    updateRestaurantQuantity,
    removeFromRestaurantCart,
    getRestaurantTotal,
  } = useCart();

  const [pickupTime, setPickupTime] = useState('ASAP (20 min)');

  const pickupOptions = [
    'ASAP (20 min)',
    '13:00',
    '13:30',
    '14:00',
    '14:30',
    '15:00',
    '15:30',
    '16:00',
  ];

  const total = getRestaurantTotal();

  if (restaurantCart.length === 0) {
    return (
      <div className="min-h-screen bg-background flex flex-col transition-colors duration-300 font-outfit">
        <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-8 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500 rounded-b-[40px]">
          <div className="flex items-center gap-4">
            <button 
              onClick={() => navigate('/restaurant')} 
              className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
            >
              <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
            </button>
            <div>
              <h1 className="text-2xl font-black tracking-tighter uppercase italic">Cart Hub</h1>
              <p className="text-muted-foreground dark:text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">Order Preparation Ledger</p>
            </div>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center animate-in fade-in zoom-in duration-700">
          <div className="relative mb-12">
            <div className="absolute inset-0 bg-emerald-500/5 dark:bg-heading-gold/5 blur-[120px] rounded-full scale-150 animate-pulse"></div>
            <div className="bg-card dark:bg-neutral-950 rounded-[50px] p-16 shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-border/50 dark:border-neutral-900 relative z-10 transition-transform hover:rotate-6 duration-700">
              <ShoppingBag className="w-24 h-24 text-emerald-600/20 dark:text-heading-gold/10 drop-shadow-2xl" />
            </div>
          </div>
          <h2 className="text-4xl font-black text-foreground dark:text-white mb-4 tracking-tighter uppercase italic transition-colors">Hub record empty</h2>
          <p className="text-muted-foreground dark:text-neutral-500 mb-12 font-bold leading-relaxed max-w-xs mx-auto uppercase text-[10px] tracking-widest italic opacity-80">
            Sovereign fulfillment awaits. Initialize your order stream with our premium halal selections.
          </p>
          <Button
            onClick={() => navigate('/restaurant')}
            className="bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 h-18 px-12 rounded-[28px] text-lg font-black shadow-2xl active:scale-95 transition-all text-white dark:text-black uppercase tracking-[0.2em] border-2 border-white/5 italic"
          >
            Access Menu Stream
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-48 transition-colors duration-300 font-outfit">
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-8 sticky top-0 z-40 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500 rounded-b-[40px]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Cart Hub</h1>
            <p className="text-muted-foreground dark:text-neutral-500 text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">Reviewing Active Protocol</p>
          </div>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-10 space-y-6">
        <div className="flex items-center gap-4 mb-4 ml-4 opacity-70">
           <div className="h-1 w-10 bg-emerald-600 dark:bg-heading-gold rounded-full"></div>
           <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-500 uppercase tracking-[0.4em] italic transition-colors">Fulfilment Stream</p>
        </div>
        {restaurantCart.map((item) => (
          <div key={item.product.id} className="bg-card dark:bg-neutral-950 rounded-[40px] p-7 shadow-sm border border-border/50 dark:border-neutral-900 hover:shadow-2xl transition-all duration-500 group">
            <div className="flex items-start gap-6">
              <div className="flex-1">
                <h3 className="font-black text-foreground dark:text-white text-xl mb-1 tracking-tighter uppercase italic transition-colors">{item.product.name}</h3>
                <p className="text-emerald-600 dark:text-heading-gold text-xs font-black mb-6 uppercase tracking-widest italic transition-colors">
                  €{item.product.price.toFixed(2)} unit
                </p>
                <div className="flex items-center gap-6">
                  <div className="flex items-center gap-4 bg-accent/20 dark:bg-neutral-900 p-1.5 rounded-[22px] border border-border/10 dark:border-neutral-800 transition-colors">
                    <button
                      onClick={() =>
                        updateRestaurantQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-950 hover:bg-black dark:hover:bg-heading-gold hover:text-white dark:hover:text-black rounded-xl transition-all shadow-xl active:scale-90 border border-border/5 dark:border-neutral-800"
                    >
                      <Minus className="w-5 h-5" />
                    </button>
                    <span className="font-black text-foreground dark:text-white min-w-[2rem] text-center text-xl tracking-tighter transition-colors">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateRestaurantQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-12 h-12 flex items-center justify-center bg-white dark:bg-neutral-950 hover:bg-black dark:hover:bg-heading-gold hover:text-white dark:hover:text-black rounded-xl transition-all shadow-xl active:scale-90 border border-border/5 dark:border-neutral-800"
                    >
                      <Plus className="w-5 h-5" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromRestaurantCart(item.product.id)}
                    className="text-muted-foreground dark:text-neutral-600 hover:text-red-500 dark:hover:text-red-400 p-3 transition-all active:scale-75 group"
                  >
                    <Trash2 className="w-6 h-6 opacity-40 group-hover:opacity-100 transition-opacity" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-foreground dark:text-white text-2xl tracking-tighter italic transition-colors">
                  €{(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pickup Schedule */}
      <div className="px-6 py-4">
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] p-10 shadow-sm border border-border/50 dark:border-neutral-900 transition-all duration-500">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-2xl shadow-inner border border-border/10 dark:border-neutral-800 transition-colors">
              <Clock className="w-7 h-7 text-emerald-600 dark:text-heading-gold" />
            </div>
            <div>
               <h3 className="font-black text-foreground dark:text-white tracking-tighter text-xl uppercase italic transition-colors">Pickup Schedule</h3>
               <p className="text-[10px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.3em] opacity-60">Synchronize Protocol</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-3">
            {pickupOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPickupTime(option)}
                className={`px-6 py-3.5 rounded-[18px] text-[10px] font-black uppercase tracking-widest transition-all duration-500 transform active:scale-95 border italic ${
                  pickupTime === option
                    ? 'bg-black dark:bg-heading-gold text-white dark:text-black border-black dark:border-heading-gold shadow-[0_15px_30px_rgba(0,0,0,0.2)] dark:shadow-[0_15px_30px_rgba(191,153,6,0.2)]'
                    : 'bg-background dark:bg-neutral-900 text-muted-foreground dark:text-neutral-500 border-border dark:border-neutral-800 hover:bg-accent dark:hover:bg-neutral-800 hover:text-foreground dark:hover:text-neutral-300'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/90 backdrop-blur-3xl border-t border-border/30 dark:border-neutral-900 shadow-[0_-30px_80px_rgba(0,0,0,0.15)] px-10 py-10 z-50 transition-all duration-700 rounded-t-[55px]">
        <div className="space-y-4 mb-8">
          <div className="flex items-center justify-between opacity-70">
            <span className="text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.2em] text-[10px] italic">Internal Net Sum</span>
            <span className="font-black text-foreground dark:text-white text-lg tracking-tighter italic">€{total.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pb-6 border-b border-border/10 dark:border-neutral-800 opacity-70">
            <span className="text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.2em] text-[10px] italic">Protocol Fee</span>
            <span className="font-black text-emerald-600 dark:text-heading-gold text-[10px] italic tracking-[0.4em] uppercase transition-colors animate-pulse">Wave Waived</span>
          </div>
          <div className="flex items-center justify-between pt-4">
            <div>
               <span className="block font-black text-foreground dark:text-white text-2xl tracking-tighter uppercase italic transition-colors leading-none mb-1">Hub Final</span>
               <span className="block text-[8px] text-muted-foreground dark:text-neutral-600 font-black uppercase tracking-[0.4em] italic opacity-60">Execution Value</span>
            </div>
            <div className="text-right">
               <span className="block font-black text-5xl text-emerald-600 dark:text-heading-gold tracking-tighter italic transition-colors drop-shadow-sm">€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => navigate('/checkout')}
          className="w-full h-20 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 text-white dark:text-black text-xl font-black rounded-[35px] shadow-2xl active:scale-95 transition-all group uppercase tracking-[0.3em] border-2 border-white/5 italic shadow-black/20"
        >
          <span className="flex items-center justify-center gap-6 w-full px-6">
            Execute Checkout
            <div className="w-12 h-12 rounded-[18px] bg-white/20 dark:bg-black/20 flex items-center justify-center group-hover:translate-x-4 transition-transform border border-white/10 dark:border-black/5">
               <ArrowLeft className="w-6 h-6 rotate-180" />
            </div>
          </span>
        </Button>
      </div>
    </div>
  );
}
