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
    const { info } = this.props;
    return (
      <Form layout={'horizontal'}>
        <FormItem label="博客名" {...formItemLayout}>
          {getFieldDecorator('name', {
            initialValue: info.name,
            rules: [{ required: true, message: '请输入博客名' }],
          })(
            <Input placeholder="请输入博客名" />
          )}
        </FormItem>
        <FormItem label="关于" {...formItemLayout}>
          {getFieldDecorator('info', {
            initialValue: info.info,
            rules: [{ required: true, message: '请输入关于的个人信息' }],
          })(<TextArea rows={10} placeholder="请输入关于的个人信息" />)}
        </FormItem>
        <FormItem label="描述类型" {...formItemLayout}>
          {getFieldDecorator('infoType', {
            initialValue: info.infoType,
            rules: [{ required: true, message: '请选择关于的描述类型' }],
          })(<RadioGroup>
            <Radio value="markdown">markdown</Radio>
            <Radio value="normal">普通文本</Radio>
          </RadioGroup>)}
        </FormItem>
      </Form>
    );
  }
}
