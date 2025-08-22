import React, { useState, useMemo } from 'react';
import { Space, Switch, Typography } from 'antd';
import { PlusOutlined, TableOutlined, AppstoreOutlined } from '@ant-design/icons';
import { ProductLayout } from './components/layouts/ProductLayout';
import { ProductForm } from './components/custom/ProductForm';
import { ProductTable } from './components/custom/ProductTable';
import { ProductList } from './components/custom/ProductList';
import { ProductFilters } from './components/custom/ProductFilters';
import { Button, Modal, Toast, confirm } from '../../components/ui';
import type { Product, ProductFormData } from '../../types/product';
import { DUMMY_PRODUCTS } from './config/dummyData';

const { Text } = Typography;

export const ListProductPage: React.FC = () => {
  // State management
  const [products, setProducts] = useState<Product[]>(DUMMY_PRODUCTS);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | undefined>();
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [viewMode, setViewMode] = useState<'table' | 'grid'>('table');

  // Filtered products based on search and category
  const filteredProducts = useMemo(() => {
    return products.filter(product => {
      const matchesSearch = searchTerm === '' || 
        product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        product.description.toLowerCase().includes(searchTerm.toLowerCase());
      
      const matchesCategory = selectedCategory === '' || 
        product.category === selectedCategory;
      
      return matchesSearch && matchesCategory;
    });
  }, [products, searchTerm, selectedCategory]);

  // CRUD Operations
  const handleCreateProduct = async (data: ProductFormData) => {
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const newProduct: Product = {
        id: Date.now().toString(),
        ...data,
        createdAt: new Date(),
        updatedAt: new Date()
      };
      
      setProducts(prev => [newProduct, ...prev]);
      setIsModalOpen(false);
      setEditingProduct(undefined);
      Toast.success('Product created successfully!');
    } catch (error) {
      Toast.error('Failed to create product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleUpdateProduct = async (data: ProductFormData) => {
    if (!editingProduct) return;
    
    setLoading(true);
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      const updatedProduct: Product = {
        ...editingProduct,
        ...data,
        updatedAt: new Date()
      };
      
      setProducts(prev => 
        prev.map(product => 
          product.id === editingProduct.id ? updatedProduct : product
        )
      );
      
      setIsModalOpen(false);
      setEditingProduct(undefined);
      Toast.success('Product updated successfully!');
    } catch (error) {
      Toast.error('Failed to update product. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteProduct = (productId: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    confirm({
      title: 'Delete Product',
      content: `Are you sure you want to delete "${product.name}"? This action cannot be undone.`,
      onOk: async () => {
        try {
          // Simulate API call
          await new Promise(resolve => setTimeout(resolve, 500));
          
          setProducts(prev => prev.filter(p => p.id !== productId));
          Toast.success('Product deleted successfully!');
        } catch (error) {
          Toast.error('Failed to delete product. Please try again.');
        }
      }
    });
  };

  // Event handlers
  const handleAddProduct = () => {
    setEditingProduct(undefined);
    setIsModalOpen(true);
  };

  const handleEditProduct = (product: Product) => {
    setEditingProduct(product);
    setIsModalOpen(true);
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingProduct(undefined);
  };

  const handleFormSubmit = (data: ProductFormData) => {
    if (editingProduct) {
      handleUpdateProduct(data);
    } else {
      handleCreateProduct(data);
    }
  };

  // Header extra content
  const headerExtra = (
    <Space size="middle">
      <Space>
        <TableOutlined />
        <Switch
          checked={viewMode === 'grid'}
          onChange={(checked) => setViewMode(checked ? 'grid' : 'table')}
        />
        <AppstoreOutlined />
      </Space>
      <Button 
        variant="primary" 
        icon={<PlusOutlined />}
        onClick={handleAddProduct}
        size="large"
      >
        Add Product
      </Button>
    </Space>
  );

  return (
    <ProductLayout 
      title="Product Management"
      extra={headerExtra}
    >
      <Space direction="vertical" size="large" style={{ width: '100%' }}>
        {/* Filters */}
        <ProductFilters
          searchTerm={searchTerm}
          selectedCategory={selectedCategory}
          onSearchChange={setSearchTerm}
          onCategoryChange={setSelectedCategory}
        />

        {/* Results info */}
        <Space>
          <Text type="secondary">
            Showing {filteredProducts.length} of {products.length} products
          </Text>
          {(searchTerm || selectedCategory) && (
            <Button 
              type="link" 
              onClick={() => {
                setSearchTerm('');
                setSelectedCategory('');
              }}
            >
              Clear Filters
            </Button>
          )}
        </Space>

        {/* Product Display */}
        {viewMode === 'table' ? (
          <ProductTable
            products={filteredProducts}
            loading={loading}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        ) : (
          <ProductList
            products={filteredProducts}
            loading={loading}
            onEdit={handleEditProduct}
            onDelete={handleDeleteProduct}
          />
        )}
      </Space>

      {/* Product Form Modal */}
      <Modal
        title={editingProduct ? 'Edit Product' : 'Add New Product'}
        open={isModalOpen}
        onCancel={handleModalClose}
        footer={null}
        width={700}
        destroyOnHidden
      >
        <ProductForm
          product={editingProduct}
          onSubmit={handleFormSubmit}
          onCancel={handleModalClose}
          loading={loading}
        />
      </Modal>
    </ProductLayout>
  );
};
