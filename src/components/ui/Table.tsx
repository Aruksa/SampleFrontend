import React from 'react';
import { Table as AntTable } from 'antd';
import type { TableProps as AntTableProps } from 'antd';

export interface TableProps<T = any> extends AntTableProps<T> {}

export const Table = <T extends object = any>(props: TableProps<T>) => {
  return (
    <AntTable<T>
      pagination={{
        showSizeChanger: true,
        showQuickJumper: true,
        showTotal: (total, range) => 
          `${range[0]}-${range[1]} of ${total} items`,
        ...props.pagination
      }}
      {...props}
    />
  );
};
