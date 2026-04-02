import { useState } from 'react';

import { ArrowLeft, Minus, Plus, Trash2, Clock } from 'lucide-react';
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
      <div className="min-h-screen bg-gray-50 flex flex-col">
        <div className="bg-emerald-600 text-white px-6 py-4">
          <div className="flex items-center gap-3">
            <button onClick={() => navigate('/restaurant')} className="hover:bg-white/10 rounded-full p-2">
              <ArrowLeft className="w-6 h-6" />
            </button>
            <h1 className="text-xl font-bold">Your Cart</h1>
          </div>
        </div>
        <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
          <div className="bg-gray-100 rounded-full p-6 mb-4">
            <Trash2 className="w-12 h-12 text-gray-400" />
          </div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Your cart is empty</h2>
          <p className="text-gray-600 mb-6">Add some delicious items to get started!</p>
          <Button
            onClick={() => navigate('/restaurant')}
            className="bg-emerald-600 hover:bg-emerald-700"
          >
            Browse Menu
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-32">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/restaurant')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Your Cart</h1>
        </div>
      </div>

      {/* Cart Items */}
      <div className="px-6 py-6 space-y-3">
        {restaurantCart.map((item) => (
          <div key={item.product.id} className="bg-white rounded-2xl p-4 shadow-md">
            <div className="flex items-start gap-3">
              <div className="flex-1">
                <h3 className="font-bold text-gray-900 mb-1">{item.product.name}</h3>
                <p className="text-gray-600 text-sm mb-2">
                  €{item.product.price.toFixed(2)} each
                </p>
                <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2 bg-gray-100 rounded-lg">
                    <button
                      onClick={() =>
                        updateRestaurantQuantity(item.product.id, item.quantity - 1)
                      }
                      className="p-2 hover:bg-gray-200 rounded-l-lg transition"
                    >
                      <Minus className="w-4 h-4 text-gray-700" />
                    </button>
                    <span className="font-semibold text-gray-900 min-w-[2rem] text-center">
                      {item.quantity}
                    </span>
                    <button
                      onClick={() =>
                        updateRestaurantQuantity(item.product.id, item.quantity + 1)
                      }
                      className="p-2 hover:bg-gray-200 rounded-r-lg transition"
                    >
                      <Plus className="w-4 h-4 text-gray-700" />
                    </button>
                  </div>
                  <button
                    onClick={() => removeFromRestaurantCart(item.product.id)}
                    className="text-red-500 hover:text-red-600 p-2"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
              <div className="text-right">
                <p className="font-bold text-gray-900">
                  €{(item.product.price * item.quantity).toFixed(2)}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Pickup Time */}
      <div className="px-6 py-4">
        <div className="bg-white rounded-2xl p-4 shadow-md">
          <div className="flex items-center gap-2 mb-3">
            <Clock className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-gray-900">Pickup Time</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {pickupOptions.map((option) => (
              <button
                key={option}
                onClick={() => setPickupTime(option)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition ${
                  pickupTime === option
                    ? 'bg-emerald-600 text-white'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Summary */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-4">
        <div className="flex items-center justify-between mb-3">
          <span className="text-gray-600">Subtotal</span>
          <span className="font-bold text-gray-900">€{total.toFixed(2)}</span>
        </div>
        <div className="flex items-center justify-between mb-4 pb-4 border-b">
          <span className="text-gray-600">Service fee</span>
          <span className="font-bold text-gray-900">€0.00</span>
        </div>
        <div className="flex items-center justify-between mb-4">
          <span className="font-bold text-lg">Total</span>
          <span className="font-bold text-2xl text-emerald-600">€{total.toFixed(2)}</span>
        </div>
        <Button
          onClick={() => navigate('/checkout')}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-base"
        >
          Proceed to Checkout
        </Button>
      </div>
    </div>
  );
}
