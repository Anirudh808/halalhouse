import {
  ArrowLeft,
  Clock,
  Package,
  CheckCircle2,
  MapPin,
  Receipt,
  Calendar,
} from "lucide-react";
import { mockOrders, restaurantProducts } from "../data/mockData";
import { Badge } from "../components/ui/badge";

const statusConfig = {
  new: {
    label: "Initiated",
    color: "bg-blue-500/10 text-blue-400 border border-blue-500/20",
    icon: Package,
  },
  preparing: {
    label: "In Synthesis",
    color: "bg-yellow-500/10 text-yellow-500 border border-yellow-500/20",
    icon: Clock,
  },
  ready: {
    label: "Ready for Pickup",
    color: "bg-emerald-500/10 text-heading-gold border border-heading-gold/30",
    icon: CheckCircle2,
  },
  completed: {
    label: "Fulfilled",
    color: "bg-neutral-800 text-neutral-400 border border-neutral-700",
    icon: CheckCircle2,
  },
};

export function OrderHistoryScreen() {
  const navigate = (path: string) => console.log("navigate", path);

  const getProductName = (productId: string) => {
    const product = restaurantProducts.find((p) => p.id === productId);
    return product?.name || "Product Unit";
  };

  return (
    <div className="min-h-screen bg-background pb-12 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-8 sticky top-0 z-30 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500 rounded-b-[40px]">
        <div className="flex items-center gap-4">
          <button
            onClick={() => navigate("/home")}
            className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase">
              Ledger
            </h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">
              Historical Order Stream
            </p>
          </div>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-6 py-10 space-y-8">
        {mockOrders.length === 0 ? (
          <div className="text-center py-24 animate-in fade-in zoom-in duration-700">
            <div className="relative mb-12 mx-auto w-fit">
              <div className="absolute inset-0 bg-heading-gold/5 blur-[100px] rounded-full scale-150 animate-pulse"></div>
              <div className="bg-card dark:bg-neutral-950 rounded-[50px] p-16 shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-border/50 dark:border-neutral-900 relative z-10 transition-transform hover:scale-105 duration-700">
                <Receipt className="w-24 h-24 text-muted-foreground/20 dark:text-heading-gold/10 drop-shadow-2xl" />
              </div>
            </div>
            <h2 className="text-3xl font-black text-foreground dark:text-white mb-4 tracking-tighter uppercase transition-colors">
              No records found
            </h2>
            <p className="text-muted-foreground dark:text-muted-foreground font-bold mb-12 max-w-xs mx-auto italic uppercase text-[10px] tracking-widest opacity-80 leading-relaxed">
              Your future culinary activations will be archived here in the
              secure ledger.
            </p>
          </div>
        ) : (
          mockOrders.map((order) => {
            const config =
              statusConfig[order.status as keyof typeof statusConfig];
            const StatusIcon = config.icon;
            const orderDate = new Date(order.createdAt);

            return (
              <div
                key={order.id}
                className="bg-card dark:bg-neutral-950 rounded-[40px] shadow-sm border border-border/50 dark:border-neutral-900 overflow-hidden hover:shadow-2xl transition-all duration-500 group active:scale-[0.98]"
              >
                {/* Order Header */}
                <div className="bg-accent/30 dark:bg-neutral-900 px-8 py-6 border-b border-border/30 dark:border-neutral-900 transition-colors">
                  {/* Row 1: Order ID + Date */}
                  <div className="flex items-center gap-6 mb-3">
                    <div className="bg-white dark:bg-neutral-950 p-3 rounded-2xl shadow-xl border border-border/5 dark:border-neutral-800 transition-colors">
                      <Receipt className="w-5 h-5 text-emerald-600 dark:text-heading-gold animate-pulse" />
                    </div>
                    <p className="font-black text-foreground dark:text-white text-base tracking-tighter uppercase leading-none transition-colors">
                      {order.id}
                    </p>
                    <div className="flex items-center gap-2 opacity-60">
                      <Calendar className="w-3.5 h-3.5 text-muted-foreground dark:text-heading-gold" />
                      <p className="text-[10px] text-muted-foreground dark:text-muted-foreground font-black tracking-widest uppercase transition-colors">
                        {orderDate
                          .toLocaleDateString("en-GB", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })
                          .toUpperCase()}
                      </p>
                    </div>
                  </div>

                  {/* Row 2: Badge right-aligned */}
                  <div className="flex justify-end">
                    <Badge
                      className={`${config.color} border-none font-black text-[9px] py-2 px-4 rounded-xl uppercase tracking-[0.2em] shadow-sm transition-all group-hover:scale-105`}
                    >
                      <StatusIcon className="w-3.5 h-3.5 mr-2" />
                      {config.label}
                    </Badge>
                  </div>
                </div>
                {/* Order Items */}
                <div className="p-8">
                  <div className="space-y-4 mb-8">
                    {order.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex justify-between text-sm transition-all duration-300"
                      >
                        <span className="text-foreground/80 dark:text-neutral-300 font-bold flex items-center gap-4 transition-colors">
                          <span className="bg-accent/50 dark:bg-neutral-900 text-foreground dark:text-heading-gold w-8 h-8 flex items-center justify-center rounded-xl font-black text-[11px] border border-border/5 dark:border-neutral-800 italic transition-colors shadow-inner">
                            {item.quantity}
                          </span>
                          <span className="uppercase tracking-tight italic opacity-90">
                            {getProductName(item.productId)}
                          </span>
                        </span>
                        <span className="text-foreground dark:text-white font-black tracking-tighter text-base italic transition-colors">
                          €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-8 border-t border-dashed border-border/30 dark:border-neutral-900 opacity-80">
                    <div className="flex items-center gap-3 text-[10px] font-black text-muted-foreground dark:text-muted-foreground uppercase tracking-[0.3em] bg-accent/30 dark:bg-neutral-900/50 px-5 py-2.5 rounded-2xl italic transition-colors">
                      <Clock className="w-4 h-4 text-heading-gold" />
                      <span>{order.pickupTime}</span>
                    </div>
                    <div className="text-right">
                      <p className="text-[9px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.3em] mb-1">
                        Settlement Total
                      </p>
                      <p className="font-black text-emerald-600 dark:text-heading-gold text-2xl tracking-tighter transition-colors">
                        €{order.total.toFixed(2)}
                      </p>
                    </div>
                  </div>

                  {order.status === "ready" && (
                    <div className="mt-8 bg-black dark:bg-heading-gold rounded-[30px] p-6 flex items-start gap-5 shadow-2xl animate-in slide-in-from-top-4 duration-700 border-2 border-white/5 dark:border-black/10">
                      <div className="bg-white/10 dark:bg-black/10 p-3 rounded-2xl">
                        <MapPin className="w-7 h-7 text-white dark:text-black" />
                      </div>
                      <div className="text-sm">
                        <p className="font-black text-white dark:text-black uppercase tracking-[0.3em] text-[10px] mb-1">
                          Ready for pickup!
                        </p>
                        <p className="text-emerald-100 dark:text-black/70 font-bold text-xs leading-relaxed opacity-90 uppercase tracking-widest">
                          HalalHouse Tánger Hub Node
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
