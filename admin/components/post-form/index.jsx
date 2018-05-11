import React, { Component } from 'react';
import { Button, Form, Input, DatePicker, Select, Upload, Icon } from 'antd';
const FormItem = Form.Item;
const formItemLayout = {
  labelCol: { span: 6 },
  wrapperCol: { span: 14 },
};
const Option = Select.Option;

@Form.create()
export default class extends Component {
  normFile = (e) => {
    if (Array.isArray(e)) {
      e = e.slice(0, 1);
      return e;
    }
    return e && e.fileList.slice(0, 1);
  }
  render() {
    const {
      form: {
        getFieldDecorator
      },
      tagsData,
    } = this.props;
    return (
      <Form layout={'horizontal'}>
        <FormItem label="标题" {...formItemLayout}>
          {getFieldDecorator('title', {
            rules: [{ required: true, message: '请输入博文的标题' }],
          })(
            <Input placeholder="请输入博文标题" />
          )}
        </FormItem>
        <FormItem label="封面地址" {...formItemLayout}>
          {getFieldDecorator('cover', {
          })(<Input placeholder="请输入有效的封面连接" />)}
        </FormItem>
        <FormItem label="创建日期" {...formItemLayout}>
          {getFieldDecorator('createdTime', {
            rules: [{ required: true, message: '请选择创建日期' }],
          })(<DatePicker style={{ width: '100%' }} placeholder="选择创建日期" format="YYYY-MM-DD" />)}
        </FormItem>
        <FormItem label="标签" {...formItemLayout}>{
          getFieldDecorator('tags', {
            rules: [{ required: true, message: '请选择文章标签类型' }],
          })(<Select
            mode="tags"
            style={{ width: '100%' }}
            placeholder="请选择文章标签类型(可多选)"
          >
            {Array.from(tagsData).map(tag => (<Option key={tag}>{tag}</Option>))}
          </Select>)}
        </FormItem>
        <FormItem label="文章上传" {...formItemLayout}>{
          getFieldDecorator('upload', {
            valuePropName: 'fileList',
            getValueFromEvent: this.normFile,
            rules: [{ required: true, message: '请选择文件' }],
          })(<Upload beforeUpload={() => (false)}>
            <Button style={{ width: '100%' }}>
              <Icon type="upload" /> 选择 md 文件
            </Button>
          </Upload>)}
        </FormItem>
      </Form>
    );
  }
}
