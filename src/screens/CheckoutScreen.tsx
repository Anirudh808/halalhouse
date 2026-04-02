
import { ArrowLeft, MapPin, Clock, CreditCard } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/cart')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Checkout</h1>
        </div>
      </div>

      {/* Order Summary */}
      <div className="px-6 py-6">
        <h2 className="font-bold text-gray-900 mb-4">Order Summary</h2>
        <div className="bg-white rounded-2xl p-4 shadow-md space-y-3">
          {restaurantCart.map((item) => (
            <div key={item.product.id} className="flex justify-between items-start">
              <div className="flex-1">
                <p className="font-medium text-gray-900">{item.product.name}</p>
                <p className="text-sm text-gray-600">Qty: {item.quantity}</p>
              </div>
              <p className="font-bold text-gray-900">
                €{(item.product.price * item.quantity).toFixed(2)}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Pickup Details */}
      <div className="px-6 pb-6">
        <h2 className="font-bold text-gray-900 mb-4">Pickup Details</h2>
        
        <div className="bg-white rounded-2xl p-4 shadow-md space-y-4">
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Pickup Location</p>
              <p className="text-sm text-gray-600 mt-1">
                HalalHouse Tánger<br />
                Calle Principal 123<br />
                90000 Tánger, Morocco
              </p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <Clock className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Estimated Pickup Time</p>
              <p className="text-sm text-gray-600 mt-1">ASAP (20 minutes)</p>
            </div>
          </div>

          <div className="flex items-start gap-3">
            <CreditCard className="w-5 h-5 text-emerald-600 flex-shrink-0 mt-1" />
            <div>
              <p className="font-medium text-gray-900">Payment Method</p>
              <p className="text-sm text-gray-600 mt-1">Pay in store</p>
            </div>
          </div>
        </div>
      </div>

      {/* Customer Info */}
      <div className="px-6 pb-6">
        <h2 className="font-bold text-gray-900 mb-4">Your Information</h2>
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <p className="font-medium text-gray-900">{currentUser.name}</p>
          <p className="text-sm text-gray-600 mt-1">{currentUser.phone}</p>
        </div>
      </div>

      {/* Bottom Total and Confirm */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg">Total to Pay</span>
          <span className="font-bold text-2xl text-emerald-600">€{total.toFixed(2)}</span>
        </div>
        <p className="text-xs text-gray-600 mb-4 text-center">
          Payment will be collected in store at pickup
        </p>
        <Button
          onClick={handleConfirmOrder}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-base"
        >
          Confirm Order
        </Button>
      </div>
    </div>
  );
}
