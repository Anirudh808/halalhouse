import { useState } from 'react';
import { ArrowLeft, QrCode, Scan, ShieldCheck, Info } from 'lucide-react';
import { Button } from '../components/ui/button';

export function ScanQRScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const [isScanning, setIsScanning] = useState(false);

  const handleStartScan = () => {
    setIsScanning(true);
    // Simulate QR code scan after 2 seconds without navigating
    setTimeout(() => {
      console.log('Scan completed in showcase');
      setIsScanning(false);
      navigate('/verify'); // In showcase, simulate finding a product
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
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
            <h1 className="text-2xl font-black tracking-tighter uppercase italic text-foreground dark:text-heading-gold">Audit Scanner</h1>
            <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-[0.2em] opacity-80 transition-colors">Protocol Verification Hub</p>
          </div>
        </div>
      </div>

      {/* Camera View Area */}
      <div className={`flex-1 relative flex items-center justify-center p-8 transition-colors duration-700 ${isScanning ? 'bg-black' : 'bg-background'}`}>
        {!isScanning ? (
          <div className="text-center animate-in fade-in zoom-in duration-700">
            <div className="relative mb-12 mx-auto w-fit">
              <div className="absolute inset-0 bg-emerald-500/10 dark:bg-heading-gold/5 blur-[100px] rounded-full scale-150 animate-pulse"></div>
              <div className="bg-card dark:bg-neutral-950 rounded-[45px] p-16 shadow-[0_40px_80px_rgba(0,0,0,0.3)] border border-border/50 dark:border-neutral-900 relative z-10 transition-all hover:scale-105 duration-700 group cursor-pointer active:scale-95">
                <QrCode className="w-28 h-28 text-emerald-600 dark:text-heading-gold drop-shadow-2xl transition-transform group-hover:rotate-12" />
              </div>
            </div>
            <h2 className="text-foreground dark:text-white text-4xl font-black mb-6 tracking-tighter uppercase italic transition-colors">Trust Verification</h2>
            <p className="text-muted-foreground dark:text-muted-foreground mb-12 max-w-[300px] mx-auto font-bold leading-relaxed italic opacity-80 uppercase text-[10px] tracking-widest">
              Scan the unique audit protocol on any product to synchronize its full certification pedigree with the blockchain.
            </p>
            <Button
              onClick={handleStartScan}
              size="lg"
              className="bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 h-20 px-14 rounded-[30px] text-lg font-black shadow-[0_20px_50px_rgba(0,0,0,0.2)] dark:shadow-[0_20px_50px_rgba(191,153,6,0.2)] active:scale-95 transition-all group uppercase tracking-[0.2em] border-2 border-white/10 dark:border-black/5 text-white dark:text-black"
            >
              <Scan className="w-7 h-7 mr-4 group-hover:rotate-90 transition-transform duration-700" />
              Initialize Scan
            </Button>
          </div>
        ) : (
          <div className="relative w-full max-w-sm aspect-square items-center justify-center flex animate-in zoom-in duration-500">
            {/* Scanning Frame */}
            <div className="absolute inset-0 border-4 border-white/5 dark:border-white/5 rounded-[50px] overflow-hidden">
               {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-24 h-24 border-t-8 border-l-8 border-emerald-500 dark:border-heading-gold rounded-tl-[50px] shadow-[0_0_30px_rgba(191,153,6,0.3)] transition-colors"></div>
              <div className="absolute top-0 right-0 w-24 h-24 border-t-8 border-r-8 border-emerald-500 dark:border-heading-gold rounded-tr-[50px] shadow-[0_0_30px_rgba(191,153,6,0.3)] transition-colors"></div>
              <div className="absolute bottom-0 left-0 w-24 h-24 border-b-8 border-l-8 border-emerald-500 dark:border-heading-gold rounded-bl-[50px] shadow-[0_0_30px_rgba(191,153,6,0.3)] transition-colors"></div>
              <div className="absolute bottom-0 right-0 w-24 h-24 border-b-8 border-r-8 border-emerald-500 dark:border-heading-gold rounded-br-[50px] shadow-[0_0_30px_rgba(191,153,6,0.3)] transition-colors"></div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="w-full h-2 bg-gradient-to-r from-transparent via-emerald-400 dark:via-heading-gold to-transparent shadow-[0_0_40px_rgba(191,153,6,1)] animate-scan-line relative top-0 opacity-100 transition-all"></div>
            </div>

            {/* Ghost Icon */}
            <QrCode className="w-48 h-48 text-emerald-500/10 dark:text-heading-gold/10 animate-pulse transition-colors" />
            
            <div className="absolute -bottom-32 left-0 right-0 text-center animate-bounce">
              <p className="text-emerald-500 dark:text-heading-gold font-black tracking-[0.4em] text-[10px] uppercase mb-3 italic transition-colors">Protocol Locked • Processing</p>
              <div className="flex justify-center gap-2">
                 <div className="w-2 h-2 bg-emerald-500 dark:bg-heading-gold rounded-full animate-ping"></div>
                 <div className="w-2 h-2 bg-emerald-500 dark:bg-heading-gold rounded-full animate-ping delay-150"></div>
                 <div className="w-2 h-2 bg-emerald-500 dark:bg-heading-gold rounded-full animate-ping delay-300"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Instructions Footer */}
      {!isScanning && (
        <div className="bg-white/90 dark:bg-neutral-950/95 border-t border-border/30 dark:border-neutral-900 px-10 py-12 rounded-t-[55px] shadow-[0_-30px_70px_rgba(0,0,0,0.15)] transition-all duration-500 backdrop-blur-3xl">
          <div className="flex items-center gap-4 mb-10 opacity-70">
             <div className="bg-accent/50 dark:bg-neutral-900 p-4 rounded-2xl text-emerald-600 dark:text-heading-gold border border-border/10 dark:border-neutral-800">
               <Info className="w-6 h-6" />
             </div>
             <div>
               <h3 className="text-foreground dark:text-white font-black text-xl tracking-tighter uppercase italic transition-colors">Verification Sequence</h3>
               <p className="text-[9px] text-muted-foreground dark:text-neutral-500 font-black uppercase tracking-widest opacity-60">Audit Intelligence Process</p>
             </div>
          </div>
          <div className="space-y-6">
            {[
              { icon: QrCode, text: "Focus on the unique encrypted audit marker", delay: "duration-300" },
              { icon: Scan, text: "Maintain stability for quantum protocol lock", delay: "duration-500" },
              { icon: ShieldCheck, text: "Sync immutable certification with the hub", delay: "duration-700" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-6 group">
                <div className="w-12 h-12 rounded-[18px] bg-accent/30 dark:bg-neutral-900 flex items-center justify-center group-hover:bg-black dark:group-hover:bg-heading-gold group-hover:text-white dark:group-hover:text-black transition-all duration-500 border border-border/5 dark:border-neutral-800 shadow-inner">
                   <step.icon className="w-5 h-5 transition-transform group-hover:rotate-12" />
                </div>
                <p className="text-muted-foreground dark:text-neutral-400 text-[9px] font-black uppercase tracking-[0.2em] leading-relaxed transition-colors group-hover:text-foreground dark:group-hover:text-white flex-1">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
