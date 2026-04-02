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
    { icon: Star, label: 'Loyalty Rewards', sub: `${currentUser.points} Points available`, path: '/loyalty', color: 'text-yellow-600', bg: 'bg-yellow-100 dark:bg-yellow-900/30' },
    { icon: CreditCard, label: 'Payment Methods', sub: 'Visa •••• 4242', path: '/profile', color: 'text-blue-600', bg: 'bg-blue-100 dark:bg-blue-900/30' },
    { icon: MapPin, label: 'Delivery Addresses', sub: '2 Saved addresses', path: '/profile', color: 'text-emerald-600', bg: 'bg-emerald-100 dark:bg-emerald-900/30' },
    { icon: Bell, label: 'Notifications', sub: '2 new alerts', path: '/profile', color: 'text-purple-600', bg: 'bg-purple-100 dark:bg-purple-900/30' },
    { icon: Shield, label: 'Privacy & Security', sub: '2FA Enabled', path: '/profile', color: 'text-orange-600', bg: 'bg-orange-100 dark:bg-orange-900/30' },
    { icon: Settings, label: 'App Settings', sub: 'v1.0.4 Premium', path: '/profile', color: 'text-gray-600', bg: 'bg-gray-100 dark:bg-neutral-800' },
  ];

  return (
    <div className="min-h-screen bg-background pb-12 transition-colors duration-300 font-outfit">
      {/* Header & Profile Summary */}
      <div className="bg-emerald-600 dark:bg-emerald-700 pt-16 pb-24 px-8 rounded-b-[60px] relative shadow-2xl transition-colors duration-300">
        <div className="flex items-center gap-6 relative z-10">
          <div className="relative group">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-150 animate-pulse"></div>
            <Avatar className="w-24 h-24 border-4 border-white shadow-2xl relative z-10 transition-all hover:scale-105">
              <AvatarImage src={currentUser.avatar} />
              <AvatarFallback className="bg-emerald-500 text-white text-3xl font-black">
                {currentUser.name.charAt(0)}
              </AvatarFallback>
            </Avatar>
            <div className="absolute -bottom-1 -right-1 bg-yellow-400 border-2 border-white rounded-full p-1.5 z-20 shadow-lg">
               <Star className="w-3.5 h-3.5 text-yellow-900 fill-yellow-900" />
            </div>
          </div>
          <div className="flex-1 min-w-0">
            <h1 className="text-3xl font-black text-white tracking-tight leading-none mb-2 truncate">{currentUser.name}</h1>
            <p className="text-emerald-100 font-medium opacity-80 flex items-center gap-2 mt-1">
               <Mail className="w-3.5 h-3.5" />
               <span className="text-sm truncate">{currentUser.email}</span>
            </p>
            <Badge className="mt-3 bg-white/20 hover:bg-white/30 text-white border-none py-1 px-3 rounded-full text-[10px] font-black uppercase tracking-widest backdrop-blur-md">
              Pro Member
            </Badge>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="px-8 -mt-10 relative z-20 mb-10">
        <div className="bg-card dark:bg-neutral-900 rounded-[32px] p-6 shadow-xl border border-border/50 flex justify-around items-center backdrop-blur-md">
           <div className="text-center">
              <p className="text-2xl font-black text-foreground">12</p>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Total Orders</p>
           </div>
           <div className="h-8 w-px bg-border/50"></div>
           <div className="text-center">
              <p className="text-2xl font-black text-emerald-600 dark:text-emerald-400">{currentUser.points}</p>
              <p className="text-[10px] text-muted-foreground font-black uppercase tracking-widest">Loyalty Pts</p>
           </div>
        </div>
      </div>

      {/* Menu List */}
      <div className="px-8 space-y-4">
        <h3 className="font-black text-foreground text-sm uppercase tracking-[0.2em] mb-4 ml-2 opacity-60">Account Hub</h3>
        <div className="grid grid-cols-1 gap-3">
          {menuItems.map((item, i) => (
            <button
              key={i}
              onClick={() => navigate(item.path)}
              className="bg-card hover:bg-muted/30 p-5 rounded-[28px] border border-border/50 flex items-center justify-between group transition-all active:scale-[0.98] shadow-sm"
            >
              <div className="flex items-center gap-5">
                <div className={`${item.bg} p-3.5 rounded-2xl group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-5 h-5 ${item.color}`} />
                </div>
                <div className="text-left">
                  <p className="font-black text-foreground text-base tracking-tight">{item.label}</p>
                  <p className="text-[10px] text-muted-foreground font-bold uppercase tracking-widest">{item.sub}</p>
                </div>
              </div>
              <ChevronRight className="w-5 h-5 text-muted-foreground/30 group-hover:translate-x-1 transition-transform" />
            </button>
          ))}
        </div>
      </div>

      {/* Logout Button */}
      <div className="px-8 mt-12 pb-10">
        <Button
          onClick={handleLogout}
          variant="outline"
          className="w-full h-16 border-2 border-red-200 dark:border-red-900/30 text-red-600 dark:text-red-400 hover:bg-red-50 dark:hover:bg-red-950 font-black rounded-2xl transition-all active:scale-95 flex items-center justify-center gap-3"
        >
          <LogOut className="w-5 h-5" />
          TERMINATE SESSION
        </Button>
        <p className="text-center text-[10px] text-muted-foreground font-bold uppercase tracking-[0.3em] mt-8 opacity-40">
           HalalHouse Application v1.0.4
        </p>
      </div>
    </div>
  );
}
