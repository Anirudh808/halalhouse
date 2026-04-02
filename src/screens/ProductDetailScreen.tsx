
import { ArrowLeft, Store, ShieldCheck, QrCode } from 'lucide-react';
import { storeProducts } from '../data/mockData';
import { Button } from '../components/ui/button';
import { Badge } from '../components/ui/badge';
import { ImageWithFallback } from '../components/figma/ImageWithFallback';



export function ProductDetailScreen() {
  const navigate = (path: string) => console.log('navigate', path);
  const productId = "store-1"; // Hardcoded default for showcase

  const product = storeProducts.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
        <div className="text-center">
          <p className="text-gray-600 mb-4">Product not found</p>
          <Button onClick={() => navigate('/store')}>Back to Store</Button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      {/* Header */}
      <div className="bg-white sticky top-0 z-10 shadow-sm">
        <div className="px-6 py-4 flex items-center gap-3">
          <button onClick={() => navigate('/store')} className="hover:bg-gray-100 rounded-full p-2">
            <ArrowLeft className="w-6 h-6 text-gray-900" />
          </button>
          <h1 className="text-lg font-bold text-gray-900">Product Details</h1>
        </div>
      </div>

      {/* Product Image */}
      <div className="relative aspect-square bg-white">
        <ImageWithFallback
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
        <Badge className="absolute top-4 right-4 bg-emerald-600 text-white">
          ✓ Halal Certified
        </Badge>
      </div>

      {/* Product Info */}
      <div className="px-6 py-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <Badge className="bg-emerald-100 text-emerald-700 mb-2">
                {product.category}
              </Badge>
              <h2 className="text-2xl font-bold text-gray-900 mb-2">{product.name}</h2>
              <p className="text-3xl font-bold text-emerald-600">€{product.price.toFixed(2)}</p>
            </div>
          </div>

          {product.description && (
            <p className="text-gray-700 mb-4">{product.description}</p>
          )}

          <div className="flex items-center gap-2 bg-emerald-50 rounded-lg px-4 py-3">
            <Store className="w-5 h-5 text-emerald-600" />
            <span className="text-sm font-medium text-emerald-700">Available in store</span>
          </div>
        </div>
      </div>

      {/* Ingredients */}
      <div className="px-6 pb-6">
        <div className="bg-white rounded-2xl shadow-md p-6">
          <h3 className="font-bold text-gray-900 mb-3">Ingredients</h3>
          <div className="flex flex-wrap gap-2">
            {product.ingredients.map((ingredient, idx) => (
              <Badge
                key={idx}
                variant="outline"
                className="border-gray-300 text-gray-700"
              >
                {ingredient}
              </Badge>
            ))}
          </div>
        </div>
      </div>

      {/* Halal Verification */}
      <div className="px-6 pb-6">
        <div className="bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl shadow-lg p-6 text-white">
          <div className="flex items-start gap-4">
            <ShieldCheck className="w-8 h-8 flex-shrink-0" />
            <div className="flex-1">
              <h3 className="font-bold text-lg mb-2">100% Halal Certified</h3>
              <p className="text-emerald-100 text-sm mb-3">
                This product is certified by IFANCA and meets all Islamic dietary requirements.
              </p>
              <button
                onClick={() => navigate('/scan')}
                className="flex items-center gap-2 bg-white/20 hover:bg-white/30 rounded-lg px-4 py-2 text-sm font-medium transition"
              >
                <QrCode className="w-4 h-4" />
                Scan QR to verify
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Fixed Bottom Bar */}
      <div className="fixed bottom-0 left-0 right-0 bg-white border-t shadow-lg px-6 py-4">
        <div className="flex items-center gap-3">
          <div className="flex-1">
            <p className="text-sm text-gray-600">Price</p>
            <p className="text-2xl font-bold text-emerald-600">€{product.price.toFixed(2)}</p>
          </div>
          <Button
            onClick={() => navigate('/store')}
            className="bg-emerald-600 hover:bg-emerald-700 h-12 px-6"
          >
            <Store className="w-5 h-5 mr-2" />
            Find in Store
          </Button>
        </div>
      </div>
    </div>
  );
}
