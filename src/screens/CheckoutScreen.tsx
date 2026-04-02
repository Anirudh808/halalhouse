
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
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 sticky top-0 z-20 shadow-lg transition-colors duration-300 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/cart')} 
            className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all shadow-inner"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-black tracking-tight">Checkout</h1>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-6 py-8">
        <div className="flex items-center gap-2 mb-4">
           <div className="h-1 w-8 bg-emerald-600 rounded-full"></div>
           <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Order Summary</p>
        </div>
        <div className="bg-card rounded-[32px] p-6 shadow-sm border border-border/50 space-y-4">
          {restaurantCart.map((item) => (
            <div key={item.product.id} className="flex justify-between items-start animate-in fade-in slide-in-from-right-4 duration-300">
              <div className="flex-1">
                <p className="font-bold text-foreground text-sm tracking-tight">{item.product.name}</p>
                <p className="text-[11px] text-muted-foreground font-black uppercase tracking-widest mt-0.5">Quantity: {item.quantity}</p>
              </div>
              <p className="font-black text-foreground text-sm">
                €{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
          <div className="pt-4 mt-2 border-t border-dashed border-border/50 flex justify-between items-center">
             <span className="text-muted-foreground text-xs font-bold uppercase tracking-widest">Bag Total</span>
             <span className="font-black text-emerald-600 dark:text-emerald-400 text-lg">€{total.toFixed(2)}</span>
          </div>
        </div>
      </div>

      {/* Pickup Details */}
      <div className="px-6 pb-8">
        <div className="flex items-center gap-2 mb-4">
           <div className="h-1 w-8 bg-emerald-600 rounded-full"></div>
           <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Pickup Logistics</p>
        </div>
        
        <div className="bg-card rounded-[32px] p-6 shadow-sm border border-border/50 space-y-6">
          <div className="flex items-start gap-4 group">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2.5 rounded-2xl group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
               <MapPin className="w-5 h-5 text-emerald-600 dark:text-emerald-400 group-hover:text-white" />
            </div>
            <div className="flex-1 border-b border-border/30 pb-4">
              <p className="font-black text-foreground text-sm uppercase tracking-tight mb-1">Pickup Location</p>
              <p className="text-xs text-muted-foreground font-medium leading-relaxed">
                HalalHouse Tánger<br />
                Calle Principal 123<br />
                90000 Tánger, Morocco
              </p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="bg-blue-100 dark:bg-blue-900/30 p-2.5 rounded-2xl group-hover:bg-blue-500 group-hover:text-white transition-colors duration-300">
               <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 group-hover:text-white" />
            </div>
            <div className="flex-1 border-b border-border/30 pb-4">
              <p className="font-black text-foreground text-sm uppercase tracking-tight mb-1">Estimated Time</p>
              <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">ASAP (20 minutes)</p>
            </div>
          </div>

          <div className="flex items-start gap-4 group">
            <div className="bg-purple-100 dark:bg-purple-900/30 p-2.5 rounded-2xl group-hover:bg-purple-500 group-hover:text-white transition-colors duration-300">
               <CreditCard className="w-5 h-5 text-purple-600 dark:text-purple-400 group-hover:text-white" />
            </div>
            <div className="flex-1">
              <p className="font-black text-foreground text-sm uppercase tracking-tight mb-1">Payment Method</p>
              <p className="text-xs text-muted-foreground font-bold tracking-widest uppercase">Pay in store</p>
              <p className="text-[10px] text-emerald-600 dark:text-emerald-500 font-medium mt-1">✓ Safe & Secure</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="px-6 pb-8">
        <div className="flex items-center gap-2 mb-4">
           <div className="h-1 w-8 bg-emerald-600 rounded-full"></div>
           <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Customer Profile</p>
        </div>
        <div className="bg-card rounded-[32px] p-6 shadow-sm border border-border/50 flex items-center justify-between">
          <div>
            <p className="font-black text-foreground text-base tracking-tight">{currentUser.name}</p>
            <p className="text-xs text-muted-foreground font-medium mt-1">{currentUser.phone}</p>
          </div>
          <div className="bg-emerald-50 dark:bg-emerald-950 p-2 rounded-full">
             <ShieldCheck className="w-5 h-5 text-emerald-600" />
          </div>
        </div>
      </div>

      {/* Bottom Total and Confirm */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 dark:bg-neutral-900/80 backdrop-blur-2xl border-t border-border shadow-2xl px-8 py-6 z-30 rounded-t-[40px] transition-all duration-300">
        <div className="flex items-center justify-between mb-4">
          <div>
            <span className="block font-black text-foreground text-lg tracking-tighter">Total to Pay</span>
            <span className="block text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Collected at counter</span>
          </div>
          <span className="font-black text-3xl text-emerald-600 dark:text-emerald-400 tracking-tighter">€{total.toFixed(2)}</span>
        </div>
        <Button
          onClick={handleConfirmOrder}
          className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-lg font-black rounded-[24px] shadow-xl shadow-emerald-900/20 active:scale-95 transition-all flex items-center justify-center gap-3"
        >
          CONFIRM ORDER
          <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
             <ShieldCheck className="w-5 h-5 text-white" />
          </div>
        </Button>
      </div>
    </div>
  );
}
