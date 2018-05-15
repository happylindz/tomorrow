import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Button, Divider, Row, Pagination, Popconfirm, message } from 'antd';
import ProjectForm from '../../components/project-form';
import Dialog from '../../components/dialog';

const marginBottom = {
  marginBottom: 10,
};

@connect(({ project }) => ({
  project,
}))
export default class extends PureComponent {
  state = {
    visible: false,
    projectId: '',
  };
  componentDidMount() {
    this.props.dispatch({
      type: 'project/reload',
    });
  }
  showCreateModal = () => {
    const { projectId } = this.state;
    if (projectId) {
      this.setState({ visible: true, projectId: '' });
      const form = this.formRef.props.form;
      form.resetFields();
    } else {
      this.setState({ visible: true, projectId: '' });
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
      let res = null;
      if (this.state.projectId === '') {
        res = await this.props.dispatch({
          type: 'project/add',
          payload: values,
        });
      } else {
        res = await this.props.dispatch({
          type: 'project/update',
          payload: {
            id: this.state.projectId,
            values: values,
          },
        });
      }
      if (res.code === 0) {
        message.success(res.message);
        form.resetFields();
        this.setState({ visible: false, projectId: '' });
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
      type: 'project/fetch',
      payload: { page },
    });
  }
  showUpdateModel = (record, e) => {
    e.preventDefault();
    const { _id } = record;
    if (_id === this.state.projectId) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: true,
        projectId: _id,
      }, () => {
        setTimeout(() => {
          const form = this.formRef.props.form;
          form.setFieldsValue(record);
        });
      });
    }
  }
  handleRemove = async (record, e) => {
    e.preventDefault();
    const res = await this.props.dispatch({
      type: 'project/remove',
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
      project: {
        projects,
        total,
        page,
      }
    } = this.props;
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '链接',
      dataIndex: 'href',
      key: 'href',
    }, {
      title: '操作',
      key: 'action',
      render: (text, record) => {
        return (<span>
          <a href="#" onClick={this.showUpdateModel.bind(this, record)}>修改</a>
          <Divider type="vertical" />
          <Popconfirm title="确认删除吗" onConfirm={this.handleRemove.bind(this, record)} okText="确认" cancelText="取消">
            <a href="#">删除</a>
          </Popconfirm>
        </span>);
      },
    }];
    return (<Row>
      <Row style={marginBottom}><Button onClick={this.showCreateModal}>新增项目</Button></Row>
      <Row style={marginBottom}><Table rowKey="_id" columns={columns} dataSource={projects} pagination={false} /></Row>
      <Row style={{ 'float': 'right' }}><Pagination onChange={this.changePageIndex} hideOnSinglePage showQuickJumper current={page} defaultCurrent={1} total={total} /></Row>
      <Dialog
        type={this.state.projectId === '' ? '新增项目' : '修改项目'}
        visible={this.state.visible}
        onCancel={this.handleCancel}
        onCreate={this.handleCreate}
      >
        <ProjectForm wrappedComponentRef={this.saveFormRef} />
      </Dialog>
    </Row>);
  }
}
