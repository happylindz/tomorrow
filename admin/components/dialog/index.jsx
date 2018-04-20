import React from 'react';
import { Modal } from 'antd';

export default ({ visible, onCancel, onCreate, type, children }) => (<Modal
  visible={visible}
  title={type}
  okText="确认"
  cancelText="取消"
  onCancel={onCancel}
  onOk={onCreate}
>
  {children}
</Modal>);

