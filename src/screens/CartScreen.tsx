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
      <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
        <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 rounded-b-[40px] shadow-lg transition-colors duration-300">
          <div className="flex items-center gap-3">
            <button 
              onClick={() => navigate('/restaurant')} 
              className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <h1 className="text-2xl font-black tracking-tight">Your Cart</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-8 text-center animate-in fade-in zoom-in duration-700">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-emerald-500/10 dark:bg-emerald-500/5 blur-3xl rounded-full scale-150"></div>
            <div className="bg-card dark:bg-neutral-900 rounded-[40px] p-10 shadow-2xl border border-border/50 relative z-10">
              <ShoppingBag className="w-20 h-20 text-emerald-600/30 dark:text-emerald-400/20" />
            </div>
          </div>
          <h2 className="text-3xl font-black text-foreground mb-3 tracking-tight">Your cart is empty</h2>
          <p className="text-muted-foreground mb-10 font-medium leading-relaxed max-w-xs mx-auto">
            Hungry? Add some of our delicious halal dishes to your cart and satisfy your cravings!
          </p>
          <Button
            onClick={() => navigate('/restaurant')}
            className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 h-14 px-10 rounded-2xl text-lg font-bold shadow-xl shadow-emerald-900/20 active:scale-95 transition-all"
          >
            Start Browsing Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-40 transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 sticky top-0 z-20 shadow-lg transition-colors duration-300 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/restaurant')} 
            className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all shadow-inner"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-black tracking-tight">Your Cart</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-8 space-y-5">
        <div className="flex items-center gap-2 mb-2">
           <div className="h-1 w-8 bg-emerald-600 rounded-full"></div>
           <p className="text-xs font-black text-muted-foreground uppercase tracking-widest">Order Items</p>
        </div>
        {restaurantCart.map((item) => (
          <div key={item.product.id} className="bg-card rounded-[32px] p-5 shadow-sm border border-border/50 hover:shadow-md transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="flex-1">
                <h3 className="font-bold text-foreground text-base mb-1 tracking-tight">{item.product.name}</h3>
                <p className="text-emerald-600 dark:text-emerald-400 text-sm font-bold mb-4">
                  €{item.product.price.toFixed(2)} unit
                </p>
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-3 bg-muted/50 dark:bg-neutral-800/50 p-1 rounded-2xl border border-border/50">
                    <button
                      onClick={() =>
                        updateRestaurantQuantity(item.product.id, item.quantity - 1)
                      }
                      className="w-10 h-10 flex items-center justify-center bg-card dark:bg-neutral-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 rounded-xl transition-all shadow-sm active:scale-90"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="font-black text-foreground min-w-[1.5rem] text-center text-lg">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateRestaurantQuantity(item.product.id, item.quantity + 1)
                      }
                      className="w-10 h-10 flex items-center justify-center bg-card dark:bg-neutral-800 hover:bg-emerald-500 hover:text-white dark:hover:bg-emerald-600 rounded-xl transition-all shadow-sm active:scale-90"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromRestaurantCart(item.product.id)}
                    className="text-muted-foreground hover:text-red-500 p-2 transition-colors active:scale-90"
                  >
                    <Trash2 className="w-5 h-5 opacity-50" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-black text-foreground text-lg tracking-tighter">
                  €{(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pickup Time */}
      <div className="px-6 py-4">
        <div className="bg-card rounded-[32px] p-6 shadow-sm border border-border/50">
          <div className="flex items-center gap-3 mb-5">
            <div className="bg-emerald-100 dark:bg-emerald-900/30 p-2.5 rounded-xl">
              <Clock className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
            </div>
            <h3 className="font-black text-foreground tracking-tight text-lg">Pickup Schedule</h3>
          </div>
          <div className="flex flex-wrap gap-2.5">
            {pickupOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPickupTime(option)}
                className={`px-5 py-2.5 rounded-2xl text-xs font-bold uppercase tracking-widest transition-all duration-300 transform active:scale-95 border ${
                  pickupTime === option
                    ? 'bg-emerald-600 text-white border-emerald-500 shadow-lg shadow-emerald-600/20'
                    : 'bg-background text-muted-foreground border-border hover:bg-accent hover:text-foreground'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-card/80 dark:bg-neutral-900/80 backdrop-blur-2xl border-t border-border shadow-2xl px-8 py-6 z-30 transition-all duration-300 rounded-t-[40px]">
        <div className="space-y-3 mb-6">
          <div className="flex items-center justify-between">
            <span className="text-muted-foreground font-bold uppercase tracking-tighter text-sm">Subtotal</span>
            <span className="font-black text-foreground text-lg tracking-tighter">€{total.toFixed(2)}</span>
          </div>
          <div className="flex items-center justify-between pb-4 border-b border-border/50">
            <span className="text-muted-foreground font-bold uppercase tracking-tighter text-sm">Service fee</span>
            <span className="font-black text-emerald-600 dark:text-emerald-400 text-sm italic tracking-widest uppercase">Free</span>
          </div>
          <div className="flex items-center justify-between pt-2">
            <div>
               <span className="block font-black text-foreground text-xl tracking-tighter">Total Price</span>
               <span className="block text-[10px] text-muted-foreground font-bold uppercase tracking-widest">Incl. VAT</span>
            </div>
            <div className="text-right">
               <span className="block font-black text-3xl text-emerald-600 dark:text-emerald-400 tracking-tighter">€{total.toFixed(2)}</span>
            </div>
          </div>
        </div>
        <Button
          onClick={() => navigate('/checkout')}
          className="w-full h-16 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-lg font-black rounded-[24px] shadow-xl shadow-emerald-900/20 active:scale-95 transition-all group"
        >
          <span className="flex items-center gap-2">
            PROCEED TO CHECKOUT
            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-2 transition-transform">
               <ArrowLeft className="w-5 h-5 rotate-180" />
            </div>
          </span>
        </Button>
      </div>
    </div>
  );
}
