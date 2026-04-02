
import { ArrowLeft, Award, TrendingUp, Gift, History, Star, Zap, ChevronRight } from 'lucide-react';
import { currentUser, pointsTransactions } from '../data/mockData';
import { Badge } from '../components/ui/badge';

export function LoyaltyScreen() {
  const navigate = (path: string) => console.log('navigate', path);

  const pointsNeededForReward = 100;
  const progress = (currentUser.points % pointsNeededForReward) / pointsNeededForReward;

  return (
    <div className="min-h-screen bg-background pb-12 transition-colors duration-300">
      {/* Header */}
      <div className="bg-white/80 dark:bg-black/90 text-foreground dark:text-heading-gold px-6 py-8 sticky top-0 z-30 shadow-xl backdrop-blur-2xl border-b border-border/50 dark:border-neutral-900 transition-all duration-500 rounded-b-[40px]">
        <div className="flex items-center gap-4">
          <button 
            onClick={() => navigate('/home')} 
            className="bg-accent/50 dark:bg-neutral-900 hover:bg-accent dark:hover:bg-neutral-800 rounded-2xl p-3 transition-all active:scale-95 shadow-sm border border-border/10 dark:border-neutral-800"
          >
            <ArrowLeft className="w-6 h-6 text-foreground dark:text-heading-gold" />
          </button>
          <div>
            <h1 className="text-2xl font-black tracking-tighter uppercase italic">Legacy Status</h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">Premium Loyalty Ledger</p>
          </div>
        </div>
      </div>

      {/* Points Balance Card - ONYX & GOLD */}
      <div className="px-6 py-10">
        <div className="bg-black dark:bg-neutral-950 rounded-[50px] shadow-[0_40px_80px_rgba(0,0,0,0.4)] p-12 text-center text-white relative overflow-hidden group border border-white/5 dark:border-neutral-900">
          {/* Animated Gold Aura */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-heading-gold/10 rounded-full -mr-40 -mt-40 blur-[100px] group-hover:bg-heading-gold/20 transition-all duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-emerald-500/5 rounded-full -ml-32 -mb-32 blur-[80px]"></div>
          
          <div className="bg-white/5 dark:bg-heading-gold/10 backdrop-blur-3xl rounded-[30px] p-8 w-fit mx-auto mb-8 shadow-2xl border border-white/10 dark:border-heading-gold/20 animate-in zoom-in duration-700 hover:rotate-6 transition-transform">
            <Award className="w-16 h-16 text-heading-gold drop-shadow-[0_10px_20px_rgba(191,153,6,0.5)]" />
          </div>
          <p className="text-muted-foreground dark:text-muted-foreground font-black text-xs uppercase tracking-[0.4em] mb-4 opacity-80 italic">Accumulated Integrity Points</p>
          <div className="flex items-center justify-center gap-1 mb-8">
            <p className="text-8xl font-black text-white dark:text-heading-gold tracking-tight transition-colors">{currentUser.points}</p>
          </div>
          <div className="flex justify-center">
             <Badge className="bg-heading-gold text-black font-black px-8 py-3 rounded-2xl uppercase tracking-[0.2em] shadow-[0_20px_40px_rgba(191,153,6,0.3)] border-none hover:bg-yellow-400 transition-all active:scale-95 italic">
                <Star className="w-4 h-4 mr-3 fill-black animate-pulse" />
                Sovereign Elite
             </Badge>
          </div>
        </div>
      </div>

      {/* Reward Progress Section */}
      <div className="px-6 pb-10">
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] shadow-sm border border-border/50 dark:border-neutral-900 p-10 space-y-8 transition-colors">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <div className="bg-emerald-100 dark:bg-neutral-900 p-3.5 rounded-2xl text-emerald-600 dark:text-heading-gold shadow-sm">
                 <Gift className="w-7 h-7" />
              </div>
              <div>
                <h3 className="font-black text-foreground dark:text-white text-xl tracking-tighter uppercase italic">Status Evolution</h3>
                <p className="text-[10px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-widest opacity-60">Next Tier Horizon</p>
              </div>
            </div>
            <span className="text-[10px] font-black text-white dark:text-black bg-black dark:bg-heading-gold px-4 py-2 rounded-xl transition-colors shadow-lg">
              {currentUser.points % pointsNeededForReward}/{pointsNeededForReward} PTS
            </span>
          </div>

          <div className="space-y-6">
            {/* Progress Bar Container */}
            <div className="w-full bg-muted dark:bg-neutral-900 rounded-full h-7 p-1.5 overflow-hidden shadow-inner border border-border/30 dark:border-neutral-800">
              <div
                className="bg-emerald-600 dark:bg-heading-gold h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_25px_rgba(191,153,6,0.3)] relative overflow-hidden"
                style={{ width: `${progress * 100}%` }}
              >
                <div className="absolute inset-0 bg-white/20 animate-shimmer scale-x-[2] origin-left mix-blend-overlay"></div>
              </div>
            </div>

            <div className="flex items-start gap-4 bg-emerald-50 dark:bg-neutral-900/50 p-6 rounded-[30px] border border-emerald-100 dark:border-neutral-800 transition-colors">
              <Zap className="w-5 h-5 text-emerald-600 dark:text-heading-gold flex-shrink-0 mt-1 animate-bounce" />
              <p className="text-xs text-muted-foreground dark:text-neutral-400 font-bold leading-relaxed">
                Unlock your premium legacy reward in <span className="text-emerald-700 dark:text-heading-gold text-2xl font-black italic tracking-tighter">{pointsNeededForReward - (currentUser.points % pointsNeededForReward)}</span> precise movements.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Privileges Grid */}
      <div className="px-6 pb-12">
        <h3 className="font-black text-foreground dark:text-heading-gold text-[10px] uppercase tracking-[0.4em] mb-8 ml-6 opacity-60 italic">Strategic Privileges</h3>
        <div className="grid grid-cols-1 gap-5">
          {[
            { icon: TrendingUp, title: "Velocity", desc: "1.0x Integrity Multiplier", color: "emerald", darkColor: "heading-gold" },
            { icon: Gift, title: "Synthesis", desc: "Quantum Reward Unlocks", color: "yellow", darkColor: "heading-gold" },
            { icon: Award, title: "Access", desc: "Exclusive Node Entry", color: "purple", darkColor: "heading-gold" }
          ].map((item, i) => (
            <div key={i} className="bg-card dark:bg-neutral-950 rounded-[35px] p-8 shadow-sm border border-border/50 dark:border-neutral-900 flex items-center justify-between group active:scale-[0.98] transition-all hover:border-emerald-500/20 dark:hover:border-heading-gold/20">
              <div className="flex items-center gap-6">
                <div className="bg-accent/50 dark:bg-neutral-900 p-5 rounded-[22px] group-hover:rotate-12 transition-transform shadow-inner border border-border/10 dark:border-neutral-800">
                  <item.icon className="w-7 h-7 text-emerald-600 dark:text-heading-gold transition-colors" />
                </div>
                <div>
                  <h4 className="font-black text-foreground dark:text-white text-lg tracking-tighter uppercase italic transition-colors">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.2em] opacity-60">{item.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground/20 group-hover:translate-x-2 transition-transform" />
            </div>
          ))}
        </div>
      </div>

      {/* Points History Ledger */}
      <div className="px-6 mb-12">
        <div className="bg-card dark:bg-neutral-950 rounded-[45px] shadow-sm border border-border/50 dark:border-neutral-900 p-10 transition-colors">
          <div className="flex items-center gap-4 mb-10">
             <div className="bg-accent/50 dark:bg-neutral-900 p-3 rounded-2xl border border-border/20 dark:border-neutral-800">
               <History className="w-6 h-6 text-muted-foreground dark:text-heading-gold" />
             </div>
             <div>
               <h3 className="font-black text-foreground dark:text-white text-xl tracking-tighter uppercase italic">Integrity Ledger</h3>
               <p className="text-[10px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-widest opacity-60">Verified Transaction Logs</p>
             </div>
          </div>
          
          <div className="space-y-8">
            {pointsTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-5">
                   <div className="w-1.5 h-10 bg-emerald-600/10 dark:bg-heading-gold/10 rounded-full group-hover:bg-emerald-600 dark:group-hover:bg-heading-gold transition-all duration-300"></div>
                   <div>
                     <p className="font-black text-foreground dark:text-neutral-300 text-sm tracking-tighter uppercase italic transition-colors">{transaction.description}</p>
                     <p className="text-[9px] text-muted-foreground dark:text-neutral-600 font-black uppercase tracking-widest mt-1.5 opacity-60">
                       {new Date(transaction.date).toLocaleDateString('en-GB', {
                         day: 'numeric',
                         month: 'short',
                         year: 'numeric',
                       })}
                     </p>
                   </div>
                </div>
                <div className="text-right">
                  <div className="flex items-baseline gap-0.5">
                    <span className="text-[10px] font-black text-emerald-600 dark:text-heading-gold">+</span>
                    <span className="font-black text-emerald-700 dark:text-heading-gold text-2xl tracking-tighter transition-colors">{transaction.points}</span>
                  </div>
                  <p className="text-[8px] text-muted-foreground dark:text-neutral-700 font-black uppercase tracking-tighter leading-none italic opacity-50">PTS</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-12 py-5 border-2 border-dashed border-border/50 dark:border-neutral-800 rounded-[28px] text-[10px] font-black text-muted-foreground dark:text-neutral-500 uppercase tracking-[0.3em] hover:bg-accent dark:hover:bg-neutral-900/50 hover:border-emerald-500 dark:hover:border-heading-gold transition-all active:scale-95 italic">
             Expand Audit History
          </button>
        </div>
      </div>
    </div>
  );
}
