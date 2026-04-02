import { useState } from 'react';
import { Phone, ArrowLeft, ShieldCheck } from 'lucide-react';
import logo from '../assets/Halalhouse-logo.png';
import { Button } from '../components/ui/button';
import { Input } from '../components/ui/input';
import { InputOTP, InputOTPGroup, InputOTPSlot } from '../components/ui/input-otp';

export function LoginScreen() {
  const [phone, setPhone] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const [otp, setOtp] = useState('');

  const handleSendOTP = () => {
    if (phone.length >= 9) {
      setOtpSent(true);
    }
  };

  const handleVerifyOTP = () => {
    if (otp.length === 6) {
      // Mock login success
      localStorage.setItem('halalhouse_logged_in', 'true');
      console.log('Login successful in showcase');
    }
  };

  return (
    <div className="min-h-screen bg-background flex flex-col transition-colors duration-300">
      {/* Header */}
      <div className="bg-black dark:bg-black text-white py-16 px-8 rounded-b-[60px] shadow-[0_40px_100px_rgba(0,0,0,0.5)] relative overflow-hidden transition-all duration-700 border-b border-white/5">
        <div className="absolute top-0 right-0 w-96 h-96 bg-heading-gold/10 rounded-full -mr-48 -mt-48 blur-[120px] animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-500/5 rounded-full -ml-40 -mb-40 blur-[100px]"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-8">
            <div className="absolute inset-0 bg-heading-gold/20 blur-[40px] rounded-full scale-125 animate-pulse"></div>
            <img src={logo} alt="HalalHouse Logo" className="w-32 h-32 rounded-full shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-white/10 relative z-10 p-1" />
          </div>
          <h1 className="text-4xl font-black text-center tracking-tighter uppercase italic text-white drop-shadow-2xl">HalalHouse</h1>
          <p className="text-center text-heading-gold mt-3 font-black uppercase tracking-[0.2em] text-[10px] opacity-80 italic">Verified Culinary Experience</p>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-10 py-16">
        {!otpSent ? (
          <div className="space-y-10 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <div>
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-accent/50 dark:bg-neutral-900 p-3.5 rounded-[18px] border border-border/10 dark:border-neutral-800 transition-colors">
                  <ShieldCheck className="w-7 h-7 text-emerald-600 dark:text-heading-gold" />
                </div>
                <div>
                  <h2 className="text-2xl font-black text-foreground dark:text-white tracking-tighter uppercase italic transition-colors">Login</h2>
                  <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-widest opacity-60">OTP Verification</p>
                </div>
              </div>
              <p className="text-muted-foreground dark:text-muted-foreground text-[11px] font-bold leading-relaxed uppercase tracking-widest opacity-70 italic max-w-sm">
                Enter your mobile number to receive a secure login code.
              </p>
            </div>

            <div className="space-y-10">
              <div className="space-y-4">
                <label className="text-[10px] font-black text-muted-foreground dark:text-muted-foreground ml-4 uppercase tracking-[0.3em] italic">
                  Mobile Number
                </label>
                <div className="relative group">
                  <div className="absolute left-6 top-1/2 -translate-y-1/2 transition-colors duration-500 group-focus-within:text-heading-gold z-10">
                    <Phone className="w-6 h-6 text-muted-foreground dark:text-muted-foreground" />
                  </div>
                  <Input
                    type="tel"
                    placeholder="+34 600 000 000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-16 h-20 text-lg font-black rounded-[30px] border-border/50 dark:border-neutral-900 bg-card dark:bg-neutral-950 shadow-inner transition-all focus:ring-[15px] focus:ring-heading-gold/5 focus:border-heading-gold dark:text-white placeholder:opacity-30 tracking-widest uppercase italic"
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={phone.length < 9}
                className="w-full h-20 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 text-white dark:text-black text-xl font-black rounded-[35px] shadow-2xl active:scale-95 transition-all disabled:opacity-50 uppercase tracking-[0.3em] border-2 border-white/5 italic shadow-black/20"
              >
                Send OTP
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-12 animate-in fade-in slide-in-from-bottom-10 duration-700">
            <button 
              onClick={() => setOtpSent(false)}
              className="flex items-center gap-3 text-emerald-600 dark:text-heading-gold font-black text-[10px] uppercase tracking-[0.3em] italic hover:translate-x-[-6px] transition-transform opacity-70 group"
            >
              <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Change Number
            </button>

            <div>
               <h2 className="text-3xl font-black text-foreground dark:text-white mb-3 tracking-tighter uppercase italic transition-colors">Verify Code</h2>
               <p className="text-muted-foreground dark:text-muted-foreground text-[10px] font-black uppercase tracking-widest italic opacity-60">
                 Enter the 6-digit code sent to: <span className="text-foreground dark:text-heading-gold italic underline decoration-heading-gold/30">{phone}</span>
               </p>
            </div>

            <div className="space-y-12">
              <div className="flex justify-center pt-4">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  className="gap-5"
                >
                  <InputOTPGroup className="gap-3">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot 
                        key={index} 
                        index={index} 
                        className="w-14 h-20 rounded-[22px] border-2 border-border/50 dark:border-neutral-900 bg-card dark:bg-black text-foreground dark:text-heading-gold font-black text-3xl flex items-center justify-center transition-all focus:border-heading-gold focus:ring-[12px] focus:ring-heading-gold/5 shadow-inner italic"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="space-y-6">
                <Button
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6}
                  className="w-full h-20 bg-black dark:bg-heading-gold hover:bg-neutral-900 dark:hover:bg-heading-gold/80 text-white dark:text-black text-xl font-black rounded-[35px] shadow-2xl active:scale-95 transition-all disabled:opacity-50 uppercase tracking-[0.3em] border-2 border-white/5 italic shadow-black/20"
                >
                  Verify & Login
                </Button>

                <div className="text-center space-y-4 pt-4">
                  <p className="text-muted-foreground dark:text-muted-foreground text-[9px] font-black uppercase tracking-[0.4em] italic opacity-60 leading-none">Didn't receive code?</p>
                  <button className="text-emerald-600 dark:text-heading-gold font-black text-[10px] uppercase tracking-[0.3em] italic hover:underline underline-offset-8 decoration-2 decoration-heading-gold/40">
                    Resend OTP
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
