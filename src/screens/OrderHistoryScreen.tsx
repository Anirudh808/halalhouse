
import { ArrowLeft, Clock, Package, CheckCircle2, MapPin } from 'lucide-react';
import { mockOrders, restaurantProducts } from '../data/mockData';
import { Badge } from '../components/ui/badge';

const statusConfig = {
  new: { label: 'New', color: 'bg-blue-100 text-blue-700', icon: Package },
  preparing: { label: 'Preparing', color: 'bg-yellow-100 text-yellow-700', icon: Clock },
  ready: { label: 'Ready for Pickup', color: 'bg-emerald-100 text-emerald-700', icon: CheckCircle2 },
  completed: { label: 'Completed', color: 'bg-gray-100 text-gray-700', icon: CheckCircle2 },
};

export function OrderHistoryScreen() {
  const navigate = (path: string) => console.log('navigate', path);

  const getProductName = (productId: string) => {
    const product = restaurantProducts.find((p) => p.id === productId);
    return product?.name || 'Product';
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">My Orders</h1>
        </div>
      </div>

      {/* Orders List */}
      <div className="px-6 py-6 space-y-4">
        {mockOrders.length === 0 ? (
          <div className="text-center py-12">
            <div className="bg-gray-100 rounded-full p-6 w-fit mx-auto mb-4">
              <Package className="w-12 h-12 text-gray-400" />
            </div>
            <h2 className="text-xl font-bold text-gray-900 mb-2">No orders yet</h2>
            <p className="text-gray-600">Start ordering delicious halal food!</p>
          </div>
        ) : (
          mockOrders.map((order) => {
            const config = statusConfig[order.status];
            const StatusIcon = config.icon;
            const orderDate = new Date(order.createdAt);

            return (
              <div key={order.id} className="bg-white rounded-2xl shadow-md overflow-hidden">
                {/* Order Header */}
                <div className="bg-emerald-50 px-4 py-3 flex items-center justify-between">
                  <div>
                    <p className="font-bold text-gray-900">{order.id}</p>
                    <p className="text-xs text-gray-600">
                      {orderDate.toLocaleDateString('en-GB', {
                        day: 'numeric',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </p>
                  </div>
                  <Badge className={config.color}>
                    <StatusIcon className="w-3 h-3 mr-1" />
                    {config.label}
                  </Badge>
                </div>

                {/* Order Items */}
                <div className="p-4">
                  <div className="space-y-2 mb-4">
                    {order.items.map((item, idx) => (
                      <div key={idx} className="flex justify-between text-sm">
                        <span className="text-gray-700">
                          {item.quantity}x {getProductName(item.productId)}
                        </span>
                        <span className="text-gray-900 font-medium">
                          €{(item.price * item.quantity).toFixed(2)}
                        </span>
                      </div>
                    ))}
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t">
                    <div className="flex items-center gap-2 text-sm text-gray-600">
                      <Clock className="w-4 h-4" />
                      <span>Pickup: {order.pickupTime}</span>
                    </div>
                    <p className="font-bold text-emerald-600 text-lg">
                      €{order.total.toFixed(2)}
                    </p>
                  </div>

                  {order.status === 'ready' && (
                    <div className="mt-3 bg-emerald-50 rounded-lg p-3 flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div className="text-sm">
                        <p className="font-semibold text-emerald-700">Ready for pickup!</p>
                        <p className="text-emerald-600">HalalHouse Tánger - Calle Principal 123</p>
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
