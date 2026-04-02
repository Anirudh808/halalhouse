
import { CheckCircle, Clock, MapPin } from 'lucide-react';
import { Button } from '../components/ui/button';
import { useEffect } from 'react';

export function OrderConfirmationScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const orderId = 'ORD-1001'; // Default for showcase

  useEffect(() => {
    // Add confetti effect or celebration animation here
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Success Animation */}
      <div className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <div className="bg-emerald-100 rounded-full p-6 mb-6 animate-bounce">
          <CheckCircle className="w-20 h-20 text-emerald-600" />
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-2">Order Confirmed!</h1>
        <p className="text-gray-600 mb-6">
          Your order has been successfully placed
        </p>

        {/* Order Details Card */}
        <div className="w-full max-w-md bg-white rounded-2xl shadow-lg p-6 mb-6">
          <div className="text-center mb-6 pb-6 border-b">
            <p className="text-sm text-gray-600 mb-1">Order Number</p>
            <p className="text-2xl font-bold text-emerald-600">{orderId}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 rounded-full p-2">
                <Clock className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Estimated Pickup</p>
                <p className="text-sm text-gray-600">20 minutes</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="bg-emerald-100 rounded-full p-2">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <div className="flex-1 text-left">
                <p className="font-medium text-gray-900">Pickup Location</p>
                <p className="text-sm text-gray-600">
                  HalalHouse Tánger<br />
                  Calle Principal 123
                </p>
              </div>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t">
            <div className="bg-yellow-50 rounded-lg p-3 text-left">
              <p className="text-sm text-yellow-800">
                <span className="font-semibold">✨ You earned 20 points!</span><br />
                You now have {120 + 20} loyalty points.
              </p>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        <div className="bg-emerald-600 text-white px-6 py-3 rounded-full mb-6">
          <p className="font-semibold">Status: Preparing your order 👨‍🍳</p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 space-y-3">
        <Button
          onClick={() => navigate('/orders')}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700"
        >
          Go to My Orders
        </Button>
        <Button
          onClick={() => navigate('/home')}
          variant="outline"
          className="w-full h-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
        >
          Back to Home
        </Button>
      </div>
    </div>
  );
}
