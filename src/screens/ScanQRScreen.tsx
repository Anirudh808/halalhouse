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
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white px-6 py-6 sticky top-0 z-20 shadow-lg transition-colors duration-300 rounded-b-3xl flex items-center gap-3">
        <button
          onClick={() => navigate('/home')}
          className="bg-white/20 hover:bg-white/30 rounded-full p-2.5 transition-all shadow-inner active:scale-95"
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
        <h1 className="text-2xl font-black tracking-tight">Scan QR Code</h1>
      </div>

      {/* Camera View Area */}
      <div className={`flex-1 relative flex items-center justify-center p-8 transition-colors duration-500 ${isScanning ? 'bg-black' : 'bg-background'}`}>
        {!isScanning ? (
          <div className="text-center animate-in fade-in zoom-in duration-700">
            <div className="relative mb-10 mx-auto w-fit">
              <div className="absolute inset-0 bg-emerald-500/20 dark:bg-emerald-500/10 blur-3xl rounded-full scale-150 animate-pulse"></div>
              <div className="bg-card dark:bg-neutral-900 rounded-[40px] p-12 shadow-2xl border border-border/50 relative z-10 transition-transform hover:scale-105 duration-500">
                <QrCode className="w-24 h-24 text-emerald-600 dark:text-emerald-400" />
              </div>
            </div>
            <h2 className="text-foreground text-3xl font-black mb-4 tracking-tight">Verify Halal Integrity</h2>
            <p className="text-muted-foreground mb-10 max-w-xs mx-auto font-medium leading-relaxed italic">
              Scan the unique QR code on any HalalHouse packaging to instantly access its full certification pedigree.
            </p>
            <Button
              onClick={handleStartScan}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 h-16 px-10 rounded-2xl text-lg font-black shadow-xl shadow-emerald-900/20 active:scale-95 transition-all group"
            >
              <Scan className="w-6 h-6 mr-3 group-hover:rotate-90 transition-transform duration-500" />
              START SCANNING
            </Button>
          </div>
        ) : (
          <div className="relative w-full max-w-sm aspect-square items-center justify-center flex animate-in zoom-in duration-300">
            {/* Scanning Frame */}
            <div className="absolute inset-0 border-2 border-emerald-500/30 rounded-3xl overflow-hidden">
               {/* Corner Accents */}
              <div className="absolute top-0 left-0 w-20 h-20 border-t-8 border-l-8 border-emerald-500 rounded-tl-3xl shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
              <div className="absolute top-0 right-0 w-20 h-20 border-t-8 border-r-8 border-emerald-500 rounded-tr-3xl shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
              <div className="absolute bottom-0 left-0 w-20 h-20 border-b-8 border-l-8 border-emerald-500 rounded-bl-3xl shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
              <div className="absolute bottom-0 right-0 w-20 h-20 border-b-8 border-r-8 border-emerald-500 rounded-br-3xl shadow-[0_0_20px_rgba(16,185,129,0.5)]"></div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 z-10 pointer-events-none">
              <div className="w-full h-1 bg-gradient-to-r from-transparent via-emerald-400 to-transparent shadow-[0_0_30px_rgba(52,211,153,1)] animate-scan-line relative top-0 opacity-80"></div>
            </div>

            {/* Ghost Icon */}
            <QrCode className="w-40 h-40 text-emerald-500/20 animate-pulse" />
            
            <div className="absolute -bottom-24 left-0 right-0 text-center animate-bounce">
              <p className="text-emerald-400 font-black tracking-widest text-xs uppercase mb-2">Align QR within frame</p>
              <div className="flex justify-center gap-1">
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></div>
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping delay-75"></div>
                 <div className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping delay-150"></div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Instructions Footer */}
      {!isScanning && (
        <div className="bg-card dark:bg-neutral-900 border-t border-border px-8 py-8 rounded-t-[40px] shadow-2xl transition-colors duration-300">
          <div className="flex items-center gap-3 mb-6">
             <div className="bg-emerald-100 dark:bg-emerald-950 p-2.5 rounded-xl text-emerald-600">
               <Info className="w-5 h-5" />
             </div>
             <h3 className="text-foreground font-black text-lg tracking-tight">Trust Verification Flow</h3>
          </div>
          <div className="space-y-5">
            {[
              { icon: QrCode, text: "Locate the secure QR code on product label" },
              { icon: Scan, text: "Wait for the intelligent scanner to lock & focalize" },
              { icon: ShieldCheck, text: "Access immutable blockchain-backed certification" }
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-4 group">
                <div className="w-8 h-8 rounded-lg bg-muted dark:bg-neutral-800 flex items-center justify-center group-hover:bg-emerald-500 group-hover:text-white transition-all duration-300">
                   <step.icon className="w-4 h-4" />
                </div>
                <p className="text-muted-foreground text-xs font-bold uppercase tracking-widest leading-none">{step.text}</p>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
