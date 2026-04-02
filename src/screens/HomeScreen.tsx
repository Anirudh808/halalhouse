
import { Utensils, ShoppingBag, QrCode, Award, User } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { packed } from '../data/images';

export function HomeScreen() {
  const navigate = (path: string) => console.log('Showcase navigate to', path);

  return (
    <div className="min-h-screen bg-background pb-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-6 rounded-b-3xl shadow-lg relative overflow-hidden dark:bg-emerald-700">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h1 className="text-2xl font-bold tracking-tight">HalalHouse</h1>
              <p className="text-emerald-100 text-sm opacity-90">Tánger</p>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="bg-white/20 rounded-full p-2.5 hover:bg-white/30 transition-all duration-300 backdrop-blur-sm shadow-inner"
            >
              <User className="w-5 h-5" />
            </button>
          </div>

          {/* Loyalty Points */}
          <div className="bg-white/15 backdrop-blur-md rounded-2xl p-4 flex items-center justify-between border border-white/10 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="bg-yellow-400 rounded-full p-2 shadow-sm ring-4 ring-yellow-400/20">
                <Award className="w-5 h-5 text-yellow-900" />
              </div>
              <div>
                <p className="text-emerald-50 text-xs font-medium opacity-80 uppercase tracking-wider">Your Points</p>
                <p className="text-white font-black text-2xl tracking-tight">{currentUser.points}</p>
              </div>
            </div>
            <button
              onClick={() => navigate('/loyalty')}
              className="bg-white/20 text-white text-xs font-bold px-4 py-2 rounded-full hover:bg-white/30 transition-all duration-300 active:scale-95"
            >
              Details →
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-6 mt-6">
        <div className="relative bg-gradient-to-r from-emerald-500 to-teal-600 rounded-2xl overflow-hidden shadow-xl group">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative p-6 z-10 flex justify-between items-center">
            <div>
              <h2 className="text-white text-xl font-bold mb-1">Grand Opening!</h2>
              <p className="text-white/90 text-sm mb-3">
                🎉 Get 50 bonus points on your first order
              </p>
              <div className="bg-yellow-400 text-emerald-900 text-[10px] font-black px-2.5 py-1 rounded-full inline-block uppercase tracking-widest shadow-sm">
                Limited Time
              </div>
            </div>
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-white/30 group-hover:scale-110 transition-transform duration-500">
              <ShoppingBag className="text-white w-8 h-8" />
            </div>
          </div>
        </div>
      </div>

      {/* Three Pillars */}
      <div className="px-6 mt-8">
        <h3 className="text-foreground font-bold text-lg mb-4 flex items-center gap-2 transition-colors duration-300">
           Explore Services
           <div className="h-px flex-1 bg-border/50"></div>
        </h3>
        
        <div className="space-y-4">
          {/* Eat it Fresh */}
          <button
            onClick={() => navigate('/restaurant')}
            className="w-full bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 group active:scale-[0.98]"
          >
            <div className="flex items-center">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
                  alt="Fresh food"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              <div className="flex-1 px-4 py-4 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <Utensils className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-bold text-foreground">Order Food</h4>
                </div>
                <p className="text-muted-foreground text-xs font-medium">Eat it fresh • Pickup only</p>
              </div>
              <div className="pr-4">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <div className="text-lg">→</div>
                </div>
              </div>
            </div>
          </button>

          {/* Buy it Packaged */}
          <button
            onClick={() => navigate('/store')}
            className="w-full bg-card rounded-2xl shadow-sm border border-border/50 overflow-hidden hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 group active:scale-[0.98]"
          >
            <div className="flex items-center">
              <div className="relative w-24 h-24 flex-shrink-0 overflow-hidden">
                <ImageWithFallback
                  src={packed}
                  alt="Packaged products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent"></div>
              </div>
              <div className="flex-1 px-4 py-4 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <ShoppingBag className="w-4 h-4 text-emerald-600" />
                  <h4 className="font-bold text-foreground">Shop Products</h4>
                </div>
                <p className="text-muted-foreground text-xs font-medium">Buy it packaged • Take it home</p>
              </div>
              <div className="pr-4">
                <div className="w-8 h-8 rounded-full border border-border flex items-center justify-center text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-300">
                  <div className="text-lg">→</div>
                </div>
              </div>
            </div>
          </button>

          {/* Verify it Halal */}
          <button
            onClick={() => navigate('/scan')}
            className="w-full bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-emerald-700 dark:to-teal-900 rounded-2xl shadow-lg border border-white/10 overflow-hidden hover:shadow-xl hover:scale-[1.01] transition-all duration-300 group active:scale-[0.98]"
          >
            <div className="flex items-center">
              <div className="relative w-24 h-24 flex-shrink-0 bg-white/10 flex items-center justify-center backdrop-blur-sm">
                <QrCode className="w-10 h-10 text-white opacity-90 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 px-4 py-4 text-left">
                <div className="flex items-center gap-2 mb-0.5">
                  <h4 className="font-bold text-white tracking-wide">Scan & Verify</h4>
                </div>
                <p className="text-white/80 text-xs font-medium">Verify it halal • AI Powered</p>
                <div className="mt-2 flex items-center gap-1.5">
                   <div className="w-1.5 h-1.5 bg-yellow-400 rounded-full animate-pulse"></div>
                   <p className="text-yellow-300 text-[10px] font-bold uppercase tracking-widest">Premium Safe</p>
                </div>
              </div>
              <div className="pr-4">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center text-white transition-all duration-300 group-hover:bg-white/30">
                  <div className="text-lg">→</div>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Quick Access */}
      <div className="px-6 mt-8">
        <h3 className="text-foreground font-bold text-lg mb-4 flex items-center gap-2 transition-colors duration-300">
           Activities
           <div className="h-px flex-1 bg-border/50"></div>
        </h3>
        <div className="grid grid-cols-2 gap-4">
          <button
            onClick={() => navigate('/orders')}
            className="bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 text-center group active:scale-95"
          >
            <div className="bg-emerald-100 dark:bg-emerald-900/40 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-3 transition-colors duration-300 shadow-inner group-hover:bg-emerald-200 dark:group-hover:bg-emerald-900/60">
              <Utensils className="w-7 h-7 text-emerald-600 dark:text-emerald-400" />
            </div>
            <p className="text-sm font-bold text-foreground transition-colors duration-300 tracking-tight">My Orders</p>
          </button>

          <button
            onClick={() => navigate('/loyalty')}
            className="bg-card rounded-2xl p-5 shadow-sm border border-border/50 hover:shadow-md hover:border-emerald-500/30 transition-all duration-300 text-center group active:scale-95"
          >
            <div className="bg-yellow-50 dark:bg-yellow-900/20 rounded-2xl w-14 h-14 flex items-center justify-center mx-auto mb-3 transition-colors duration-300 shadow-inner group-hover:bg-yellow-100 dark:group-hover:bg-yellow-900/30">
              <Award className="w-7 h-7 text-yellow-600 dark:text-yellow-400" />
            </div>
            <p className="text-sm font-bold text-foreground transition-colors duration-300 tracking-tight">Rewards</p>
          </button>
        </div>
      </div>
    </div>
  );
}
