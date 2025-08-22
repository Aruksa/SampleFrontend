import React from 'react';
import { Row, Col, Input, Select, Space } from 'antd';
import { SearchOutlined, FilterOutlined } from '@ant-design/icons';
import { PRODUCT_CATEGORIES } from '../../config/constants';

const { Search } = Input;
const { Option } = Select;

interface ProductFiltersProps {
  searchTerm: string;
  selectedCategory: string;
  onSearchChange: (value: string) => void;
  onCategoryChange: (value: string) => void;
}

export const ProductFilters: React.FC<ProductFiltersProps> = ({
  searchTerm,
  selectedCategory,
  onSearchChange,
  onCategoryChange
}) => {
  return (
    <Row gutter={16} align="middle" style={{ marginBottom: 16 }}>
      <Col xs={24} sm={12} md={16}>
        <Search
          placeholder="Search products by name or description..."
          value={searchTerm}
          onChange={(e) => onSearchChange(e.target.value)}
          allowClear
          enterButton={<SearchOutlined />}
          size="large"
        />
      </Col>
      <Col xs={24} sm={12} md={8}>
        <Space style={{ width: '100%' }}>
          <FilterOutlined style={{ color: '#1890ff' }} />
          <Select
            placeholder="Filter by category"
            value={selectedCategory || undefined}
            onChange={onCategoryChange}
            allowClear
            style={{ width: '100%', minWidth: 150 }}
            size="large"
          >
            {PRODUCT_CATEGORIES.map(category => (
              <Option key={category} value={category}>
                {category}
              </Option>
            ))}
          </Select>
        </Space>
      </Col>
    </Row>
  );
};
