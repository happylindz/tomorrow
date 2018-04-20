import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Row, Col, Button, message } from 'antd';
import InfoForm from '../../components/info-form';

@connect(({ info }) => ({
  info,
}))
export default class extends PureComponent {
  componentDidMount() {
    this.props.dispatch({
      type: 'info/query',
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  handleCreate = async () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const res = await this.props.dispatch({
        type: 'info/change',
        payload: values,
      });
      if (res.code === 0) {
        message.success(res.message);
      } else {
        message.error(res.message);
      }
    });
  }


  render() {
    const { info } = this.props;
    return (<Row>
      <InfoForm wrappedComponentRef={this.saveFormRef} info={info} />
      <Row>
        <Col span={6}></Col>
        <Col spna={14}><Button onClick={this.handleCreate} >确认</Button></Col>
      </Row>
    </Row>);
  }
}
