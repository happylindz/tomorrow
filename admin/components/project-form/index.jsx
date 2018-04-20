import React, { Component } from 'react';
import { Form, Input, Radio } from 'antd';
const FormItem = Form.Item;
const { TextArea } = Input;
const RadioGroup = Radio.Group;

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
        <FormItem label="项目名" {...formItemLayout}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入项目名' }],
          })(
            <Input placeholder="请输入项目名" />
          )}
        </FormItem>
        <FormItem label="项目地址" {...formItemLayout}>
          {getFieldDecorator('href', {
            rules: [{ required: true, message: '请输入项目的地址' }],
          })(<Input placeholder="请输入有效项目的地址" />)}
        </FormItem>
        <FormItem label="描述" {...formItemLayout}>
          {getFieldDecorator('content', {
            rules: [{ required: true, message: '请输入项目的描述' }],
          })(<TextArea rows={4} placeholder="请输入项目的描述" />)}
        </FormItem>
        <FormItem label="描述类型" {...formItemLayout}>
          {getFieldDecorator('contentType', {
            rules: [{ required: true, message: '请选择项目描述类型' }],
          })(<RadioGroup>
            <Radio value="markdown">markdown</Radio>
            <Radio value="normal">普通文本</Radio>
          </RadioGroup>)}
        </FormItem>
      </Form>
    );
  }
}
