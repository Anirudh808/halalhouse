import { NavLink, Outlet, useLocation } from 'react-router';
import { Check } from 'lucide-react';

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
  
  return (
    <div className="flex h-screen overflow-hidden font-sans w-full relative bg-[#f7f7f7]">
      {/* Sidebar Navigation */}
      <div className="w-64 border-r flex flex-col h-full z-20 shadow-sm relative shrink-0 bg-white border-gray-200 transition-colors duration-300">
        <div className="p-3 border-b flex items-center justify-between border-gray-100 transition-colors duration-300">
          <span className="text-sm font-medium rounded px-2 py-1 flex items-center flex-1 border border-gray-200 text-gray-600 bg-gray-50 transition-colors duration-300">
            iPhone 16
          </span>
        </div>
        <div className="flex-1 overflow-y-auto py-3 no-scrollbar">
          <div className="px-3 pb-1">
            <NavLink to="/" className={({ isActive }) => `flex items-center px-3 py-1.5 text-[14px] rounded-md transition-all ${isActive && location.pathname === '/' ? 'bg-indigo-50/50 text-indigo-600 font-medium' : 'text-gray-600 hover:bg-gray-50'}`}>
              home <span className="font-normal ml-1 text-xs text-gray-400">(default page)</span>
              {location.pathname === '/' && <Check className="w-4 h-4 ml-auto text-indigo-600" />}
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
                    {isActive && <Check className="w-4 h-4 text-indigo-600" />}
                  </>
                )}
              </NavLink>
            </div>
          ))}
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 flex flex-col relative bg-[#f7f7f7]">
        {/* Top Navbar */}
        <div className="h-14 border-b flex items-center justify-between px-6 z-10 w-full shrink-0 bg-white border-gray-200 transition-colors duration-300">
          <div className="flex-1 invisible md:visible">
            <h2 className="text-sm font-semibold text-gray-700 transition-colors duration-300">HalalHouse Showcase</h2>
          </div>
          
          <div className="flex items-center ml-auto space-x-4">
            <div className="flex items-center space-x-1 border text-[11px] rounded overflow-hidden shadow-sm border-gray-200 text-gray-500 bg-gray-50 transition-colors duration-300">
              <div className="flex items-center px-3 py-1 border-r border-gray-200 transition-colors duration-300">
                <span className="mr-2 font-medium text-gray-400">W</span> <span className="font-semibold text-gray-700">393</span>
              </div>
              <div className="flex items-center px-3 py-1">
                <span className="mr-2 font-medium text-gray-400">H</span> <span className="font-semibold text-gray-700">852</span>
              </div>
            </div>
          </div>
        </div>

        {/* Device Mockup Centered */}
        <div className="flex-1 flex items-center justify-center overflow-auto p-8 relative">
            <div 
              className="shadow-[0_0_50px_rgba(0,0,0,0.15)] rounded-[45px] overflow-hidden relative flex flex-col flex-shrink-0 bg-white ring-1 ring-black/5"
              style={{ width: 393, height: 852, transform: 'scale(1)' }}
            >
              {/* Minimal bezel */}
              <div className="absolute inset-0 border-[6px] rounded-[45px] pointer-events-none z-40 border-[#f0f0f0] transition-colors duration-300"></div>
              
              {/* Render current screen - FORCED DARK MODE HERE */}
              <div className="flex-1 overflow-x-hidden relative z-0 hide-scrollbar w-full h-full bg-background dark transition-colors duration-300">
                <Outlet />
              </div>
              
              {/* Fake Home Indicator */}
              <div className="absolute bottom-2 inset-x-0 h-5 flex justify-center items-end pb-2 pointer-events-none z-50">
                <div className="w-32 h-1.5 rounded-full bg-white/20 transition-colors duration-300"></div>
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
