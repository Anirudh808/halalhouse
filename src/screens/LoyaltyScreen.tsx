
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
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 sticky top-0 z-20 shadow-lg transition-colors duration-300 rounded-b-3xl flex items-center gap-3">
        <button 
          onClick={() => navigate('/home')} 
          className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all shadow-inner active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-black tracking-tight font-outfit">Loyalty Rewards</h1>
      </div>

      {/* Points Balance Card - PREMIUM DESIGN */}
      <div className="px-6 py-8">
        <div className="bg-gradient-to-br from-yellow-400 via-orange-400 to-yellow-500 dark:from-yellow-500 dark:via-orange-500 dark:to-yellow-600 rounded-[45px] shadow-2xl p-10 text-center text-white relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full -mr-16 -mt-16 blur-2xl group-hover:scale-110 transition-transform duration-1000"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/5 rounded-full -ml-12 -mb-12 blur-xl"></div>
          
          <div className="bg-white/20 backdrop-blur-md rounded-full p-6 w-fit mx-auto mb-6 shadow-xl border border-white/30 animate-in zoom-in duration-500">
            <Award className="w-14 h-14 text-white drop-shadow-lg" />
          </div>
          <p className="text-yellow-950 font-black text-xs uppercase tracking-[0.3em] mb-3 opacity-80">Total Points Balance</p>
          <p className="text-7xl font-black text-white mb-6 tracking-tighter drop-shadow-xl">{currentUser.points}</p>
          <div className="flex justify-center">
             <Badge className="bg-white text-orange-600 font-black px-6 py-2 rounded-full uppercase tracking-widest shadow-lg border-none hover:bg-yellow-50 transition-colors">
                <Star className="w-3 h-3 mr-2 fill-orange-500" />
                Premium Member
             </Badge>
          </div>
        </div>
      </div>

      {/* Reward Progress Section */}
      <div className="px-6 pb-8">
        <div className="bg-card rounded-[40px] shadow-sm border border-border/50 p-8 space-y-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-emerald-100 dark:bg-emerald-900/40 p-2.5 rounded-2xl text-emerald-600 dark:text-emerald-400">
                 <Gift className="w-6 h-6" />
              </div>
              <h3 className="font-black text-foreground text-xl tracking-tight">Status Path</h3>
            </div>
            <span className="text-xs font-black text-muted-foreground uppercase tracking-widest bg-muted/50 px-3 py-1.5 rounded-xl">
              {currentUser.points % pointsNeededForReward}/{pointsNeededForReward} pts
            </span>
          </div>

          <div className="space-y-4">
            {/* Progress Bar Container */}
            <div className="w-full bg-muted dark:bg-neutral-800 rounded-full h-5 p-1 overflow-hidden shadow-inner border border-border/50">
              <div
                className="bg-gradient-to-r from-emerald-400 via-emerald-500 to-teal-500 h-full rounded-full transition-all duration-1000 ease-out shadow-[0_0_15px_rgba(52,211,153,0.4)]"
                style={{ width: `${progress * 100}%` }}
              >
                {progress > 0.1 && (
                  <div className="w-full h-full bg-white/20 animate-shimmer scale-[2] origin-left"></div>
                )}
              </div>
            </div>

            <div className="flex items-start gap-3 bg-emerald-50/50 dark:bg-emerald-950/20 p-4 rounded-2xl border border-emerald-100 dark:border-emerald-900/40">
              <Zap className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-0.5" />
              <p className="text-xs text-emerald-800 dark:text-emerald-400 font-bold leading-relaxed">
                Just <span className="text-emerald-600 dark:text-emerald-300 text-lg font-black">{pointsNeededForReward - (currentUser.points % pointsNeededForReward)}</span> more points until your next free treat!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rewards Catalog / How it Works */}
      <div className="px-6 pb-8">
        <h3 className="font-black text-foreground text-sm uppercase tracking-[0.2em] mb-6 ml-4 opacity-70">Privileges</h3>
        <div className="grid grid-cols-1 gap-4">
          {[
            { icon: TrendingUp, title: "Earn Velocity", desc: "1 Point per €1 spent", color: "emerald" },
            { icon: Gift, title: "Pure Rewards", desc: "100 pts = Free Menu Item", color: "yellow" },
            { icon: Award, title: "Priority Flow", desc: "Exclusive event access", color: "purple" }
          ].map((item, i) => (
            <div key={i} className="bg-card rounded-[32px] p-6 shadow-sm border border-border/50 flex items-center justify-between group active:scale-[0.98] transition-transform">
              <div className="flex items-center gap-5">
                <div className={`bg-${item.color}-100 dark:bg-${item.color}-900/30 p-4 rounded-2xl group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 text-${item.color}-600 dark:text-${item.color}-400`} />
                </div>
                <div>
                  <h4 className="font-black text-foreground text-base tracking-tight">{item.title}</h4>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{item.desc}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground/30" />
            </div>
          ))}
        </div>
      </div>

      {/* Points History */}
      <div className="px-6">
        <div className="bg-card rounded-[40px] shadow-sm border border-border/50 p-8">
          <div className="flex items-center gap-3 mb-8">
             <div className="bg-muted dark:bg-neutral-800 p-2.5 rounded-xl">
               <History className="w-5 h-5 text-muted-foreground" />
             </div>
             <h3 className="font-black text-foreground text-xl tracking-tight">Ledger History</h3>
          </div>
          
          <div className="space-y-6">
            {pointsTransactions.map((transaction) => (
              <div key={transaction.id} className="flex items-center justify-between group">
                <div className="flex items-center gap-4">
                   <div className="w-1.5 h-8 bg-emerald-500/20 rounded-full group-hover:bg-emerald-500 transition-colors"></div>
                   <div>
                     <p className="font-black text-foreground text-sm tracking-tight">{transaction.description}</p>
                     <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest mt-1">
                       {new Date(transaction.date).toLocaleDateString('en-GB', {
                         day: 'numeric',
                         month: 'short',
                         year: 'numeric',
                       })}
                     </p>
                   </div>
                </div>
                <div className="text-right">
                  <span className="font-black text-emerald-600 dark:text-emerald-400 text-lg tracking-tighter">+{transaction.points}</span>
                  <p className="text-[8px] text-muted-foreground font-black uppercase tracking-tighter leading-none">pts</p>
                </div>
              </div>
            ))}
          </div>
          
          <button className="w-full mt-10 py-4 border-2 border-dashed border-border rounded-2xl text-[10px] font-black text-muted-foreground uppercase tracking-widest hover:border-emerald-500 hover:text-emerald-600 transition-all">
             Load More History
          </button>
        </div>
      </div>
    </div>
  );
}
