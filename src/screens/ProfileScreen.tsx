
import { ArrowLeft, User, Bell, LogOut, ChevronRight } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function ProfileScreen() {
  const navigate = (path: string) => console.log('navigate', path);

  const handleLogout = () => {
    console.log('Logout in showcase');
  };

  return (
    <div className="min-h-screen bg-gray-50 pb-6">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4 sticky top-0 z-10 shadow-md">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Profile</h1>
        </div>
      </div>

      {/* User Info Card */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-4 mb-6">
            <div className="bg-emerald-100 rounded-full p-4">
              <User className="w-10 h-10 text-emerald-600" />
            </div>
            <div className="flex-1">
              <h2 className="text-xl font-bold text-gray-900">{currentUser.name}</h2>
              <p className="text-gray-600 text-sm">{currentUser.phone}</p>
            </div>
          </div>

          <div className="bg-emerald-50 rounded-lg p-3 flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-600">Loyalty Points</p>
              <p className="text-xl font-bold text-emerald-600">{currentUser.points}</p>
            </div>
            <button
              onClick={() => navigate('/loyalty')}
              className="text-emerald-600 hover:underline text-sm font-medium"
            >
              View Details →
            </button>
          </div>
        </div>
      </div>

      {/* Notifications */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-center gap-3 mb-4">
            <Bell className="w-5 h-5 text-emerald-600" />
            <h3 className="font-bold text-gray-900">Notifications</h3>
          </div>

          <div className="space-y-3">
            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900 text-sm">Order Ready</p>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Enabled</Badge>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Get notified when your order is ready for pickup
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900 text-sm">Promotions</p>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Enabled</Badge>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Special offers and opening promotions
                </p>
              </div>
            </div>

            <div className="flex items-start gap-3 p-3 bg-gray-50 rounded-lg">
              <div className="w-2 h-2 bg-emerald-500 rounded-full mt-2 flex-shrink-0"></div>
              <div className="flex-1">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-gray-900 text-sm">New Products</p>
                  <Badge className="bg-emerald-100 text-emerald-700 text-xs">Enabled</Badge>
                </div>
                <p className="text-xs text-gray-600 mt-1">
                  Be the first to know about new menu items
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Links */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          <button
            onClick={() => navigate('/orders')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition border-b"
          >
            <span className="font-medium text-gray-900">My Orders</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => navigate('/loyalty')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition border-b"
          >
            <span className="font-medium text-gray-900">Loyalty Rewards</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>

          <button
            onClick={() => navigate('/scan')}
            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition"
          >
            <span className="font-medium text-gray-900">Scan QR Code</span>
            <ChevronRight className="w-5 h-5 text-gray-400" />
          </button>
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-6">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full h-12 border-red-200 text-red-600 hover:bg-red-50"
        >
          <LogOut className="w-5 h-5 mr-2" />
          Logout
        </Button>
      </div>

      {/* App Info */}
      <div className="px-6 mt-6 text-center">
        <p className="text-xs text-gray-500">HalalHouse Tánger MVP v1.0</p>
        <p className="text-xs text-gray-400 mt-1">© 2026 HalalHouse. All rights reserved.</p>
      </div>
    </div>
  );
}
