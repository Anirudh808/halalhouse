import { useState } from "react";
import { Clock, Package, CheckCircle2, ChevronRight, AlertCircle, Sparkles, Filter } from "lucide-react";
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
    new: "bg-blue-500",
    preparing: "bg-yellow-500",
    ready: "bg-emerald-500",
    completed: "bg-gray-500"
  };

  return (
    <div className="bg-card rounded-[32px] shadow-sm border border-border/50 p-6 mb-4 group hover:border-emerald-500/50 transition-all duration-300">
      {/* Order Header */}
      <div className="flex items-start justify-between mb-6 pb-4 border-b border-border/50">
        <div>
          <div className="flex items-center gap-2 mb-1">
             <div className={`w-2 h-2 rounded-full ${statusColors[order.status]} animate-pulse`}></div>
             <p className="font-black text-foreground text-xl tracking-tighter">{order.id}</p>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-3.5 h-3.5 text-muted-foreground" />
            <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Pickup at {order.pickupTime}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-black text-emerald-600 dark:text-emerald-400 tracking-tighter">
            €{order.total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-3 mb-6">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between items-center bg-muted/20 dark:bg-neutral-800/20 p-3 rounded-2xl border border-border/30">
            <div className="flex items-center gap-3">
               <span className="bg-foreground text-background w-6 h-6 flex items-center justify-center rounded-lg text-[10px] font-black">{item.quantity}x</span>
               <span className="text-foreground font-black text-sm tracking-tight text-wrap max-w-[200px]">
                 {getProductName(item.productId)}
               </span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div>
        {order.status === "new" && (
          <Button
            onClick={() => onStartPreparing(order.id)}
            className="w-full h-14 bg-blue-600 hover:bg-blue-700 text-white font-black rounded-2xl shadow-lg shadow-blue-900/10 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Package className="w-5 h-5" />
            FIRE TO KITCHEN
          </Button>
        )}
        {order.status === "preparing" && (
          <Button
            onClick={() => onMarkReady(order.id)}
            className="w-full h-14 bg-yellow-500 hover:bg-yellow-600 text-white font-black rounded-2xl shadow-lg shadow-yellow-900/10 active:scale-95 transition-all flex items-center justify-center gap-3"
          >
            <Clock className="w-5 h-5" />
            SET AS READY
          </Button>
        )}
        {order.status === "ready" && (
          <div className="bg-emerald-50 dark:bg-emerald-950/30 border-2 border-emerald-500/30 rounded-2xl p-4 flex items-center justify-center gap-3 text-emerald-600 dark:text-emerald-400 font-black text-sm uppercase tracking-widest shadow-inner">
            <CheckCircle2 className="w-5 h-5" />
            READY FOR PICKUP
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
    <div className="min-h-screen bg-background transition-colors duration-300 font-outfit">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-8 py-10 shadow-2xl rounded-b-[40px] transition-colors duration-300 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex items-center justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                 <Badge className="bg-white/20 text-white border-none text-[8px] font-black uppercase tracking-widest px-2">Operational</Badge>
                 <Sparkles className="w-3 h-3 text-yellow-400" />
              </div>
              <h1 className="text-4xl font-black tracking-tight leading-none mb-1">
                Tánger Hub
              </h1>
              <p className="text-emerald-100/70 text-xs font-black uppercase tracking-widest font-mono">Live Operations Center</p>
            </div>
            <div className="flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-[22px] px-5 py-3 border border-white/10">
              <div className="bg-emerald-400 w-2 h-2 rounded-full animate-ping"></div>
              <span className="font-black text-sm uppercase tracking-tighter">Kitchen Stream</span>
            </div>
          </div>
        </div>
      </div>

      {/* Live Stats Board */}
      <div className="px-8 -mt-8 relative z-20 mb-8">
        <div className="bg-card dark:bg-neutral-900 rounded-[32px] p-8 shadow-2xl border border-border/50 backdrop-blur-xl">
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center group">
              <p className="text-4xl font-black text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">
                {orders.filter(o => o.status === 'new').length}
              </p>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-2">New Entry</p>
            </div>
            <div className="h-full w-px bg-border/50"></div>
            <div className="text-center group">
              <p className="text-4xl font-black text-yellow-500 group-hover:scale-110 transition-transform">
                {orders.filter(o => o.status === 'preparing').length}
              </p>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-2">In Flame</p>
            </div>
            <div className="h-full w-px bg-border/50"></div>
            <div className="text-center group">
              <p className="text-4xl font-black text-emerald-600 dark:text-emerald-400 group-hover:scale-110 transition-transform">
                {orders.filter(o => o.status === 'ready').length}
              </p>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest mt-2">Expedited</p>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Filters */}
      <div className="px-8 flex items-center justify-between mb-8">
         <div className="flex gap-2">
            <Badge className="bg-foreground text-background font-black px-4 py-1.5 rounded-full text-[10px] uppercase cursor-pointer">All Feed</Badge>
            <Badge variant="outline" className="text-muted-foreground border-border font-black px-4 py-1.5 rounded-full text-[10px] uppercase cursor-pointer hover:bg-muted transition-colors">Restaurant</Badge>
            <Badge variant="outline" className="text-muted-foreground border-border font-black px-4 py-1.5 rounded-full text-[10px] uppercase cursor-pointer hover:bg-muted transition-colors">Store</Badge>
         </div>
         <button className="bg-muted p-2.5 rounded-xl text-muted-foreground hover:bg-foreground hover:text-background transition-all active:scale-90">
            <Filter className="w-5 h-5" />
         </button>
      </div>

      {/* Kanban Board */}
      <div className="px-8 pb-12 space-y-10">
        <div>
          <div className="flex items-center justify-between mb-6 px-2">
             <div className="flex items-center gap-3">
                <div className="bg-blue-600 text-white p-2.5 rounded-xl shadow-lg shadow-blue-900/20">
                   <AlertCircle className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-black text-foreground tracking-tight">Active Queue</h2>
             </div>
             <ChevronRight className="w-6 h-6 text-muted-foreground opacity-30" />
          </div>
          
          <div className="space-y-4">
             {orders.map((order) => (
                <OrderCard 
                  key={order.id} 
                  order={order} 
                  onStartPreparing={handleStartPreparing} 
                  onMarkReady={handleMarkReady} 
                />
             ))}
          </div>
        </div>

        {/* System Message */}
        <div className="bg-emerald-50 dark:bg-emerald-950/20 rounded-[32px] p-8 border border-emerald-100 dark:border-emerald-900/50 flex items-center gap-6">
           <div className="bg-emerald-600 text-white p-4 rounded-2xl shadow-lg">
              <CheckCircle2 className="w-6 h-6" />
           </div>
           <div>
              <h4 className="font-black text-foreground text-lg tracking-tight">Shift Sync Active</h4>
              <p className="text-sm text-foreground/60 font-medium">All data is synchronized with the main blockchain pedigree node. Halal integrity confirmed.</p>
           </div>
        </div>
      </div>
    </div>
  );
}
