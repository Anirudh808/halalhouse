
import { Utensils, ShoppingBag, QrCode, Award, User, ChevronRight } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';
import { packed } from '../data/images';

export function HomeScreen() {
  const navigate = (path: string) => console.log('Showcase navigate to', path);

  return (
    <div className="min-h-screen bg-background pb-20 transition-colors duration-300">
      {/* Header */}
      <div className="bg-emerald-600 dark:bg-black text-white px-6 py-10 rounded-b-[40px] shadow-2xl relative overflow-hidden transition-colors duration-500">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/5 dark:bg-heading-gold/5 rounded-full -mr-32 -mt-32 blur-3xl"></div>
        <div className="relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h1 className="text-4xl font-black tracking-tight dark:text-heading-gold transition-colors duration-300">HalalHouse</h1>
              <p className="text-emerald-100 dark:text-muted-foreground text-xs font-bold uppercase tracking-[0.2em] mt-1 transition-colors duration-300">Tánger Operations</p>
            </div>
            <button
              onClick={() => navigate('/profile')}
              className="bg-white/10 dark:bg-neutral-900 border border-white/20 dark:border-neutral-800 rounded-2xl p-3 hover:scale-110 transition-all duration-300 backdrop-blur-md shadow-xl"
            >
              <User className="w-6 h-6 text-white dark:text-heading-gold" />
            </button>
          </div>

          {/* Loyalty Points Card */}
          <div className="bg-white/10 dark:bg-neutral-900/50 backdrop-blur-xl rounded-[32px] p-6 flex items-center justify-between border border-white/10 dark:border-neutral-800 shadow-2xl transition-all duration-500">
            <div className="flex items-center gap-4">
              <div className="bg-heading-gold rounded-2xl p-3 shadow-lg shadow-heading-gold/20 rotate-3 group-hover:rotate-0 transition-transform">
                <Award className="w-6 h-6 text-black" />
              </div>
              <div>
                <p className="text-emerald-50 dark:text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-80 mb-1">Membership Points</p>
                <div className="flex items-baseline gap-1">
                  <p className="text-white dark:text-white font-black text-3xl tracking-tighter">{currentUser.points}</p>
                  <span className="text-xs font-bold text-white/50 dark:text-muted-foreground">PTS</span>
                </div>
              </div>
            </div>
            <button
              onClick={() => navigate('/loyalty')}
              className="bg-white dark:bg-heading-gold text-emerald-600 dark:text-black text-[8px] font-black px-4 py-2 rounded-full hover:scale-105 transition-all duration-300 active:scale-95 shadow-lg uppercase tracking-widest"
            >
              Transfer →
            </button>
          </div>
        </div>
      </div>

      {/* Promotional Banner */}
      <div className="px-6 mt-8">
        <div className="relative bg-gradient-to-br from-emerald-500 to-teal-700 dark:from-neutral-900 dark:to-black rounded-[35px] overflow-hidden shadow-2xl group border border-white/5 dark:border-neutral-800 transition-all duration-500">
          <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 dark:opacity-20 translate-z-0"></div>
          <div className="relative p-8 z-10 flex justify-between items-center">
            <div className="max-w-[70%]">
              <h2 className="text-white dark:text-heading-gold text-2xl font-black mb-2 tracking-tight transition-colors">Grand Opening!</h2>
              <p className="text-white/80 dark:text-muted-foreground text-sm mb-4 leading-relaxed font-medium">
                Unlock exclusive rewards with your first Tánger Hub order.
              </p>
              <div className="bg-yellow-400 dark:bg-heading-gold text-black text-[9px] font-black px-3 py-1.5 rounded-full inline-block uppercase tracking-[0.2em] shadow-xl">
                Claim 50 Bonus
              </div>
            </div>
            <div className="w-20 h-20 bg-white/10 dark:bg-heading-gold/10 rounded-3xl flex items-center justify-center backdrop-blur-md border border-white/20 dark:border-heading-gold/20 group-hover:rotate-12 transition-all duration-500 shadow-inner">
              <ShoppingBag className="text-white dark:text-heading-gold w-10 h-10" />
            </div>
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="px-6 mt-10">
        <h3 className="text-foreground dark:text-heading-gold font-black text-sm uppercase tracking-[0.3em] mb-6 flex items-center gap-3 opacity-60">
           The Pillars
           <div className="h-px flex-1 bg-border/50 dark:bg-neutral-800"></div>
        </h3>
        
        <div className="grid grid-cols-1 gap-5">
          {/* Eat it Fresh */}
          <button
            onClick={() => navigate('/restaurant')}
            className="w-full bg-card dark:bg-neutral-950 rounded-[35px] shadow-sm border border-border/50 dark:border-neutral-900 overflow-hidden hover:border-emerald-500/30 dark:hover:border-heading-gold/30 transition-all duration-300 group active:scale-[0.98]"
          >
            <div className="flex items-center p-2">
              <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-[30px] shadow-xl">
                <ImageWithFallback
                  src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&q=80"
                  alt="Fresh food"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 px-6 py-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <Utensils className="w-4 h-4 text-emerald-600 dark:text-heading-gold transition-colors" />
                  <h4 className="font-black text-foreground dark:text-white uppercase tracking-tight text-lg">Fresh Hub</h4>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground text-xs font-bold uppercase tracking-wider">Restaurant • Pickup</p>
              </div>
              <div className="pr-6">
                <div className="w-10 h-10 rounded-2xl border border-border dark:border-neutral-800 flex items-center justify-center text-emerald-600 dark:text-heading-gold group-hover:bg-emerald-600 dark:group-hover:bg-heading-gold group-hover:text-white dark:group-hover:text-black transition-all duration-500 shadow-sm">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </button>

          {/* Buy it Packaged */}
          <button
            onClick={() => navigate('/store')}
            className="w-full bg-card dark:bg-neutral-950 rounded-[35px] shadow-sm border border-border/50 dark:border-neutral-900 overflow-hidden hover:border-emerald-500/30 dark:hover:border-heading-gold/30 transition-all duration-300 group active:scale-[0.98]"
          >
            <div className="flex items-center p-2">
              <div className="relative w-28 h-28 flex-shrink-0 overflow-hidden rounded-[30px] shadow-xl">
                <ImageWithFallback
                  src={packed}
                  alt="Packaged products"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
              </div>
              <div className="flex-1 px-6 py-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <ShoppingBag className="w-4 h-4 text-emerald-600 dark:text-heading-gold transition-colors" />
                  <h4 className="font-black text-foreground dark:text-white uppercase tracking-tight text-lg">Market Hub</h4>
                </div>
                <p className="text-muted-foreground dark:text-muted-foreground text-xs font-bold uppercase tracking-wider">Packaged • Take-Home</p>
              </div>
              <div className="pr-6">
                <div className="w-10 h-10 rounded-2xl border border-border dark:border-neutral-800 flex items-center justify-center text-emerald-600 dark:text-heading-gold group-hover:bg-emerald-600 dark:group-hover:bg-heading-gold group-hover:text-white dark:group-hover:text-black transition-all duration-500 shadow-sm">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </button>

          {/* Verify it Halal */}
          <button
            onClick={() => navigate('/scan')}
            className="w-full bg-gradient-to-br from-emerald-600 to-teal-700 dark:from-neutral-900 dark:to-black rounded-[35px] shadow-2xl border border-white/5 dark:border-neutral-800 overflow-hidden hover:scale-[1.02] transition-all duration-500 group active:scale-[0.98]"
          >
            <div className="flex items-center p-2">
              <div className="relative w-28 h-28 flex-shrink-0 bg-white/10 dark:bg-heading-gold/5 flex items-center justify-center backdrop-blur-md rounded-[30px] shadow-inner overflow-hidden">
                <div className="absolute inset-x-0 top-0 h-1 bg-white/20 dark:bg-heading-gold/30 animate-scan-line"></div>
                <QrCode className="w-12 h-12 text-white dark:text-heading-gold opacity-90 group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="flex-1 px-6 py-4 text-left">
                <div className="flex items-center gap-2 mb-1">
                  <h4 className="font-black text-white dark:text-heading-gold uppercase tracking-widest text-lg">Verify Hub</h4>
                </div>
                <p className="text-white/70 dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] transition-colors leading-tight">AI Powered Halal Integrity Scan</p>
                <div className="mt-2 flex items-center gap-2">
                   <div className="w-2 h-2 bg-yellow-400 dark:bg-heading-gold rounded-full animate-ping"></div>
                   <p className="text-yellow-300 dark:text-heading-gold text-[8px] font-black uppercase tracking-[0.3em]">System Online</p>
                </div>
              </div>
              <div className="pr-6">
                <div className="w-10 h-10 rounded-2xl bg-white/10 dark:bg-heading-gold/10 flex items-center justify-center text-white dark:text-heading-gold transition-all duration-500 group-hover:bg-white/20 dark:group-hover:bg-heading-gold dark:group-hover:text-black">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>

      {/* Quick Access Grid */}
      <div className="px-6 mt-12 mb-8">
        <h3 className="text-foreground dark:text-heading-gold font-black text-sm uppercase tracking-[0.3em] mb-6 flex items-center gap-3 opacity-60">
           Portal
           <div className="h-px flex-1 bg-border/50 dark:bg-neutral-800"></div>
        </h3>
        <div className="grid grid-cols-2 gap-5">
          <button
            onClick={() => navigate('/orders')}
            className="bg-card dark:bg-neutral-900 rounded-[35px] p-6 shadow-sm border border-border/50 dark:border-neutral-900 hover:border-emerald-500/30 dark:hover:border-heading-gold/30 transition-all duration-500 text-center group active:scale-95 flex flex-col items-center"
          >
            <div className="bg-emerald-100 dark:bg-neutral-800 rounded-3xl w-16 h-16 flex items-center justify-center mb-4 transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:bg-emerald-200 dark:group-hover:bg-neutral-700">
              <Utensils className="w-8 h-8 text-emerald-600 dark:text-heading-gold" />
            </div>
            <p className="text-xs font-black text-foreground dark:text-muted-foreground uppercase tracking-[0.2em] transition-colors">Orders</p>
          </button>

          <button
            onClick={() => navigate('/loyalty')}
            className="bg-card dark:bg-neutral-900 rounded-[35px] p-6 shadow-sm border border-border/50 dark:border-neutral-900 hover:border-emerald-500/30 dark:hover:border-heading-gold/30 transition-all duration-500 text-center group active:scale-95 flex flex-col items-center"
          >
            <div className="bg-heading-gold/10 dark:bg-neutral-800 rounded-3xl w-16 h-16 flex items-center justify-center mb-4 transition-all duration-500 shadow-inner group-hover:scale-110 group-hover:bg-heading-gold/20 dark:group-hover:bg-neutral-700">
              <Award className="w-8 h-8 text-heading-gold" />
            </div>
            <p className="text-xs font-black text-foreground dark:text-muted-foreground uppercase tracking-[0.2em] transition-colors">Rewards</p>
          </button>
        </div>
      </div>
    </div>
  );
}
