import React, { Component } from 'react';
import { Form, Input } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};

@Form.create()
export default class extends Component {
  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Form layout={'horizontal'}>
        <FormItem label="回复人" {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: '有酒',
          })(
            <Input disabled />
          )}
        </FormItem>
        <FormItem label="邮箱" {...formItemLayout}>
          {getFieldDecorator('email', {
            initialValue: 'me@lindongzhou.com',
          })(
            <Input disabled />
          )}
        </FormItem>
        <FormItem label="回复内容" {...formItemLayout}>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: '请输入回复内容' }],
          })(<TextArea rows={4} placeholder="请输入回复内容" />)}
        </FormItem>
      </Form>
    );
  }
}
