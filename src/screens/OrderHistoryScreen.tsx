
import { ArrowLeft, Clock, Package, CheckCircle2, MapPin, Receipt, Calendar } from 'lucide-react';
import { mockOrders, restaurantProducts } from '../data/mockData';
import { Badge } from '../components/ui/badge';

const statusConfig = {
  new: { label: 'New', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400', icon: Package },
  preparing: { label: 'Preparing', color: 'bg-yellow-100 text-yellow-700 dark:bg-yellow-900/30 dark:text-yellow-400', icon: Clock },
  ready: { label: 'Ready for Pickup', color: 'bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-400', icon: CheckCircle2 },
  completed: { label: 'Completed', color: 'bg-gray-100 text-gray-700 dark:bg-neutral-800 dark:text-neutral-400', icon: CheckCircle2 },
};

export function OrderHistoryScreen() {
  const navigate = (path: string) => console.log('navigate', path);

  const getProductName = (productId: string) => {
    const product = restaurantProducts.find((p) => p.id === productId);
    return product?.name || 'Product';
  };

  return (
    <div className="min-h-screen bg-background pb-6 transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 sticky top-0 z-10 shadow-lg backdrop-blur-md bg-emerald-600/90 transition-colors duration-300 rounded-b-3xl">
        <div className="flex items-center gap-3">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all shadow-inner active:scale-95"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <h1 className="text-2xl font-black tracking-tight">Order History</h1>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-6 py-8 space-y-6">
        {mockOrders.length === 0 ? (
          <div className="text-center py-20 animate-in fade-in zoom-in duration-700">
            <div className="relative mb-8 mx-auto w-fit">
              <div className="absolute inset-0 bg-emerald-500/10 blur-3xl rounded-full scale-150"></div>
              <div className="bg-card dark:bg-neutral-900 rounded-[40px] p-10 shadow-2xl border border-border/50 relative z-10">
                <Receipt className="w-20 h-20 text-emerald-600/30 dark:text-emerald-400/20" />
              </div>
            </div>
            <h2 className="text-2xl font-black text-foreground mb-3 tracking-tight">No orders yet</h2>
            <p className="text-muted-foreground font-medium mb-10 max-w-xs mx-auto italic">
              Your future delicious halal meals will appear right here!
            </p>
          </div>
        ) : (
          mockOrders.map((order) => {
            const config = statusConfig[order.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;
            const orderDate = new Date(order.createdAt);

            return (
              <div key={order.id} className="bg-card rounded-[32px] shadow-sm border border-border/50 overflow-hidden hover:shadow-md transition-all duration-300 group active:scale-[0.99]">
                {/* Order Header */}
                <div className="bg-emerald-50/50 dark:bg-emerald-950/20 px-6 py-4 flex items-center justify-between border-b border-border/50">
                  <div className="flex items-center gap-3">
                    <div className="bg-white dark:bg-neutral-800 p-2 rounded-xl shadow-sm">
                      <Receipt className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-black text-foreground text-sm tracking-tighter uppercase">{order.id}</p>
                      <div className="flex items-center gap-1 opacity-70">
                        <Calendar className="w-3 h-3 text-muted-foreground" />
                        <p className="text-[10px] text-muted-foreground font-bold tracking-widest uppercase">
                          {orderDate.toLocaleDateString('en-GB', {
                            day: 'numeric',
                            month: 'short',
                            year: 'numeric',
                          })}
                        </p>
                      </div>
                    </div>
                  </div>
                  <Badge className={`${config.color} border-none font-black text-[10px] py-1 px-3 rounded-full uppercase tracking-widest shadow-sm`}>
                    <StatusIcon className="w-3 h-3 mr-1.5" />
                    {config.label}
                  </Badge>
                </div>

                {/* Order Items */}
                <div className="p-6">
                  <div className="space-y-3 mb-6">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm group-hover:bg-accent/30 p-1.5 rounded-lg transition-colors">
                        <span className="text-foreground/80 font-medium flex items-center gap-2">
                          <span className="bg-emerald-100 dark:bg-emerald-900/40 text-emerald-700 dark:text-emerald-300 w-5 h-5 flex items-center justify-center rounded-md font-black text-[10px]">{item.quantity}</span>
                          {getProductName(item.productId)}
                        </span>
                        <span className="text-foreground font-black tracking-tighter opacity-80">
                          €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-4 border-t border-dashed border-border/50">
                    <div className="flex items-center gap-2 text-[11px] font-black text-muted-foreground uppercase tracking-widest bg-muted/30 dark:bg-neutral-800/50 px-3 py-1.5 rounded-xl">
                      <Clock className="w-3.5 h-3.5" />
                      <span>Pickup: {order.pickupTime}</span>
                    </div>
                    <div className="text-right">
                       <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-tight">Total Paid</p>
                       <p className="font-black text-emerald-600 dark:text-emerald-400 text-xl tracking-tighter">
                         €{order.total.toFixed(2)}
                       </p>
                    </div>
                  </div>

                  {order.status === 'ready' && (
                    <div className="mt-5 bg-emerald-600 dark:bg-emerald-700 rounded-[20px] p-4 flex items-start gap-3 shadow-lg shadow-emerald-900/10 animate-in slide-in-from-top-2 duration-300">
                      <div className="bg-white/20 p-2 rounded-xl">
                        <MapPin className="w-5 h-5 text-white" />
                      </div>
                      <div className="text-sm">
                        <p className="font-black text-white uppercase tracking-widest text-[10px] mb-0.5">Ready for pickup!</p>
                        <p className="text-emerald-50 font-medium text-xs leading-relaxed italic opacity-90">
                           HalalHouse Tánger • Calle Principal 123
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
