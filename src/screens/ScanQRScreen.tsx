import { useState } from 'react';

import { ArrowLeft, QrCode, Scan } from 'lucide-react';
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
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      {/* Header */}
      <div className="bg-black/50 text-white px-6 py-4 flex items-center gap-3">
        <button
          onClick={() => navigate('/home')}
          className="hover:bg-white/10 rounded-full p-2"
        >
          <ArrowLeft className="w-6 h-6" />
        </button>
        <h1 className="text-xl font-bold">Scan QR Code</h1>
      </div>

      {/* Camera View */}
      <div className="flex-1 relative flex items-center justify-center p-6">
        {!isScanning ? (
          <div className="text-center">
            <div className="bg-emerald-600 rounded-full p-8 mb-6 mx-auto w-fit">
              <QrCode className="w-20 h-20 text-white" />
            </div>
            <h2 className="text-white text-2xl font-bold mb-3">Verify Halal Products</h2>
            <p className="text-gray-300 mb-8 max-w-sm mx-auto">
              Scan the QR code on any HalalHouse product to verify its halal certification and
              batch details.
            </p>
            <Button
              onClick={handleStartScan}
              size="lg"
              className="bg-emerald-600 hover:bg-emerald-700 h-14 px-8"
            >
              <Scan className="w-5 h-5 mr-2" />
              Start Scanning
            </Button>
          </div>
        ) : (
          <div className="relative w-full max-w-sm aspect-square">
            {/* Scanning Frame */}
            <div className="absolute inset-0 border-4 border-emerald-500 rounded-2xl">
              <div className="absolute top-0 left-0 w-16 h-16 border-t-4 border-l-4 border-white rounded-tl-2xl"></div>
              <div className="absolute top-0 right-0 w-16 h-16 border-t-4 border-r-4 border-white rounded-tr-2xl"></div>
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b-4 border-l-4 border-white rounded-bl-2xl"></div>
              <div className="absolute bottom-0 right-0 w-16 h-16 border-b-4 border-r-4 border-white rounded-br-2xl"></div>
            </div>

            {/* Scanning Line Animation */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="w-full h-1 bg-emerald-500 shadow-lg shadow-emerald-500/50 animate-pulse"></div>
            </div>

            {/* Camera Icon */}
            <div className="absolute inset-0 flex items-center justify-center">
              <QrCode className="w-32 h-32 text-white/30" />
            </div>
          </div>
        )}

        {isScanning && (
          <div className="absolute bottom-20 left-0 right-0 text-center">
            <p className="text-white font-medium mb-2">Scanning...</p>
            <p className="text-gray-400 text-sm">Position QR code within the frame</p>
          </div>
        )}
      </div>

      {/* Instructions */}
      {!isScanning && (
        <div className="bg-black/50 px-6 py-6">
          <h3 className="text-white font-semibold mb-3">How it works:</h3>
          <div className="space-y-2 text-gray-300 text-sm">
            <p>1. Find the QR code on the product packaging</p>
            <p>2. Tap "Start Scanning" and position your camera</p>
            <p>3. View complete halal certification details</p>
          </div>
        </div>
      )}
    </div>
  );
}
