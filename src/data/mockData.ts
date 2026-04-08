// Mock Data for HalalHouse MVP

import {
  roastedVegetableSalad,
  packed,
  traditionalGazpacho,
  vegetableMedley,
  dish14,
  dish15,
  dish16,
  dish17,
  dish18
} from "./images";

export interface User {
  id: string;
  phone: string;
  name: string;
  points: number;
  email?: string;
  avatar?: string;
}

export interface Product {
  id: string;
  name: string;
  category: string;
  type: 'restaurant' | 'store';
  price: number;
  ingredients: string[];
  image: string;
  description?: string;
}

export interface OrderItem {
  productId: string;
  quantity: number;
  price: number;
}

export interface Order {
  id: string;
  userId: string;
  items: OrderItem[];
  total: number;
  status: 'new' | 'preparing' | 'ready' | 'completed';
  pickupTime: string;
  createdAt: string;
  type: 'restaurant' | 'store';
}

export interface ProductBatch {
  batchId: string;
  productId: string;
  manufactureDate: string;
  expiry: string;
  halalCertification: string;
  manufacturingLocation: string;
}

export interface QRCode {
  qrId: string;
  batchId: string;
  verificationUrl: string;
}

export interface PointsTransaction {
  id: string;
  userId: string;
  points: number;
  description: string;
  date: string;
}

// Mock User
export const currentUser: User = {
  id: 'user-1',
  phone: '+34612345678',
  name: 'Ahmed Hassan',
  points: 120,
  email: 'ahmed.hassan@halalhouse.tv',
  avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=400&q=80',
};

// Mock Restaurant Products
export const restaurantProducts: Product[] = [
  {
    id: 'rest-1',
    name: 'Artichokes with garlic prawns and ham',
    category: 'Specialties',
    type: 'restaurant',
    price: 15.5,
    ingredients: ['Artichokes', 'Prawns', 'Ham', 'Garlic', 'Olive Oil'],
    image: dish14,
  },
  {
    id: 'rest-2',
    name: 'Vegetable medley',
    category: 'Specialties',
    type: 'restaurant',
    price: 18.0,
    ingredients: ['Ostrich Meat', 'Cheese', 'Herbs'],
    image:dish15,
  },
  {
    id: 'rest-3',
    name: 'Braised beef cheeks',
    category: 'Mains',
    type: 'restaurant',
    price: 16.5,
    ingredients: ['Beef Cheeks', 'Wine', 'Vegetables', 'Spices'],
    image: dish15,
  },
  {
    id: 'rest-4',
    name: 'Garlic prawns',
    category: 'Seafood',
    type: 'restaurant',
    price: 14.0,
    ingredients: ['Prawns', 'Garlic', 'Olive Oil', 'Parsley'],
    image: dish14,
  },
  {
    id: 'rest-5',
    name: 'Traditional gazpacho',
    category: 'Soups',
    type: 'restaurant',
    price: 8.5,
    ingredients: ['Tomato', 'Cucumber', 'Pepper', 'Olive Oil', 'Garlic'],
    image: traditionalGazpacho,
  },
  {
    id: 'rest-6',
    name: 'Stewed bull meat',
    category: 'Mains',
    type: 'restaurant',
    price: 17.5,
    ingredients: ['Bull Meat', 'Carrots', 'Potatoes', 'Broth'],
    image: dish18,
  },
  {
    id: 'rest-7',
    name: 'Chicken broth with vegetables',
    category: 'Soups',
    type: 'restaurant',
    price: 7.5,
    ingredients: ['Chicken', 'Celery', 'Carrots', 'Onions'],
    image: 'https://images.unsplash.com/photo-1473093295043-cdd812d0e601?w=500&q=80',
  },
  {
    id: 'rest-8',
    name: 'Roasted vegetable salad',
    category: 'Salads',
    type: 'restaurant',
    price: 9.0,
    ingredients: ['Mixed Bell Peppers', 'Zucchini', 'Eggplant', 'Olive Oil'],
    image: roastedVegetableSalad,
  },
];

