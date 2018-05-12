import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Divider, Row, Pagination, Popconfirm, message } from 'antd';
import moment from 'moment';
import CommentForm from '../../components/comment-form';
import Dialog from '../../components/dialog';

const marginBottom = {
  marginBottom: 10,
};
@connect(({ message }) => ({
  message,
}))
export default class extends PureComponent {
  state = {
    visible: false,
    message: null,
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'message/reload',
    });
  }
  showCreateModal = (record, e) => {
    e.preventDefault();
    const { message } = this.state;
    if (message && message._id === record._id) {
      this.setState({ visible: true });
    } else {
      this.setState({ visible: true, message: record });
      setTimeout(() => {
        const form = this.formRef.props.form;
        form.resetFields();
      });
    }
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = async () => {
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const messageData = {
        ...values,
        ref: this.state.message._id,
        createdTime: Date.now(),
      };
      const res = await this.props.dispatch({
        type: 'message/add',
        payload: messageData,
      });
      if (res.code === 0) {
        message.success(res.message);
        form.resetFields();
        this.setState({ visible: false, message: null });
      } else {
        message.error(res.message);
      }
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  changePageIndex = (page) => {
    this.props.dispatch({
      type: 'message/fetch',
      payload: { page },
    });
  }
  handleRemove = async (record, e) => {
    e.preventDefault();
    const res = await this.props.dispatch({
      type: 'message/remove',
      payload: {
        id: record._id,
      },
    });
    if (res.code === 0) {
      message.success(res.message);
    } else {
      message.error(res.message);
    }
  }

  render() {
    const {
      message: {
        messagesData,
        total,
        page,
      }
    } = this.props;
    const columns = [{
      title: '昵称',
      dataIndex: 'name',
      key: 'name',
    }, {
      title: '评论时间',
      dataIndex: 'createdTime',
      key: 'createdTime',
      render: (val) => {
        return moment(val).format('YYYY-MM-DD hh:mm:ss');
      }
    }, {
      title: '邮箱',
      dataIndex: 'email',
      key: 'email',
    }, {
      title: '内容',
      dataIndex: 'content',
      key: 'content',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (<span>
          <a href="#" onClick={this.showCreateModal.bind(this, record)}>回复评论</a>
          <Divider type="vertical" />
          <Popconfirm title="确认删除吗" onConfirm={this.handleRemove.bind(this, record)} okText="确认" cancelText="取消">
            <a href="#">删除</a>
          </Popconfirm>
        </span>);
      },
    }];
    return (<Row>
      <Row style={marginBottom}><Table rowKey="_id" columns={columns} dataSource={messagesData} pagination={false} /></Row>
      <Row style={{ 'float': 'right' }}><Pagination onChange={this.changePageIndex} hideOnSinglePage showQuickJumper current={page} defaultCurrent={1} total={total} /></Row>
      <Dialog
        type="回复评论"
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      >
        <CommentForm wrappedComponentRef={this.saveFormRef} />
      </Dialog>
    </Row>);
  }
}
