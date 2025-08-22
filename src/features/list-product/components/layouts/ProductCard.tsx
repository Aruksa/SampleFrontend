import React from 'react';
import { Card, Space, Tag, Typography, Image } from 'antd';
import { EditOutlined, DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import type { Product } from '../../../../types/product';
import { Button } from '../../../../components/ui';
import { LOW_STOCK_THRESHOLD } from '../../config/constants';

const { Text, Title } = Typography;
const { Meta } = Card;

interface ProductCardProps {
  product: Product;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ 
  product, 
  onEdit, 
  onDelete 
}) => {
  const getStockStatus = (stock: number) => {
    if (stock === 0) {
      return <Tag color="red">Out of Stock</Tag>;
    } else if (stock <= LOW_STOCK_THRESHOLD) {
      return <Tag color="orange">Low Stock</Tag>;
    } else {
      return <Tag color="green">In Stock</Tag>;
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  return (
    <Card
      style={{ width: '100%', marginBottom: 16 }}
      cover={
        product.imageUrl ? (
          <Image
            alt={product.name}
            src={product.imageUrl}
            height={200}
            style={{ objectFit: 'cover' }}
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
          />
        ) : (
          <div style={{ 
            height: 200, 
            background: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center' 
          }}>
            <ShoppingCartOutlined style={{ fontSize: 48, color: '#d9d9d9' }} />
          </div>
        )
      }
      actions={[
        <Button
          key="edit"
          type="text"
          icon={<EditOutlined />}
          onClick={() => onEdit(product)}
        >
          Edit
        </Button>,
        <Button
          key="delete"
          type="text"
          variant="danger"
          icon={<DeleteOutlined />}
          onClick={() => onDelete(product.id)}
        >
          Delete
        </Button>
      ]}
    >
      <Meta
        title={
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Title level={4} style={{ margin: 0 }}>
              {product.name}
            </Title>
            <Space>
              <Text strong style={{ fontSize: '18px', color: '#1890ff' }}>
                {formatPrice(product.price)}
              </Text>
              {getStockStatus(product.stock)}
            </Space>
          </Space>
        }
        description={
          <Space direction="vertical" size="small" style={{ width: '100%' }}>
            <Text type="secondary" ellipsis>
              {product.description}
            </Text>
            <Space>
              <Tag color="blue">{product.category}</Tag>
              <Text type="secondary">Stock: {product.stock}</Text>
            </Space>
          </Space>
        }
      />
    </Card>
  );
};