// Mock Store Products
export const storeProducts: Product[] = [
  {
    id: 'store-1',
    name: 'Mango and banana jam',
    category: 'Jams',
    type: 'store',
    price: 5.99,
    ingredients: ['Mango', 'Banana', 'Sugar', 'Pectin'],
    image: packed,
    description: 'Sweet homemade fusion jam.',
  },
  {
    id: 'store-2',
    name: 'Apple jam',
    category: 'Jams',
    type: 'store',
    price: 4.99,
    ingredients: ['Apples', 'Sugar', 'Cinnamon', 'Lemon Juice'],
    image: packed,
    description: 'Classic aromatic apple jam.',
  },
  {
    id: 'store-3',
    name: 'Quince and walnut jam',
    category: 'Jams',
    type: 'store',
    price: 6.99,
    ingredients: ['Quince', 'Walnuts', 'Sugar', 'Spices'],
    image: packed,
    description: 'A traditional delicacy packed with flavor.',
  },
  {
    id: 'store-4',
    name: 'Tomato jam I',
    category: 'Jams',
    type: 'store',
    price: 4.99,
    ingredients: ['Tomatoes', 'Sugar', 'Lemon'],
    image: packed,
    description: 'Perfect sweet and savory spread for toasts.',
  },
  {
    id: 'store-5',
    name: 'Spinach pâté',
    category: 'Pâtés',
    type: 'store',
    price: 7.99,
    ingredients: ['Spinach', 'Herbs', 'Olive Oil', 'Spices'],
    image: packed,
    description: 'Creamy vegan spinach pâté.',
  },
  {
    id: 'store-6',
    name: 'Ostrich pâté',
    category: 'Pâtés',
    type: 'store',
    price: 9.99,
    ingredients: ['Ostrich Meat', 'Herbs', 'Spices'],
    image: packed,
    description: 'Premium ostrich pâté.',
  },
  {
    id: 'store-7',
    name: 'White beans with quail',
    category: 'Ready Meals',
    type: 'store',
    price: 12.99,
    ingredients: ['White Beans', 'Quail', 'Tomato', 'Spices'],
    image: packed,
    description: 'Traditional slow-cooked meal.',
  },
  {
    id: 'store-8',
    name: 'Peppers stuffed with seafood',
    category: 'Ready Meals',
    type: 'store',
    price: 13.99,
    ingredients: ['Peppers', 'Seafood Mix', 'Rice', 'Sauce'],
    image: packed,
    description: 'Deliciously stuffed peppers ready to heat.',
  },
];

// Mock Orders
export const mockOrders: Order[] = [
  {
    id: 'ORD-1001',
    userId: 'user-1',
    items: [
      { productId: 'rest-1', quantity: 2, price: 8.5 },
      { productId: 'rest-7', quantity: 2, price: 3.5 },
    ],
    total: 24.0,
    status: 'ready',
    pickupTime: '14:30',
    createdAt: '2026-04-01T13:15:00',
    type: 'restaurant',
  },
  {
    id: 'ORD-1002',
    userId: 'user-1',
    items: [
      { productId: 'rest-4', quantity: 1, price: 9.0 },
      { productId: 'rest-8', quantity: 1, price: 4.5 },
    ],
    total: 13.5,
    status: 'completed',
    pickupTime: '12:00',
    createdAt: '2026-03-30T11:30:00',
    type: 'restaurant',
  },
];

// Mock Product Batches for QR Verification
export const productBatches: ProductBatch[] = [
  {
    batchId: 'BATCH-2026-03-15-001',
    productId: 'store-1',
    manufactureDate: '2026-03-15',
    expiry: '2027-03-15',
    halalCertification: 'IFANCA Certified #HC-458291',
    manufacturingLocation: 'Tánger, Morocco',
  },
  {
    batchId: 'BATCH-2026-03-20-002',
    productId: 'store-4',
    manufactureDate: '2026-03-20',
    expiry: '2027-03-20',
    halalCertification: 'IFANCA Certified #HC-458292',
    manufacturingLocation: 'Tánger, Morocco',
  },
];

// Mock QR Codes
export const qrCodes: QRCode[] = [
  {
    qrId: 'QR-001',
    batchId: 'BATCH-2026-03-15-001',
    verificationUrl: '/verify/BATCH-2026-03-15-001',
  },
  {
    qrId: 'QR-002',
    batchId: 'BATCH-2026-03-20-002',
    verificationUrl: '/verify/BATCH-2026-03-20-002',
  },
];

// Mock Points Transactions
export const pointsTransactions: PointsTransaction[] = [
  {
    id: 'pt-1',
    userId: 'user-1',
    points: 20,
    description: 'Order #ORD-1001',
    date: '2026-04-01',
  },
  {
    id: 'pt-2',
    userId: 'user-1',
    points: 15,
    description: 'Order #ORD-1002',
    date: '2026-03-30',
  },
  {
    id: 'pt-3',
    userId: 'user-1',
    points: 25,
    description: 'Order #ORD-1000',
    date: '2026-03-28',
  },
  {
    id: 'pt-4',
    userId: 'user-1',
    points: 10,
    description: 'Welcome Bonus',
    date: '2026-03-25',
  },
  {
    id: 'pt-5',
    userId: 'user-1',
    points: 50,
    description: 'Grand Opening Bonus',
    date: '2026-03-25',
  },
];
