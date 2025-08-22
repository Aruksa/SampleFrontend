export const PRODUCT_CATEGORIES = [
  'Electronics',
  'Clothing',
  'Books',
  'Home & Garden',
  'Sports',
  'Health & Beauty',
  'Toys',
  'Food & Beverages'
] as const;

export const PRODUCT_STATUS = {
  IN_STOCK: 'in_stock',
  OUT_OF_STOCK: 'out_of_stock',
  LOW_STOCK: 'low_stock'
} as const;

export const LOW_STOCK_THRESHOLD = 10;

export const FORM_VALIDATION_RULES = {
  name: {
    required: true,
    message: 'Product name is required',
    minLength: 2,
    maxLength: 100
  },
  description: {
    required: true,
    message: 'Product description is required',
    minLength: 10,
    maxLength: 500
  },
  price: {
    required: true,
    message: 'Product price is required',
    min: 0.01
  },
  category: {
    required: true,
    message: 'Product category is required'
  },
  stock: {
    required: true,
    message: 'Stock quantity is required',
    min: 0
  }
};

export const TABLE_PAGE_SIZE = 10;
export const TABLE_PAGE_SIZE_OPTIONS = ['10', '20', '50', '100'];
