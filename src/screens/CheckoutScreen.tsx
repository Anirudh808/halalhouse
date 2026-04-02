
import { ArrowLeft, MapPin, Clock, CreditCard, ShieldCheck } from 'lucide-react';
import { useCart } from '../context/CartContext';
import { Button } from '../components/ui/button';
import { currentUser } from '../data/mockData';

export function CheckoutScreen() {
  const navigate = (path: string, options?: any) => console.log('Showcase navigate to', path, options);
  const { restaurantCart, getRestaurantTotal, clearRestaurantCart } = useCart();

  const total = getRestaurantTotal();

  const handleConfirmOrder = () => {
    // In real app, submit order to backend
    clearRestaurantCart();
    navigate('/order-confirmation', { state: { orderId: 'ORD-' + Math.floor(Math.random() * 9000 + 1000) } });
  };

  return (
    <div className="min-h-screen bg-background pb-40 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-8 sticky top-0 z-40 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500 rounded-b-[40px]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/cart')} 
            className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Execution</h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">Final Protocol Affirmation</p>
          </div>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-6 py-10">
        <div className="flex items-center gap-4 mb-6 ml-4 opacity-70">
           <div className="h-1 w-10 bg-emerald-600 dark:bg-heading-gold rounded-full"></div>
           <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-500 uppercase tracking-[0.4em] italic transition-colors">Manifest Summary</p>
        </div>
        <div className="bg-card dark:bg-neutral-950 rounded-[40px] p-10 shadow-sm border border-border/50 dark:border-neutral-900 space-y-6 transition-colors">
          {restaurantCart.map((item) => (
            <div key={item.product.id} className="flex justify-between items-start animate-in fade-in slide-in-from-right-10 duration-500">
              <div className="flex-1">
                <p className="font-black text-foreground dark:text-white text-base tracking-tighter uppercase italic leading-none mb-1 transition-colors">{item.product.name}</p>
                <p className="text-[10px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-widest leading-none">Units: {item.quantity}</p>
              </div>
              <p className="font-black text-foreground dark:text-white text-lg tracking-tighter italic transition-colors">
                €{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="pt-8 mt-4 border-t border-dashed border-border/30 dark:border-neutral-800 flex justify-between items-center opacity-80">
             <span className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.3em] italic">Accumulated Sum</span>
             <span className="font-black text-emerald-600 dark:text-heading-gold text-2xl tracking-tighter italic transition-colors">€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Pickup Logistics */}
      <div className="px-6 pb-10">
        <div className="flex items-center gap-4 mb-6 ml-4 opacity-70">
           <div className="h-1 w-10 bg-emerald-600 dark:bg-heading-gold rounded-full"></div>
           <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-500 uppercase tracking-[0.4em] italic transition-colors">Pickup Logistics</p>
        </div>
        
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] p-10 shadow-sm border border-border/50 dark:border-neutral-900 space-y-10 transition-colors">
          <div className="flex items-start gap-6 group">
            <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-2xl border border-border/10 dark:border-neutral-800 transition-colors">
               <MapPin className="w-7 h-7 text-emerald-600 dark:text-heading-gold transition-colors" />
            </div>
            <div className="flex-1 border-b border-border/20 dark:border-neutral-900 pb-8">
              <p className="font-black text-foreground dark:text-white text-base uppercase tracking-tight mb-3 italic">Node Location</p>
              <p className="text-[11px] text-muted-foreground dark:text-muted-foreground font-bold leading-relaxed uppercase tracking-widest opacity-80 decoration-heading-gold italic">
                HalalHouse Tánger Command<br />
                Calle Principal 123<br />
                90000 Tánger, Morocco
              </p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-2xl border border-border/10 dark:border-neutral-800 transition-colors">
               <Clock className="w-7 h-7 text-emerald-600 dark:text-heading-gold transition-colors" />
            </div>
            <div className="flex-1 border-b border-border/20 dark:border-neutral-900 pb-8">
              <p className="font-black text-foreground dark:text-white text-base uppercase tracking-tight mb-3 italic">Synthesis Window</p>
              <p className="text-[11px] text-emerald-600 dark:text-heading-gold font-black tracking-[0.4em] uppercase italic transition-colors">ASAP Protocol • 20 Mins</p>
            </div>
          </div>

          <div className="flex items-start gap-6 group">
            <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-2xl border border-border/10 dark:border-neutral-800 transition-colors">
               <CreditCard className="w-7 h-7 text-emerald-600 dark:text-heading-gold transition-colors" />
            </div>
            <div className="flex-1">
              <p className="font-black text-foreground dark:text-white text-base uppercase tracking-tight mb-3 italic">Settlement Path</p>
              <p className="text-[11px] text-muted-foreground dark:text-muted-foreground font-black tracking-[0.3em] uppercase mb-4 opacity-80">Counter Settlement Requested</p>
              <div className="flex items-center gap-2 text-emerald-600 dark:text-heading-gold bg-emerald-50 dark:bg-heading-gold/10 w-fit px-4 py-2 rounded-xl border border-emerald-100 dark:border-heading-gold/20 transition-all">
                 <ShieldCheck className="w-3.5 h-3.5" />
                 <span className="text-[9px] font-black uppercase tracking-[0.2em] italic">Safeguard Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Profile */}
      <div className="px-6 pb-12">
        <div className="flex items-center gap-4 mb-6 ml-4 opacity-70">
           <div className="h-1 w-10 bg-emerald-600 dark:bg-heading-gold rounded-full"></div>
           <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-500 uppercase tracking-[0.4em] italic transition-colors">Operational Profile</p>
        </div>
        <div className="bg-card dark:bg-neutral-950 rounded-[40px] p-8 shadow-sm border border-border/50 dark:border-neutral-900 flex items-center justify-between transition-colors">
          <div>
            <p className="font-black text-foreground dark:text-white text-xl tracking-tighter uppercase italic leading-none mb-1 transition-colors">{currentUser.name}</p>
            <p className="text-[10px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.2em] transition-colors">{currentUser.phone}</p>
          </div>
          <div className="p-4 bg-emerald-50/50 dark:bg-neutral-900 rounded-full border border-emerald-100 dark:border-neutral-800 transition-colors">
             <ShieldCheck className="w-8 h-8 text-emerald-600 dark:text-heading-gold animate-pulse" />
          </div>
        </div>
      </div>

      {/* Bottom Total and Confirm execution */}
      <div className="fixed bottom-0 left-0 right-0 bg-white/80 dark:bg-black/90 backdrop-blur-3xl border-t border-border/30 dark:border-neutral-900 shadow-[0_-30px_80px_rgba(0,0,0,0.15)] px-10 py-10 z-50 rounded-t-[55px] transition-all duration-700">
        <div className="flex items-center justify-between mb-8">
          <div>
            <span className="block font-black text-foreground dark:text-white text-2xl tracking-tighter uppercase italic leading-none mb-1 transition-colors">Final Affirm</span>
            <span className="block text-[8px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.4em] italic opacity-60">Settlement At Counter</span>
          </div>
          <span className="font-black text-5xl text-emerald-600 dark:text-heading-gold tracking-tighter italic drop-shadow-sm transition-colors">€{total.toFixed(2)}</span>
        </div>
        <Button
          onClick={handleConfirmOrder}
          className="w-full h-20 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 text-white dark:text-black text-md font-black rounded-[35px] shadow-2xl active:scale-95 transition-all flex items-center justify-center gap-6 group uppercase tracking-[0.1em] border-2 border-white/5 italic shadow-black/20"
        >
          Confirm Execution
          <div className="w-12 h-12 rounded-[22px] bg-white/20 dark:bg-black/20 flex items-center justify-center group-hover:rotate-12 transition-transform border border-white/10 dark:border-black/5">
             <ShieldCheck className="w-7 h-7 text-white dark:text-black" />
          </div>
        </Button>
      </div>
    </div>
  );
}
