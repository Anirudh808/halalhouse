
import { Utensils, ShoppingBag, QrCode, Award, User } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { packed } from '../data/images';

export function HomeScreen() {
  const navigate = (path: string) => console.log('Showcase navigate to', path);

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-6 rounded-b-3xl shadow-lg">
        <div className="flex items-center justify-between mb-4">
          <div>
            <h1 className="text-2xl font-bold">HalalHouse</h1>
            <p className="text-emerald-100 text-sm">Tánger</p>
          </div>
          <button
            onClick={() => navigate('/profile')}
            className="bg-white/20 rounded-full p-2 hover:bg-white/30 transition"
          >
            <User className="w-6 h-6" />
          </button>
        </div>

        {/* Loyalty Points */}
        <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-yellow-400 rounded-full p-2">
              <Award className="w-5 h-5 text-yellow-900" />
            </div>
            <div>
              <p className="text-emerald-100 text-xs">Your Points</p>
              <p className="text-white font-bold text-xl">{currentUser.points}</p>
            </div>
          </div>
          <button
            onClick={() => navigate('/loyalty')}
            className="text-white text-sm font-medium hover:underline"
          >
            View Details →
          </button>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-6 mt-6">
        <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl overflow-hidden shadow-lg">
          <div className="p-6">
            <h2 className="text-white text-xl font-bold mb-1">Grand Opening!</h2>
            <p className="text-white/90 text-sm mb-3">
              🎉 Get 50 bonus points on your first order
            </p>
            <div className="bg-white text-emerald-600 text-xs font-semibold px-3 py-1 rounded-full inline-block">
              Limited Time
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="px-6 mt-8">
        <h3 className="text-gray-900 font-semibold text-lg mb-4">What would you like to do?</h3>
        
        <div className="space-y-4">
          {/* Eat it Fresh */}
          <button
            onClick={() => navigate('/restaurant')}
            className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group"
          >
            <div className="flex items-center">
              <div className="relative w-28 h-28 flex-shrink-0">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
                  alt="Fresh food"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 px-4 py-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-gray-900">Order Food</h4>
                </div>
                <p className="text-gray-600 text-sm">Eat it fresh</p>
                <p className="text-emerald-600 text-xs mt-1 font-medium">Pickup only</p>
              </div>
              <div className="pr-4">
                <div className="text-emerald-600 group-hover:translate-x-1 transition">→</div>
              </div>
            </div>
          </button>

          {/* Buy it Packaged */}
          <button
            onClick={() => navigate('/store')}
            className="w-full bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group"
          >
            <div className="flex items-center">
              <div className="relative w-28 h-28 flex-shrink-0">
                <ImageWithFallback
                  src={packed}
                  alt="Packaged products"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 px-4 py-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingBag className="w-5 h-5 text-emerald-600" />
                  <h4 className="font-bold text-gray-900">Shop Products</h4>
                </div>
                <p className="text-gray-600 text-sm">Buy it packaged</p>
                <p className="text-emerald-600 text-xs mt-1 font-medium">Take it home</p>
              </div>
              <div className="pr-4">
                <div className="text-emerald-600 group-hover:translate-x-1 transition">→</div>
              </div>
            </div>
          </button>

          {/* Verify it Halal */}
          <button
            onClick={() => navigate('/scan')}
            className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition group"
          >
            <div className="flex items-center">
              <div className="relative w-28 h-28 flex-shrink-0 bg-white/10 flex items-center justify-center">
                <QrCode className="w-14 h-14 text-white" />
              </div>
              <div className="flex-1 px-4 py-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-bold text-white">Scan & Verify</h4>
                </div>
                <p className="text-white/90 text-sm">Verify it halal</p>
                <p className="text-yellow-300 text-xs mt-1 font-medium">✓ Premium verification</p>
              </div>
              <div className="pr-4">
                <div className="text-white group-hover:translate-x-1 transition">→</div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-6 mt-8">
        <h3 className="text-gray-900 font-semibold text-lg mb-4">Quick Access</h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/orders')}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="bg-emerald-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <Utensils className="w-6 h-6 text-emerald-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">My Orders</p>
          </button>

          <button
            onClick={() => navigate('/loyalty')}
            className="bg-white rounded-xl p-4 shadow-md hover:shadow-lg transition text-center"
          >
            <div className="bg-yellow-100 rounded-full w-12 h-12 flex items-center justify-center mx-auto mb-2">
              <Award className="w-6 h-6 text-yellow-600" />
            </div>
            <p className="text-sm font-medium text-gray-900">Rewards</p>
          </button>
        </div>
      </div>
    </div>
  );
}
