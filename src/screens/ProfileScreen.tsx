import { Settings, CreditCard, Bell, Shield, LogOut, ChevronRight, Star, Mail, MapPin } from 'lucide-react';
import { currentUser } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

export function ProfileScreen() {
  const navigate = (path: string) => console.log('navigate', path);

  const handleLogout = () => {
    console.log('Logout in showcase');
  };

  const menuItems = [
    { icon: Star, label: 'Loyalty Rewards', sub: `${currentUser.points} Points available`, path: '/loyalty', color: 'text-heading-gold', bg: 'bg-heading-gold/10' },
    { icon: CreditCard, label: 'Payment Methods', sub: 'Visa •••• 4242', path: '/profile', color: 'text-blue-500', bg: 'bg-blue-500/10' },
    { icon: MapPin, label: 'Delivery Addresses', sub: '2 Saved addresses', path: '/profile', color: 'text-heading-gold', bg: 'bg-heading-gold/5' },
    { icon: Bell, label: 'Notifications', sub: '2 new alerts', path: '/profile', color: 'text-purple-500', bg: 'bg-purple-500/10' },
    { icon: Shield, label: 'Privacy & Security', sub: '2FA Enabled', path: '/profile', color: 'text-orange-500', bg: 'bg-orange-500/10' },
    { icon: Settings, label: 'App Settings', sub: 'v1.0.4 Premium', path: '/profile', color: 'text-neutral-500', bg: 'bg-neutral-500/10' },
  ];

  return (
    <div className="min-h-screen bg-background pb-12 transition-colors duration-300">
      {/* Header & Profile Summary */}
      <div className="bg-emerald-600 dark:bg-black pt-20 pb-28 px-8 rounded-b-[70px] relative shadow-2xl transition-all duration-500 overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-white/5 dark:bg-heading-gold/5 rounded-full -mr-40 -mt-40 blur-[100px]"></div>
        <div className="flex items-center gap-7 relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 dark:bg-heading-gold/20 blur-2xl rounded-full scale-125 animate-pulse transition-all"></div>
            <Avatar className="w-28 h-28 border-4 border-white dark:border-heading-gold shadow-2xl relative z-10 transition-all hover:scale-105 duration-500">
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback className="bg-emerald-500 dark:bg-heading-gold text-white dark:text-black text-4xl font-black">
                {currentUser.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-yellow-400 dark:bg-heading-gold border-4 border-white dark:border-black rounded-full p-2 z-20 shadow-xl transition-all group-hover:scale-110">
               <Star className="w-4 h-4 text-yellow-900 dark:text-black fill-current" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-4xl font-black text-white dark:text-heading-gold tracking-tighter leading-tight mb-2 truncate uppercase transition-colors">{currentUser.name}</h1>
            <p className="text-emerald-100 dark:text-muted-foreground font-bold opacity-80 flex items-center gap-2 mt-1 transition-colors">
               <Mail className="w-4 h-4 opacity-70" />
               <span className="text-sm truncate lowercase tracking-tight">{currentUser.email}</span>
            </p>
            <Badge className="mt-4 bg-white/10 dark:bg-heading-gold/20 hover:bg-white/20 dark:hover:bg-heading-gold/30 text-white dark:text-heading-gold border border-white/20 dark:border-heading-gold/30 py-1.5 px-4 rounded-xl text-[9px] font-black uppercase tracking-[0.2em] backdrop-blur-3xl transition-all">
              Elite Protocol Member
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="px-8 -mt-12 relative z-20 mb-12">
        <div className="bg-white/90 dark:bg-neutral-900/95 rounded-[45px] p-8 shadow-[0_30px_60px_rgba(0,0,0,0.2)] border border-white/20 dark:border-neutral-800 flex justify-around items-center backdrop-blur-3xl transition-all">
           <div className="text-center group cursor-default">
              <p className="text-3xl font-black text-foreground dark:text-white tracking-tighter transition-colors group-hover:scale-110 duration-300">12</p>
              <p className="text-[10px] text-muted-foreground dark:text-muted-foreground font-black uppercase tracking-[0.3em] mt-2 opacity-60">Operations</p>
           </div>
           <div className="h-10 w-px bg-border/40 dark:bg-neutral-800"></div>
           <div className="text-center group cursor-default">
              <p className="text-3xl font-black text-emerald-600 dark:text-heading-gold tracking-tighter transition-colors group-hover:scale-110 duration-300">{currentUser.points}</p>
              <p className="text-[10px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-[0.3em] mt-2 opacity-60">Legacy Pts</p>
           </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-8 space-y-4">
        <h3 className="font-black text-foreground dark:text-heading-gold text-[10px] uppercase tracking-[0.4em] mb-6 ml-4 opacity-60">Strategic Hub</h3>
        <div className="grid grid-cols-1 gap-4">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="bg-card dark:bg-neutral-950 hover:bg-accent dark:hover:bg-neutral-900 p-6 rounded-[35px] border border-border/50 dark:border-neutral-900 flex items-center justify-between group transition-all active:scale-[0.98] shadow-sm hover:shadow-xl hover:border-heading-gold/20 duration-300"
            >
              <div className="flex items-center gap-6">
                <div className={`${item.bg} dark:bg-neutral-900 p-4 rounded-2xl group-hover:rotate-12 transition-all border border-transparent dark:border-neutral-800`}>
                  <item.icon className={`w-6 h-6 ${item.color} dark:text-heading-gold`} />
                </div>
                <div className="text-left">
                  <p className="font-black text-foreground dark:text-white text-lg tracking-tighter uppercase transition-colors leading-none mb-1">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground dark:text-neutral-600 font-black uppercase tracking-widest opacity-80">{item.sub}</p>
                </div>
              </div>
              <ChevronRight className="w-6 h-6 text-muted-foreground/20 group-hover:translate-x-2 transition-transform duration-300" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-8 mt-16 pb-16">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full h-16 border-2 border-red-500/20 dark:border-heading-gold/10 text-red-600 dark:text-heading-gold hover:bg-red-50 dark:hover:bg-heading-gold/5 font-black rounded-[28px] transition-all active:scale-95 flex items-center justify-center gap-4 uppercase tracking-[0.3em] shadow-sm "
        >
          <LogOut className="w-5 h-5" />
          Terminate Session
        </Button>
        <p className="text-center text-[10px] text-muted-foreground dark:text-neutral-700 font-black uppercase tracking-[0.4em] mt-10 opacity-60">
           Tactical Environment v1.0.4 • HalalHouse Protocol
        </p>
      </div>
    </div>
  );
}
