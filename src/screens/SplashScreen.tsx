import { useEffect } from 'react';

import logo from '../assets/Halalhouse-logo.png';

export function SplashScreen() {
  useEffect(() => {
    // Show splash screen indefinitely for the showcase
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-600 to-emerald-700 flex flex-col items-center justify-center px-6">
      <div className="text-center">
        <div className="flex items-center justify-center mb-6">
          <img src={logo} alt="HalalHouse Logo" className="w-32 h-32 rounded-full shadow-2xl" />
        </div>
        
        <h1 className="text-4xl font-bold text-white mb-3">HalalHouse</h1>
        
        <div className="space-y-2 mt-8">
          <p className="text-white/90 text-lg">Eat it fresh.</p>
          <p className="text-white/90 text-lg">Buy it packaged.</p>
          <p className="text-white/90 text-lg font-semibold">Verify it halal.</p>
        </div>
      </div>
    </div>
  );
}
