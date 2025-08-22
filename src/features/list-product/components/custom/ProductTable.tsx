import React from 'react';
import { Space, Tag, Image, Typography } from 'antd';
import { EditOutlined, DeleteOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { Table, Button } from '../../../../components/ui';
import type { Product } from '../../../../types/product';
import { LOW_STOCK_THRESHOLD, TABLE_PAGE_SIZE, TABLE_PAGE_SIZE_OPTIONS } from '../../config/constants';
import type { ColumnsType } from 'antd/es/table';

const { Text } = Typography;

interface ProductTableProps {
  products: Product[];
  loading?: boolean;
  onEdit: (product: Product) => void;
  onDelete: (productId: string) => void;
}

export const ProductTable: React.FC<ProductTableProps> = ({
  products,
  loading = false,
  onEdit,
  onDelete
}) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price);
  };

  const getStockStatus = (stock: number) => {
    if (stock === 0) {
      return <Tag color="red">Out of Stock</Tag>;
    } else if (stock <= LOW_STOCK_THRESHOLD) {
      return <Tag color="orange">Low Stock</Tag>;
    } else {
      return <Tag color="green">In Stock</Tag>;
    }
  };

  const columns: ColumnsType<Product> = [
    {
      title: 'Image',
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      width: 80,
      render: (imageUrl: string, record: Product) => (
        imageUrl ? (
          <Image
            width={50}
            height={50}
            src={imageUrl}
            alt={record.name}
            style={{ objectFit: 'cover', borderRadius: 4 }}
            fallback="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMIAAADDCAYAAADQvc6UAAABRWlDQ1BJQ0MgUHJvZmlsZQAAKJFjYGASSSwoyGFhYGDIzSspCnJ3UoiIjFJgf8LAwSDCIMogwMCcmFxc4BgQ4ANUwgCjUcG3awyMIPqyLsis7PPOq3QdDFcvjV3jOD1boQVTPQrgSkktTgbSf4A4LbmgqISBgTEFyFYuLykAsTuAbJEioKOA7DkgdjqEvQHEToKwj4DVhAQ5A9k3gGyB5IxEoBmML4BsnSQk8XQkNtReEOBxcfXxUQg1Mjc0dyHgXNJBSWpFCYh2zi+oLMpMzyhRcASGUqqCZ16yno6CkYGRAQMDKMwhqj/fAIcloxgHQqxAjIHBEugw5sUIsSQpBobtQPdLciLEVJYzMPBHMDBsayhILEqEO4DxG0txmrERhM29nYGBddr//5/DGRjYNRkY/l7////39v///y4Dmn+LgeHANwDrkl1AuO+pmgAAADhlWElmTU0AKgAAAAgAAYdpAAQAAAABAAAAGgAAAAAAAqACAAQAAAABAAAAwqADAAQAAAABAAAAwwAAAAD9b/HnAAAHlklEQVR4Ae3dP3Ik1RnG4W+FgYxN"
          />
        ) : (
          <div style={{ 
            width: 50, 
            height: 50, 
            background: '#f0f0f0', 
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center',
            borderRadius: 4
          }}>
            <ShoppingCartOutlined style={{ fontSize: 20, color: '#d9d9d9' }} />
          </div>
        )
      )
    },
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
      sorter: (a, b) => a.name.localeCompare(b.name),
      render: (name: string) => (
        <Text strong>{name}</Text>
      )
    },
    {
      title: 'Category',
      dataIndex: 'category',
      key: 'category',
      filters: [...new Set(products.map(p => p.category))].map(category => ({
        text: category,
        value: category
      })),
      onFilter: (value, record) => record.category === value,
      render: (category: string) => (
        <Tag color="blue">{category}</Tag>
      )
    },
    {
      title: 'Price',
      dataIndex: 'price',
      key: 'price',
      sorter: (a, b) => a.price - b.price,
      render: (price: number) => (
        <Text strong style={{ color: '#1890ff' }}>
          {formatPrice(price)}
        </Text>
      )
    },
    {
      title: 'Stock',
      dataIndex: 'stock',
      key: 'stock',
      sorter: (a, b) => a.stock - b.stock,
      render: (stock: number) => (
        <Space>
          <Text>{stock}</Text>
          {getStockStatus(stock)}
        </Space>
      )
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
      ellipsis: true,
      render: (description: string) => (
        <Text type="secondary" ellipsis>
          {description}
        </Text>
      )
    },
    {
      title: 'Actions',
      key: 'actions',
      width: 120,
      render: (_, record: Product) => (
        <Space size="small">
          <Button
            type="text"
            icon={<EditOutlined />}
            onClick={() => onEdit(record)}
            title="Edit Product"
          >
            Edit
          </Button>
          <Button
            type="text"
            variant="danger"
            icon={<DeleteOutlined />}
            onClick={() => onDelete(record.id)}
            title="Delete Product"
          >
            Delete
          </Button>
        </Space>
      )
    }
  ];

  return (
    <Table<Product>
      columns={columns}
      dataSource={products}
      rowKey="id"
      loading={loading}
      pagination={{
        pageSize: TABLE_PAGE_SIZE,
        pageSizeOptions: TABLE_PAGE_SIZE_OPTIONS,
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => 
          `${range[0]}-${range[1]} of ${total} products`
      }}
      scroll={{ x: 800 }}
    />
  );
};
