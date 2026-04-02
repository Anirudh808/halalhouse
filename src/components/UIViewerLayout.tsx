import { useState } from 'react';
import { NavLink, Outlet, useLocation } from 'react-router';
import { Check, Sun, Moon } from 'lucide-react';

const ROUTES = [
  { path: '/login', label: 'login' },
  { path: '/home', label: 'home' },
  { path: '/restaurant', label: 'restaurant' },
  { path: '/cart', label: 'cart' },
  { path: '/checkout', label: 'checkout' },
  { path: '/order-confirmation', label: 'order-confirmation' },
  { path: '/orders', label: 'orders' },
  { path: '/scan', label: 'scan' },
  { path: '/store', label: 'store' },
  { path: '/loyalty', label: 'loyalty' },
  { path: '/profile', label: 'profile' },
  { path: '/staff', label: 'staff' },
];

export function UIViewerLayout() {
  const location = useLocation();
  const [isDark, setIsDark] = useState(false);
  
  return (
    <div className={`flex h-screen overflow-hidden font-sans w-full relative transition-colors duration-300`}>
      {/* Sidebar Navigation */}
      <div className={`w-64 border-r flex flex-col h-full z-20 shadow-sm relative shrink-0 transition-colors duration-300`}>
        <div className={`p-3 border-b flex items-center justify-between border-gray-100`}>
          <span className={`text-sm font-medium rounded px-2 py-1 flex items-center flex-1 border transition-colors duration-300 text-gray-600 bg-gray-50 border-gray-200`}>
            iPhone 16
          </span>
        </div>
        <div className="flex-1 overflow-y-auto py-3 no-scrollbar">
          <div className="px-3 pb-1">
            <NavLink to="/" className={({ isActive }) => `flex items-center px-3 py-1.5 text-[14px] rounded-md transition-all ${isActive && location.pathname === '/' ? 'bg-indigo-50/50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              home <span className={`font-normal ml-1 text-xs text-gray-400`}>(default page)</span>
              {location.pathname === '/' && <Check className={`w-4 h-4 ml-auto text-indigo-600`} />}
            </NavLink>
          </div>
          {ROUTES.map(route => (
            <div key={route.path} className="px-3 pb-0.5">
              <NavLink
                to={route.path}
                className={({ isActive }) => 
                  `flex items-center justify-between px-3 py-1.5 text-[14px] rounded-md transition-all ${
                    isActive ? 'bg-indigo-50/50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-50'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{route.label}</span>
                    {isActive && <Check className={`w-4 h-4 ${isDark ? 'text-emerald-400' : 'text-indigo-600'}`} />}
                  </>
                )}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className={`flex-1 flex flex-col relative transition-colors duration-300 bg-[#f7f7f7]`}>
        {/* Top Navbar */}
        <div className={`h-14 border-b flex items-center justify-between px-6 z-10 w-full shrink-0 transition-colors duration-300 bg-white border-gray-200`}>
          <div className="flex-1 invisible md:visible">
            <h2 className={`text-sm font-semibold text-gray-700`}>HalalHouse Showcase</h2>
          </div>
          
          <div className="flex items-center ml-auto space-x-4">
            <button 
              onClick={() => setIsDark(!isDark)}
              className={`p-2 rounded-full transition-all duration-300 bg-gray-100 text-gray-600 hover:bg-gray-200`}
              title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>

            <div className={`flex items-center space-x-1 border text-[11px] rounded overflow-hidden shadow-sm transition-colors duration-300 text-gray-500 bg-gray-50 border-gray-200`}>
              <div className={`flex items-center px-3 py-1 border-r border-gray-200`}>
                <span className={`mr-2 font-medium text-gray-400`}>W</span> <span className={`text-gray-700 font-semibold`}>393</span>
              </div>
              <div className="flex items-center px-3 py-1">
                <span className={`mr-2 font-medium text-gray-400`}>H</span> <span className={`text-gray-700 font-semibold`}>852</span>
              </div>
            </div>
          </div>
        </div>

        {/* Device Mockup Centered */}
        <div className="flex-1 flex items-center justify-center overflow-auto p-8 relative">
            <div 
              className={`shadow-[0_0_50px_rgba(0,0,0,0.15)] rounded-[45px] overflow-hidden relative flex flex-col flex-shrink-0 transition-all duration-500 ${isDark ? 'bg-neutral-900 ring-1 ring-white/10 dark' : 'bg-white'}`}
              style={{ width: 393, height: 852, transform: 'scale(1)' }}
            >
              {/* Minimal bezel */}
              <div className={`absolute inset-0 border-[6px] rounded-[45px] pointer-events-none z-40 transition-colors duration-300 ${isDark ? 'border-neutral-800' : 'border-[#f0f0f0]'}`}></div>
              

              
              {/* Render current screen */}
              <div className={`flex-1 overflow-x-hidden relative z-0 hide-scrollbar w-full h-full bg-background transition-colors duration-300`}>
                <Outlet />
              </div>
              
              {/* Fake Home Indicator */}
              <div className="absolute bottom-2 inset-x-0 h-5 flex justify-center items-end pb-2 pointer-events-none z-50">
                <div className={`w-32 h-1.5 rounded-full transition-colors duration-300 ${isDark ? 'bg-white/20' : 'bg-black/20'}`}></div>
              </div>
            </div>
        </div>
      </div>
      
      {/* Global styles to hide scrollbar in mockup */}
      <style>{`
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .hide-scrollbar {
          -ms-overflow-style: none;  /* IE and Edge */
          scrollbar-width: none;  /* Firefox */
        }
        .no-scrollbar::-webkit-scrollbar {
          display: none;
        }
        .no-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </div>
  );
}
