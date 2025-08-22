import React from 'react';
import { Row, Col, Empty } from 'antd';
import { ProductCard } from '../layouts/ProductCard';
import type { Product } from '../../../../types/product';

interface ProductListProps {
  products: Product[];
  loading?: boolean;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export const ProductList: React.FC<ProductListProps> = ({
  products,
  loading = false,
  onEdit,
  onDelete
}) => {
  if (!loading && products.length === 0) {
    return (
      <Empty
        description="No products found"
        style={{ margin: '50px 0' }}
      />
    );
  }

  return (
    <Row gutter={[16, 16]}>
      {products.map(product => (
        <Col 
          key={product.id} 
          xs={24} 
          sm={12} 
          md={8} 
          lg={6} 
          xl={6}
        >
          <ProductCard
            product={product}
            onEdit={onEdit}
            onDelete={onDelete}
          />
        </Col>
      ))}
    </Row>
  );
};
