import { useState } from "react";
import { Clock, Package, CheckCircle2, AlertCircle, Sparkles, Filter } from "lucide-react";
import { type Order, restaurantProducts, mockOrders } from "../data/mockData";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

function getProductName(productId: string): string {
  const product = restaurantProducts.find((p) => p.id === productId);
  return product?.name || "Product";
}

interface OrderCardProps {
  order: Order;
  onStartPreparing: (orderId: string) => void;
  onMarkReady: (orderId: string) => void;
}

function OrderCard({ order, onStartPreparing, onMarkReady }: OrderCardProps) {
  const statusColors = {
    new: "bg-blue-600",
    preparing: "bg-yellow-500",
    ready: "bg-emerald-600 dark:bg-heading-gold",
    completed: "bg-neutral-600"
  };

  return (
    <div className="bg-card dark:bg-neutral-950 rounded-[40px] shadow-sm border border-border/50 dark:border-neutral-900 p-8 mb-6 group hover:border-emerald-500/30 dark:hover:border-heading-gold/30 transition-all duration-500 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/5 dark:bg-heading-gold/5 rounded-full -mr-16 -mt-16 blur-3xl opacity-0 group-hover:opacity-100 transition-opacity"></div>
      {/* Order Header */}
      <div className="flex items-start justify-between mb-8 pb-6 border-b border-border/30 dark:border-neutral-900">
        <div>
          <div className="flex items-center gap-3 mb-2">
             <div className={`w-3 h-3 rounded-full ${statusColors[order.status]} animate-pulse shadow-sm`}></div>
             <p className="font-black text-foreground dark:text-heading-gold text-2xl tracking-tighter uppercase italic">{order.id}</p>
          </div>
          <div className="flex items-center gap-2 opacity-60">
            <Clock className="w-4 h-4 text-muted-foreground dark:text-neutral-500" />
            <p className="text-[10px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.2em]">Expedite by {order.pickupTime}</p>
          </div>
        </div>
        <div className="text-right">
          <div className="flex items-baseline gap-1">
            <span className="text-xs font-black text-emerald-600 dark:text-heading-gold transition-colors">€</span>
            <p className="text-2xl font-black text-foreground dark:text-white tracking-tighter transition-colors">
              {order.total.toFixed(2)}
            </p>
          </div>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-4 mb-8">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center bg-muted/30 dark:bg-neutral-900 p-4 rounded-2xl border border-border/20 dark:border-neutral-800/50">
            <div className="flex items-center gap-4">
               <span className="bg-black dark:bg-heading-gold text-white dark:text-black w-8 h-8 flex items-center justify-center rounded-xl text-xs font-black shadow-lg">{item.quantity}</span>
               <span className="text-foreground dark:text-neutral-300 font-black text-sm tracking-tight uppercase">
                 {getProductName(item.productId)}
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="relative z-10">
        {order.status === "new" && (
          <Button
            onClick={() => onStartPreparing(order.id)}
            className="w-full h-16 bg-blue-600 hover:bg-blue-700 dark:bg-blue-600 dark:hover:bg-blue-500 text-white font-black rounded-2xl shadow-2xl shadow-blue-900/20 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] border-2 border-white/10"
          >
            <Package className="w-6 h-6" />
            Commence Prep
          </Button>
        )}
        {order.status === "preparing" && (
          <Button
            onClick={() => onMarkReady(order.id)}
            className="w-full h-16 bg-yellow-500 hover:bg-yellow-600 dark:bg-heading-gold dark:hover:bg-heading-gold/80 text-white dark:text-black font-black rounded-2xl shadow-2xl shadow-yellow-900/20 active:scale-95 transition-all flex items-center justify-center gap-4 uppercase tracking-[0.2em] border-2 border-white/10 dark:border-black/10"
          >
            <Clock className="w-6 h-6" />
            Set as Ready
          </Button>
        )}
        {order.status === "ready" && (
          <div className="bg-emerald-50 dark:bg-heading-gold/10 border-2 border-emerald-500/30 dark:border-heading-gold/30 rounded-2xl p-5 flex items-center justify-center gap-4 text-emerald-600 dark:text-heading-gold font-black text-[12px] uppercase tracking-[0.3em] shadow-inner italic">
            <CheckCircle2 className="w-6 h-6 animate-pulse" />
            Awaiting Collection
          </div>
        )}
      </div>
    </div>
  );
}

