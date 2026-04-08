import { useEffect } from 'react';
import logo from '../assets/Halalhouse-logo.png';
import { halalBanner } from '../data/images';

export function SplashScreen() {
  useEffect(() => {
    // Show splash screen indefinitely for the showcase
  }, []);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${halalBanner})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-black/60 backdrop-blur-[2px] transition-colors duration-300 dark:bg-black/60"></div>
      </div>

      <div className="relative z-10 text-center px-6">
        <div className="flex items-center justify-center mb-8">
          <div className="relative">
            <div className="absolute inset-0 bg-[#bf9906] blur-2xl opacity-20 rounded-full animate-pulse"></div>
            <img
              src={logo}
              alt="HalalHouse Logo"
              className="w-36 h-36 rounded-full shadow-2xl border-4 border-white/20 relative z-10 transition-transform duration-700 hover:scale-105"
            />
          </div>
        </div>

        <h1 className="text-5xl font-bold text-heading-gold mb-4 tracking-tight drop-shadow-lg">
          Halal House
        </h1>

        <div className="space-y-3 mt-10">
          <p className="text-white/90 text-xl font-light transform transition-all duration-500 delay-100 hover:scale-105">Eat it fresh.</p>
          <p className="text-white/90 text-xl font-light transform transition-all duration-500 delay-200 hover:scale-105">Buy it packaged.</p>
          <div className="pt-4">
            <span className="bg-heading-gold backdrop-blur-md px-6 py-2 rounded-full border border-white/10 text-black font-black text-lg shadow-2xl uppercase tracking-[0.2em]">
              Verify it halal.
            </span>
          </div>
        </div>
      </div>

      {/* Floating accent elements/particles could go here for "wow" factor */}
    </div>
  );
}
