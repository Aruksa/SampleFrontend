export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface CreateProductData {
  name: string;
  description: string;
  price: number;
  category: string;
  stock: number;
  imageUrl?: string;
}

export interface UpdateProductData extends Partial<CreateProductData> {
  id: string;
}

export type ProductFormData = Omit<CreateProductData, 'imageUrl'> & {
  imageUrl: string;
};
