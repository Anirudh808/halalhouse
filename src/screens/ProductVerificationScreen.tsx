
import { ArrowLeft, CheckCircle, MapPin, Calendar, Package, ShieldCheck, FileText } from 'lucide-react';
import { productBatches, storeProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';

export function ProductVerificationScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const batchId = "BATCH-001"; // Hardcoded default for showcase

  const batch = productBatches.find((b) => b.batchId === batchId);
  const product = batch ? storeProducts.find((p) => p.id === batch.productId) : null;

  if (!batch || !product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Batch not found</p>
          <Button onClick={() => navigate('/home')}>Go Home</Button>
        </div>
      </div>
    );
  }

  const manufactureDate = new Date(batch.manufactureDate);
  const expiryDate = new Date(batch.expiry);

  return (
    <div className="min-h-screen bg-gradient-to-b from-emerald-50 to-white">
      {/* Header */}
      <div className="bg-emerald-600 text-white px-6 py-4">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate('/home')} className="hover:bg-white/10 rounded-full p-2">
            <ArrowLeft className="w-6 h-6" />
          </button>
          <h1 className="text-xl font-bold">Halal Verification</h1>
        </div>
      </div>

      {/* Verified Badge - PREMIUM DESIGN */}
      <div className="px-6 py-8">
        <div className="bg-gradient-to-br from-emerald-600 to-teal-600 rounded-3xl shadow-2xl p-8 text-center text-white">
          <div className="bg-white rounded-full p-6 w-fit mx-auto mb-4">
            <CheckCircle className="w-16 h-16 text-emerald-600" />
          </div>
          <h2 className="text-3xl font-bold mb-2">✓ Halal Verified</h2>
          <p className="text-emerald-100 text-lg mb-4">
            This product is certified halal
          </p>
          <Badge className="bg-yellow-400 text-yellow-900 text-sm px-4 py-1">
            {batch.halalCertification}
          </Badge>
        </div>
      </div>

      {/* Product Information */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          {/* Product Header */}
          <div className="bg-emerald-50 px-6 py-4 border-b">
            <h3 className="font-bold text-gray-900 text-xl">{product.name}</h3>
            <p className="text-gray-600 text-sm mt-1">{product.category}</p>
          </div>

          {/* Batch Details */}
          <div className="p-6 space-y-4">
            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 rounded-full p-3">
                <Package className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Batch Number</p>
                <p className="text-gray-600 text-sm font-mono">{batch.batchId}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 rounded-full p-3">
                <MapPin className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Manufacturing Location</p>
                <p className="text-gray-600 text-sm">{batch.manufacturingLocation}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 rounded-full p-3">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Production Date</p>
                <p className="text-gray-600 text-sm">
                  {manufactureDate.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 rounded-full p-3">
                <Calendar className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Expiry Date</p>
                <p className="text-gray-600 text-sm">
                  {expiryDate.toLocaleDateString('en-GB', {
                    day: 'numeric',
                    month: 'long',
                    year: 'numeric',
                  })}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="bg-emerald-100 rounded-full p-3">
                <ShieldCheck className="w-6 h-6 text-emerald-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-900 mb-1">Halal Certification</p>
                <p className="text-gray-600 text-sm">{batch.halalCertification}</p>
                <p className="text-emerald-600 text-xs mt-1">
                  ✓ Verified by IFANCA (Islamic Food and Nutrition Council of America)
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-lg p-6">
          <div className="flex items-center gap-3 mb-4">
            <FileText className="w-6 h-6 text-emerald-600" />
            <h3 className="font-bold text-gray-900 text-lg">Ingredients</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ingredient, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-emerald-200 text-emerald-700 bg-emerald-50"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Trust Badge */}
      <div className="px-6 pb-8">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl p-6 text-white text-center">
          <ShieldCheck className="w-12 h-12 mx-auto mb-3" />
          <h4 className="font-bold text-lg mb-2">100% Halal Guaranteed</h4>
          <p className="text-emerald-100 text-sm">
            All HalalHouse products are sourced from certified halal suppliers and meet strict
            Islamic dietary requirements.
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="px-6 pb-6 space-y-3">
        <Button
          onClick={() => navigate('/store')}
          className="w-full h-12 bg-emerald-600 hover:bg-emerald-700"
        >
          Shop This Product
        </Button>
        <Button
          onClick={() => navigate('/scan')}
          variant="outline"
          className="w-full h-12 border-emerald-600 text-emerald-600 hover:bg-emerald-50"
        >
          Scan Another Product
        </Button>
      </div>
    </div>
  );
}
