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
      <div className="bg-emerald-600 dark:bg-emerald-700 text-white py-10 px-6 rounded-b-[40px] shadow-xl relative overflow-hidden transition-colors duration-300">
        <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -mr-20 -mt-20 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-emerald-400/20 rounded-full -ml-16 -mb-16 blur-2xl"></div>
        
        <div className="relative z-10 flex flex-col items-center">
          <div className="relative mb-6">
            <div className="absolute inset-0 bg-white/20 blur-xl rounded-full scale-110"></div>
            <img src={logo} alt="HalalHouse Logo" className="w-24 h-24 rounded-full shadow-2xl border-4 border-white/20 relative z-10" />
          </div>
          <h1 className="text-3xl font-black text-center tracking-tight">HalalHouse</h1>
          <p className="text-center text-emerald-100 mt-2 font-medium opacity-90">Tánger's newest halal experience</p>
        </div>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-8 py-10">
        {!otpSent ? (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
                <h2 className="text-2xl font-bold text-foreground">Secure Login</h2>
              </div>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Enter your phone number to receive a secure verification code
              </p>
            </div>

            <div className="space-y-6">
              <div className="space-y-3">
                <label className="text-sm font-bold text-foreground/80 ml-1 uppercase tracking-wider">
                  Phone Number
                </label>
                <div className="relative group">
                  <div className="absolute left-4 top-1/2 -translate-y-1/2 transition-colors duration-300 group-focus-within:text-emerald-500">
                    <Phone className="w-5 h-5 text-muted-foreground" />
                  </div>
                  <Input
                    type="tel"
                    placeholder="+34 612 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-12 h-14 text-base rounded-2xl border-border bg-card shadow-sm transition-all focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500"
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={phone.length < 9}
                className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98] disabled:opacity-50"
              >
                Send Secure Code
              </Button>
              
              <p className="text-center text-[11px] text-muted-foreground font-medium px-4">
                By continuing, you agree to our <span className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2">Terms of Service</span> and <span className="text-emerald-600 dark:text-emerald-400 underline underline-offset-2">Privacy Policy</span>.
              </p>
            </div>
          </div>
        ) : (
          <div className="space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <button 
              onClick={() => setOtpSent(false)}
              className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:translate-x-[-4px] transition-transform"
            >
              <ArrowLeft className="w-4 h-4" /> Change phone number
            </button>

            <div>
              <h2 className="text-2xl font-bold text-foreground mb-2">Verify Phone</h2>
              <p className="text-muted-foreground text-sm font-medium leading-relaxed">
                Enter the 6-digit code we sent to <span className="text-foreground font-bold">{phone}</span>
              </p>
            </div>

            <div className="space-y-8">
              <div className="flex justify-center pt-2">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                  className="gap-3"
                >
                  <InputOTPGroup className="gap-2">
                    {[0, 1, 2, 3, 4, 5].map((index) => (
                      <InputOTPSlot 
                        key={index} 
                        index={index} 
                        className="w-11 h-14 rounded-xl border-2 border-border bg-card text-foreground font-black text-xl flex items-center justify-center transition-all focus:border-emerald-500 focus:ring-4 focus:ring-emerald-500/10"
                      />
                    ))}
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <div className="space-y-4">
                <Button
                  onClick={handleVerifyOTP}
                  disabled={otp.length !== 6}
                  className="w-full h-14 bg-emerald-600 hover:bg-emerald-700 dark:bg-emerald-700 dark:hover:bg-emerald-600 text-white text-lg font-bold rounded-2xl shadow-lg shadow-emerald-600/20 transition-all active:scale-[0.98] disabled:opacity-50"
                >
                  Verify & Login
                </Button>

                <div className="text-center space-y-1">
                  <p className="text-muted-foreground text-sm font-medium">Didn't receive the code?</p>
                  <button className="text-emerald-600 dark:text-emerald-400 font-bold text-sm hover:underline underline-offset-4 decoration-2">
                    Resend Code
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
