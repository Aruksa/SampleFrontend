import type { Product } from '../../../types/product';

export const DUMMY_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Wireless Bluetooth Headphones',
    description: 'High-quality wireless headphones with noise cancellation and long battery life. Perfect for music lovers and professionals.',
    price: 199.99,
    category: 'Electronics',
    stock: 25,
    imageUrl: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
    createdAt: new Date('2024-01-15'),
    updatedAt: new Date('2024-01-15')
  },
  {
    id: '2',
    name: 'Cotton T-Shirt',
    description: 'Comfortable 100% organic cotton t-shirt available in multiple colors. Soft fabric and perfect fit.',
    price: 29.99,
    category: 'Clothing',
    stock: 50,
    imageUrl: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
    createdAt: new Date('2024-01-10'),
    updatedAt: new Date('2024-01-12')
  },
  {
    id: '3',
    name: 'JavaScript: The Definitive Guide',
    description: 'Comprehensive guide to JavaScript programming. Essential reading for web developers and programmers.',
    price: 45.50,
    category: 'Books',
    stock: 15,
    imageUrl: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?w=300&h=300&fit=crop',
    createdAt: new Date('2024-01-08'),
    updatedAt: new Date('2024-01-08')
  },
  {
    id: '4',
    name: 'Plant Pot Set',
    description: 'Beautiful ceramic plant pot set with drainage holes. Perfect for indoor plants and herbs.',
    price: 35.00,
    category: 'Home & Garden',
    stock: 8,
    imageUrl: 'https://images.unsplash.com/photo-1485955900006-10f4d324d411?w=300&h=300&fit=crop',
    createdAt: new Date('2024-01-05'),
    updatedAt: new Date('2024-01-07')
  },
  {
    id: '5',
    name: 'Running Shoes',
    description: 'Lightweight running shoes with excellent cushioning and support. Ideal for daily training and marathons.',
    price: 120.00,
    category: 'Sports',
    stock: 30,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
    createdAt: new Date('2024-01-03'),
    updatedAt: new Date('2024-01-06')
  },
  {
    id: '6',
    name: 'Face Moisturizer',
    description: 'Hydrating face moisturizer with SPF 30. Suitable for all skin types and provides all-day protection.',
    price: 25.99,
    category: 'Health & Beauty',
    stock: 40,
    imageUrl: 'https://images.unsplash.com/photo-1556228720-195a672e8a03?w=300&h=300&fit=crop',
    createdAt: new Date('2024-01-01'),
    updatedAt: new Date('2024-01-04')
  },
  {
    id: '7',
    name: 'Building Blocks Set',
    description: 'Educational building blocks set for children. Promotes creativity and problem-solving skills.',
    price: 49.99,
    category: 'Toys',
    stock: 20,
    imageUrl: 'https://images.unsplash.com/photo-1558060370-d140d92d6d37?w=300&h=300&fit=crop',
    createdAt: new Date('2023-12-28'),
    updatedAt: new Date('2024-01-02')
  },
  {
    id: '8',
    name: 'Premium Coffee Beans',
    description: 'Single-origin coffee beans with rich flavor profile. Perfect for espresso and drip coffee.',
    price: 18.50,
    category: 'Food & Beverages',
    stock: 5,
    imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?w=300&h=300&fit=crop',
    createdAt: new Date('2023-12-25'),
    updatedAt: new Date('2023-12-30')
  }
];
