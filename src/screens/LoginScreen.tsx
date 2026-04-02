import { useState } from 'react';

import { Phone } from 'lucide-react';
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
    <div className="min-h-screen bg-gray-50 flex flex-col">
      {/* Header */}
      <div className="bg-emerald-600 text-white py-8 px-6">
        <div className="flex items-center justify-center mb-4">
          <img src={logo} alt="HalalHouse Logo" className="w-20 h-20 rounded-full shadow-md" />
        </div>
        <h1 className="text-2xl font-bold text-center">Welcome to HalalHouse</h1>
        <p className="text-center text-emerald-100 mt-2">Tánger's newest halal experience</p>
      </div>

      {/* Login Form */}
      <div className="flex-1 px-6 py-8">
        {!otpSent ? (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Login with Phone</h2>
              <p className="text-gray-600 text-sm">
                Enter your phone number to receive a verification code
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <label className="text-sm font-medium text-gray-700 mb-2 block">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                  <Input
                    type="tel"
                    placeholder="+34 612 345 678"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="pl-10 h-12 text-base"
                  />
                </div>
              </div>

              <Button
                onClick={handleSendOTP}
                disabled={phone.length < 9}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-base"
              >
                Send OTP
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-6">
            <div>
              <h2 className="text-xl font-semibold mb-2">Enter Verification Code</h2>
              <p className="text-gray-600 text-sm">
                We sent a 6-digit code to {phone}
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex justify-center">
                <InputOTP
                  maxLength={6}
                  value={otp}
                  onChange={(value) => setOtp(value)}
                >
                  <InputOTPGroup>
                    <InputOTPSlot index={0} />
                    <InputOTPSlot index={1} />
                    <InputOTPSlot index={2} />
                    <InputOTPSlot index={3} />
                    <InputOTPSlot index={4} />
                    <InputOTPSlot index={5} />
                  </InputOTPGroup>
                </InputOTP>
              </div>

              <Button
                onClick={handleVerifyOTP}
                disabled={otp.length !== 6}
                className="w-full h-12 bg-emerald-600 hover:bg-emerald-700 text-base"
              >
                Verify & Login
              </Button>

              <button
                onClick={() => setOtpSent(false)}
                className="w-full text-center text-sm text-emerald-600 hover:underline"
              >
                Change phone number
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
