import { createBrowserRouter } from 'react-router';
import { UIViewerLayout } from './components/UIViewerLayout';
import { SplashScreen } from './screens/SplashScreen';
import { LoginScreen } from './screens/LoginScreen';
import { HomeScreen } from './screens/HomeScreen';
import { RestaurantMenuScreen } from './screens/RestaurantMenuScreen';
import { CartScreen } from './screens/CartScreen';
import { CheckoutScreen } from './screens/CheckoutScreen';
import { OrderConfirmationScreen } from './screens/OrderConfirmationScreen';
import { OrderHistoryScreen } from './screens/OrderHistoryScreen';
import { ScanQRScreen } from './screens/ScanQRScreen';
import { ProductVerificationScreen } from './screens/ProductVerificationScreen';
import { StoreCatalogScreen } from './screens/StoreCatalogScreen';
import { ProductDetailScreen } from './screens/ProductDetailScreen';
import { LoyaltyScreen } from './screens/LoyaltyScreen';
import { ProfileScreen } from './screens/ProfileScreen';
import { StaffDashboardScreen } from './screens/StaffDashboardScreen';

export const router = createBrowserRouter([
  {
    path: '/',
    Component: UIViewerLayout,
    children: [
      {
        path: '/',
        Component: SplashScreen,
      },
      {
        path: '/login',
        Component: LoginScreen,
      },
      {
        path: '/home',
        Component: HomeScreen,
      },
      {
        path: '/restaurant',
        Component: RestaurantMenuScreen,
      },
      {
        path: '/cart',
        Component: CartScreen,
      },
      {
        path: '/checkout',
        Component: CheckoutScreen,
      },
      {
        path: '/order-confirmation',
        Component: OrderConfirmationScreen,
      },
      {
        path: '/orders',
        Component: OrderHistoryScreen,
      },
      {
        path: '/scan',
        Component: ScanQRScreen,
      },
      {
        path: '/verify',
        Component: ProductVerificationScreen,
      },
      {
        path: '/verify/:batchId',
        Component: ProductVerificationScreen,
      },
      {
        path: '/store',
        Component: StoreCatalogScreen,
      },
      {
        path: '/product',
        Component: ProductDetailScreen,
      },
      {
        path: '/product/:productId',
        Component: ProductDetailScreen,
      },
      {
        path: '/loyalty',
        Component: LoyaltyScreen,
      },
      {
        path: '/profile',
        Component: ProfileScreen,
      },
      {
        path: '/staff',
        Component: StaffDashboardScreen,
      },
    ],
  },
]);