export function StaffDashboardScreen() {
  const [orders, setOrders] = useState<Order[]>(mockOrders);

  const handleStartPreparing = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: "preparing" as const }
          : order,
      )
    );
  };

  const handleMarkReady = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "ready" as const } : order,
      )
    );
  };

  return (
    <div className="min-h-screen bg-background transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-black text-white px-8 py-16 shadow-2xl rounded-b-[50px] transition-colors duration-500 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 dark:bg-heading-gold/5 rounded-full -mr-40 -mt-40 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-3 mb-3">
                 <Badge className="bg-white/10 dark:bg-heading-gold/20 text-white dark:text-heading-gold border border-white/20 dark:border-heading-gold/30 text-[9px] font-black uppercase tracking-[0.3em] px-3 py-1 rounded-lg backdrop-blur-md">Tactical Hub</Badge>
                 <Sparkles className="w-4 h-4 text-yellow-400 animate-pulse" />
              </div>
              <h1 className="text-5xl font-black tracking-tighter leading-none mb-2 uppercase italic transition-colors dark:text-heading-gold">
                Tánger Command
              </h1>
              <p className="text-emerald-100/70 dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.4em] font-mono opacity-80 transition-colors">Real-Time Operational Stream</p>
            </div>
            <div className="flex items-center gap-4 bg-white/5 dark:bg-neutral-900/50 backdrop-blur-2xl rounded-[30px] px-6 py-4 border border-white/10 dark:border-neutral-800 transition-all shadow-2xl">
              <div className="bg-emerald-400 dark:bg-heading-gold w-2.5 h-2.5 rounded-full animate-ping"></div>
              <span className="font-black text-xs uppercase tracking-[0.2em] transition-colors dark:text-neutral-300">Live Status</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Stats Board */}
      <div className="px-8 -mt-10 relative z-20 mb-10">
        <div className="bg-white/90 dark:bg-neutral-900/90 rounded-[45px] p-10 shadow-[0_30px_70px_rgba(0,0,0,0.2)] border border-white/10 dark:border-neutral-800 backdrop-blur-3xl transition-all">
          <div className="grid grid-cols-3 gap-10">
            <div className="text-center group cursor-default">
              <p className="text-5xl font-black text-blue-600 dark:text-blue-500 group-hover:scale-110 transition-transform tracking-tighter">
                {orders.filter(o => o.status === 'new').length}
              </p>
              <p className="text-[9px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.3em] mt-3 opacity-60">Pending</p>
            </div>
            <div className="h-16 w-px bg-border/30 dark:bg-neutral-800 mx-auto self-center"></div>
            <div className="text-center group cursor-default">
              <p className="text-5xl font-black text-yellow-500 group-hover:scale-110 transition-transform tracking-tighter">
                {orders.filter(o => o.status === 'preparing').length}
              </p>
              <p className="text-[9px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.3em] mt-3 opacity-60">Active Prep</p>
            </div>
            <div className="h-16 w-px bg-border/30 dark:bg-neutral-800 mx-auto self-center"></div>
            <div className="text-center group cursor-default">
              <p className="text-5xl font-black text-emerald-600 dark:text-heading-gold group-hover:scale-110 transition-transform tracking-tighter">
                {orders.filter(o => o.status === 'ready').length}
              </p>
              <p className="text-[9px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.3em] mt-3 opacity-60">Expedited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="px-10 flex items-center justify-between mb-10">
         <div className="flex gap-3">
            <Badge className="bg-black dark:bg-heading-gold text-white dark:text-black font-black px-6 py-2 rounded-2xl text-[9px] uppercase tracking-widest shadow-xl transition-all cursor-pointer hover:scale-105 active:scale-95">All Streams</Badge>
            <Badge variant="outline" className="text-muted-foreground dark:text-muted-foreground border-border/50 dark:border-neutral-800 font-black px-6 py-2 rounded-2xl text-[9px] uppercase tracking-widest cursor-pointer hover:bg-neutral-100 dark:hover:bg-neutral-900 transition-all active:scale-95">Fresh Hub</Badge>
         </div>
         <button className="bg-accent/50 dark:bg-neutral-900 p-3.5 rounded-2xl text-muted-foreground dark:text-neutral-500 hover:bg-black dark:hover:bg-heading-gold hover:text-white dark:hover:text-black transition-all active:scale-90 border border-border/50 dark:border-neutral-800 shadow-sm">
            <Filter className="w-6 h-6" />
         </button>
      </div>

      {/* Orders List */}
      <div className="px-8 pb-20">
        <div className="flex items-center justify-between mb-8 px-4 opacity-70">
           <div className="flex items-center gap-4">
              <div className="bg-blue-600/10 dark:bg-blue-500/10 text-blue-600 dark:text-blue-500 p-3 rounded-[18px]">
                 <AlertCircle className="w-6 h-6" />
              </div>
              <h2 className="text-sm font-black text-foreground dark:text-white uppercase tracking-[0.4em] italic transition-colors">Operational Queue</h2>
           </div>
           <p className="text-[10px] font-black text-muted-foreground dark:text-neutral-600 uppercase tracking-widest">{orders.length} Active</p>
        </div>
        
        <div className="space-y-2">
           {orders.map((order) => (
              <OrderCard 
                key={order.id} 
                order={order} 
                onStartPreparing={handleStartPreparing} 
                onMarkReady={handleMarkReady} 
              />
           ))}
        </div>

        {/* Tactical Footer Message */}
        <div className="mt-16 bg-neutral-100/50 dark:bg-neutral-950/50 rounded-[45px] p-10 border border-border/50 dark:border-neutral-900 flex items-center gap-8 shadow-inner transition-all hover:border-emerald-500/20 dark:hover:border-heading-gold/20 group">
           <div className="bg-white dark:bg-neutral-900 p-5 rounded-[22px] shadow-2xl group-hover:rotate-6 transition-transform">
              <CheckCircle2 className="w-8 h-8 text-emerald-600 dark:text-heading-gold" />
           </div>
           <div>
              <h4 className="font-black text-foreground dark:text-white text-xl tracking-tight uppercase italic mb-1 transition-colors">Blockchain integrity active</h4>
              <p className="text-xs text-muted-foreground dark:text-neutral-500 font-bold leading-relaxed transition-colors opacity-80">Operational metrics are synchronized across all nodes. Halal pedigree compliance is verified for this session.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
