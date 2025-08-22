import React from 'react';
import { Layout, Typography, Space } from 'antd';
import { ShoppingOutlined } from '@ant-design/icons';

const { Header, Content } = Layout;
const { Title } = Typography;

interface ProductLayoutProps {
  children: React.ReactNode;
  title?: string;
  extra?: React.ReactNode;
}

export const ProductLayout: React.FC<ProductLayoutProps> = ({ 
  children, 
  title = 'Product Management',
  extra 
}) => {
  return (
    <Layout style={{ minHeight: '100vh', background: '#f5f5f5' }}>
      <Header style={{ 
        background: '#fff', 
        padding: '0 24px',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between'
      }}>
        <Space align="center">
          <ShoppingOutlined style={{ fontSize: '24px', color: '#1890ff' }} />
          <Title level={3} style={{ margin: 0, color: '#1890ff' }}>
            {title}
          </Title>
        </Space>
        {extra && <div>{extra}</div>}
      </Header>
      <Content style={{ 
        padding: '24px',
        margin: 0,
        minHeight: 'calc(100vh - 64px)'
      }}>
        {children}
      </Content>
    </Layout>
  );
};
