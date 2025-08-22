import React, { useEffect } from 'react';
import {
  Form,
  FormItem,
  FormInput,
  FormTextArea,
  FormInputNumber,
  FormSelect,
  FormSelectOption,
  Button
} from '../../../../components/ui';
import { Form as AntForm } from 'antd';
import type { Product, ProductFormData } from '../../../../types/product';
import { PRODUCT_CATEGORIES, FORM_VALIDATION_RULES } from '../../config/constants';
import { Row, Col, Space } from 'antd';

interface ProductFormProps {
  product?: Product;
  onSubmit: (data: ProductFormData) => void;
  onCancel: () => void;
  loading?: boolean;
}

export const ProductForm: React.FC<ProductFormProps> = ({
  product,
  onSubmit,
  onCancel,
  loading = false
}) => {
  const [form] = AntForm.useForm();

  useEffect(() => {
    if (product) {
      form.setFieldsValue({
        name: product.name,
        description: product.description,
        price: product.price,
        category: product.category,
        stock: product.stock,
        imageUrl: product.imageUrl || ''
      });
    } else {
      form.resetFields();
    }
  }, [product, form]);

  const handleSubmit = async (values: ProductFormData) => {
    onSubmit(values);
  };

  return (
    <Form
      form={form}
      onFinish={handleSubmit}
      layout="vertical"
      style={{ maxWidth: 600 }}
    >
      <Row gutter={16}>
        <Col span={24}>
          <FormItem
            name="name"
            label="Product Name"
            rules={[
              { 
                required: FORM_VALIDATION_RULES.name.required, 
                message: FORM_VALIDATION_RULES.name.message 
              },
              { 
                min: FORM_VALIDATION_RULES.name.minLength, 
                message: `Name must be at least ${FORM_VALIDATION_RULES.name.minLength} characters` 
              },
              { 
                max: FORM_VALIDATION_RULES.name.maxLength, 
                message: `Name must not exceed ${FORM_VALIDATION_RULES.name.maxLength} characters` 
              }
            ]}
          >
            <FormInput placeholder="Enter product name" />
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem
            name="price"
            label="Price ($)"
            rules={[
              { 
                required: FORM_VALIDATION_RULES.price.required, 
                message: FORM_VALIDATION_RULES.price.message 
              },
              { 
                type: 'number', 
                min: FORM_VALIDATION_RULES.price.min, 
                message: `Price must be at least $${FORM_VALIDATION_RULES.price.min}` 
              }
            ]}
          >
            <FormInputNumber
              placeholder="0.00"
              min={0}
              step={0.01}
              precision={2}
              style={{ width: '100%' }}
            />
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name="stock"
            label="Stock Quantity"
            rules={[
              { 
                required: FORM_VALIDATION_RULES.stock.required, 
                message: FORM_VALIDATION_RULES.stock.message 
              },
              { 
                type: 'number', 
                min: FORM_VALIDATION_RULES.stock.min, 
                message: 'Stock cannot be negative' 
              }
            ]}
          >
            <FormInputNumber
              placeholder="0"
              min={0}
              step={1}
              style={{ width: '100%' }}
            />
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={12}>
          <FormItem
            name="category"
            label="Category"
            rules={[
              { 
                required: FORM_VALIDATION_RULES.category.required, 
                message: FORM_VALIDATION_RULES.category.message 
              }
            ]}
          >
            <FormSelect placeholder="Select a category">
              {PRODUCT_CATEGORIES.map(category => (
                <FormSelectOption key={category} value={category}>
                  {category}
                </FormSelectOption>
              ))}
            </FormSelect>
          </FormItem>
        </Col>
        <Col span={12}>
          <FormItem
            name="imageUrl"
            label="Image URL (Optional)"
          >
            <FormInput placeholder="https://example.com/image.jpg" />
          </FormItem>
        </Col>
      </Row>

      <Row gutter={16}>
        <Col span={24}>
          <FormItem
            name="description"
            label="Description"
            rules={[
              { 
                required: FORM_VALIDATION_RULES.description.required, 
                message: FORM_VALIDATION_RULES.description.message 
              },
              { 
                min: FORM_VALIDATION_RULES.description.minLength, 
                message: `Description must be at least ${FORM_VALIDATION_RULES.description.minLength} characters` 
              },
              { 
                max: FORM_VALIDATION_RULES.description.maxLength, 
                message: `Description must not exceed ${FORM_VALIDATION_RULES.description.maxLength} characters` 
              }
            ]}
          >
            <FormTextArea
              placeholder="Enter product description"
              rows={4}
              showCount
              maxLength={FORM_VALIDATION_RULES.description.maxLength}
            />
          </FormItem>
        </Col>
      </Row>

      <FormItem>
        <Space>
          <Button 
            type="primary" 
            htmlType="submit" 
            loading={loading}
            variant="primary"
          >
            {product ? 'Update Product' : 'Create Product'}
          </Button>
          <Button onClick={onCancel}>
            Cancel
          </Button>
        </Space>
      </FormItem>
    </Form>
  );
};
