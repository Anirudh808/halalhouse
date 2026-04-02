import { useState } from "react";
import { Clock, Package, CheckCircle2, User } from "lucide-react";
import { type Order, restaurantProducts } from "../data/mockData";
import { Button } from "../components/ui/button";
import { Badge } from "../components/ui/badge";

// Mock orders for staff dashboard
const initialOrders: Order[] = [
  {
    id: "ORD-1003",
    userId: "user-2",
    items: [
      { productId: "rest-1", quantity: 3, price: 8.5 },
      { productId: "rest-7", quantity: 3, price: 3.5 },
    ],
    total: 36.0,
    status: "new",
    pickupTime: "14:00",
    createdAt: "2026-04-01T13:40:00",
    type: "restaurant",
  },
  {
    id: "ORD-1004",
    userId: "user-3",
    items: [
      { productId: "rest-4", quantity: 2, price: 9.0 },
      { productId: "rest-8", quantity: 2, price: 4.5 },
    ],
    total: 27.0,
    status: "new",
    pickupTime: "14:15",
    createdAt: "2026-04-01T13:45:00",
    type: "restaurant",
  },
  {
    id: "ORD-1005",
    userId: "user-4",
    items: [
      { productId: "rest-3", quantity: 1, price: 11.5 },
      { productId: "rest-6", quantity: 1, price: 7.5 },
    ],
    total: 19.0,
    status: "preparing",
    pickupTime: "13:50",
    createdAt: "2026-04-01T13:20:00",
    type: "restaurant",
  },
  {
    id: "ORD-1006",
    userId: "user-5",
    items: [{ productId: "rest-2", quantity: 2, price: 7.5 }],
    total: 15.0,
    status: "preparing",
    pickupTime: "13:45",
    createdAt: "2026-04-01T13:15:00",
    type: "restaurant",
  },
  {
    id: "ORD-1001",
    userId: "user-1",
    items: [
      { productId: "rest-1", quantity: 2, price: 8.5 },
      { productId: "rest-7", quantity: 2, price: 3.5 },
    ],
    total: 24.0,
    status: "ready",
    pickupTime: "14:30",
    createdAt: "2026-04-01T13:15:00",
    type: "restaurant",
  },
];

function getProductName(productId: string): string {
  const product = restaurantProducts.find((p) => p.id === productId);
  return product?.name || "Product";
}

interface OrderCardProps {
  order: Order;
  onStartPreparing: (orderId: string) => void;
  onMarkReady: (orderId: string) => void;
}

// Extracted to top-level to avoid React recreation on every StaffDashboardScreen re-render
function OrderCard({ order, onStartPreparing, onMarkReady }: OrderCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-md p-4 mb-3">
      {/* Order Header */}
      <div className="flex items-center justify-between mb-3 pb-3 border-b">
        <div>
          <p className="font-bold text-gray-900 text-lg">{order.id}</p>
          <div className="flex items-center gap-2 mt-1">
            <Clock className="w-4 h-4 text-gray-500" />
            <p className="text-sm text-gray-600">Pickup: {order.pickupTime}</p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xl font-bold text-emerald-600">
            €{order.total.toFixed(2)}
          </p>
        </div>
      </div>

      {/* Order Items */}
      <div className="space-y-2 mb-3">
        {order.items.map((item, idx) => (
          <div key={idx} className="flex justify-between text-sm">
            <span className="text-gray-700 font-medium">
              {item.quantity}x {getProductName(item.productId)}
            </span>
          </div>
        ))}
      </div>

      {/* Action Buttons */}
      <div className="pt-3 border-t">
        {order.status === "new" && (
          <Button
            onClick={() => onStartPreparing(order.id)}
            className="w-full bg-yellow-500 hover:bg-yellow-600 text-white"
            size="sm"
          >
            <Package className="w-4 h-4 mr-2" />
            Start Preparing
          </Button>
        )}
        {order.status === "preparing" && (
          <Button
            onClick={() => onMarkReady(order.id)}
            className="w-full bg-emerald-600 hover:bg-emerald-700"
            size="sm"
          >
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Mark Ready
          </Button>
        )}
        {order.status === "ready" && (
          <Badge className="w-full bg-emerald-100 text-emerald-700 justify-center py-2">
            <CheckCircle2 className="w-4 h-4 mr-2" />
            Ready for Pickup
          </Badge>
        )}
      </div>
    </div>
  );
}

export function StaffDashboardScreen() {
  const [orders, setOrders] = useState<Order[]>(initialOrders);

  const handleStartPreparing = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId
          ? { ...order, status: "preparing" as const }
          : order,
      ),
    );
  };

  const handleMarkReady = (orderId: string) => {
    setOrders((prev) =>
      prev.map((order) =>
        order.id === orderId ? { ...order, status: "ready" as const } : order,
      ),
    );
  };

  const newOrders = orders.filter((o) => o.status === "new");
  const preparingOrders = orders.filter((o) => o.status === "preparing");
  const readyOrders = orders.filter((o) => o.status === "ready");

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-6 shadow-lg">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold mb-1">
                HalalHouse Staff Dashboard
              </h1>
              <p className="text-emerald-100">Order Management - Tánger</p>
            </div>
            <div className="flex items-center gap-2 bg-white/20 rounded-lg px-4 py-2">
              <User className="w-5 h-5" />
              <span className="font-medium">Staff Member</span>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="bg-white border-b px-6 py-4">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-3 gap-4">
            <div className="text-center">
              <p className="text-3xl font-bold text-blue-600">
                {newOrders.length}
              </p>
              <p className="text-sm text-gray-600">New Orders</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-yellow-600">
                {preparingOrders.length}
              </p>
              <p className="text-sm text-gray-600">Preparing</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-emerald-600">
                {readyOrders.length}
              </p>
              <p className="text-sm text-gray-600">Ready</p>
            </div>
          </div>
        </div>
      </div>

      {/* Order Board - Kanban Style */}
      <div className="px-6 py-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-6">
            {/* New Orders Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-blue-500 rounded-full p-2">
                  <Package className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  New Orders ({newOrders.length})
                </h2>
              </div>
              <div className="space-y-3">
                {newOrders.length === 0 ? (
                  <div className="bg-white rounded-xl p-6 text-center text-gray-500">
                    No new orders
                  </div>
                ) : (
                  newOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      onStartPreparing={handleStartPreparing}
                      onMarkReady={handleMarkReady}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Preparing Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-yellow-500 rounded-full p-2">
                  <Clock className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Preparing ({preparingOrders.length})
                </h2>
              </div>
              <div className="space-y-3">
                {preparingOrders.length === 0 ? (
                  <div className="bg-white rounded-xl p-6 text-center text-gray-500">
                    No orders being prepared
                  </div>
                ) : (
                  preparingOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      onStartPreparing={handleStartPreparing}
                      onMarkReady={handleMarkReady}
                    />
                  ))
                )}
              </div>
            </div>

            {/* Ready Column */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="bg-emerald-500 rounded-full p-2">
                  <CheckCircle2 className="w-5 h-5 text-white" />
                </div>
                <h2 className="text-xl font-bold text-gray-900">
                  Ready ({readyOrders.length})
                </h2>
              </div>
              <div className="space-y-3">
                {readyOrders.length === 0 ? (
                  <div className="bg-white rounded-xl p-6 text-center text-gray-500">
                    No ready orders
                  </div>
                ) : (
                  readyOrders.map((order) => (
                    <OrderCard
                      key={order.id}
                      order={order}
                      onStartPreparing={handleStartPreparing}
                      onMarkReady={handleMarkReady}
                    />
                  ))
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
