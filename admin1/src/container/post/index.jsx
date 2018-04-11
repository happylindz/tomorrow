import React, { PureComponent } from 'react';
import { connect } from 'dva';
import { Table, Button, Icon, Divider, Row, Tag, Pagination, Modal, Popconfirm, message} from 'antd';
import PostForm from '../../components/post-form';
import moment from 'moment';

const marginBottom = {
  marginBottom: 10,
};

@connect(({ post }) => ({
  post,
}))
export default class extends PureComponent {
  state = {
    visible: false,
    postId: '',
  };
  componentDidMount() {
    const {
      page,
    } = this.props.post;
    this.fetchPostsData(page);
  }
  showCreateModal = () => {
    const { postId } = this.state;
    if(postId) {
      this.setState({ visible: true, postId: '' });
      const form = this.formRef.props.form;
      form.resetFields();
    }else {
      this.setState({ visible: true, postId: '' });
    }
  }
  handleCancel = () => {
    this.setState({ visible: false });
  }
  handleCreate = async() => {
    const form = this.formRef.props.form;
    form.validateFields(async (err, values) => {
      if (err) {
        return;
      }
      const payload = new FormData();
      payload.append('title', values.title);
      payload.append('cover', values.cover);
      payload.append('tags', values.tags.join(','));
      payload.append('upload', values.upload[0]);
      payload.append('createdTime', moment(values.createdTime).format('YYYY-MM-DD'));
      let res = null;
      if(this.state.postId === '') {
        res = await this.props.dispatch({
          type: 'post/add',
          payload,  
        });
      } else {
        payload.append('id', this.state.postId);
        res = await this.props.dispatch({
          type: 'post/update',
          payload,
        });
      }
      message.success(res.message);
      form.resetFields();
      this.setState({ visible: false, postId: '' });
    });
  }
  saveFormRef = (formRef) => {
    this.formRef = formRef;
  }
  fetchPostsData = (page) => {
    this.props.dispatch({
      type: 'post/query',
      payload: { page },  
    })
  }
  onChangePageIndex = (page) => {
    this.props.dispatch({
      type: 'post/query',
      payload: { page },  
    })
  }
  showUpdateModel = (record, e) => {
    e.preventDefault();
    const {
      _id,
    } = record;
    if(_id === this.state.postId) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: true,
        postId: _id,
      });
      const form = this.formRef.props.form;
      const data = {
        title: record.title,
        cover: record.cover,
        createdTime: moment(record.createdTime),
        tags: record.tags.split(','),
        upload: [new File([''], `${record.url}.md`, {
          type: 'text/x-markdown',
        })],
      }
      data.upload[0].uid = `rc-upload-${_id}`;
      form.setFieldsValue(data);
    }
  }
  handleRemove = async (record, e) => {
    e.preventDefault();
    const {
      _id,
    } = record;
    const res = await this.props.dispatch({
      type: 'post/remove',
      payload: {
        id: _id,
      },
    });
    message.success(res.message);
  }

  render() {
    const {post: {
      postsData,
      total,
      page,
    }} = this.props;
    const tagsData = new Set();
    postsData.forEach((post) => {
      post.tags.split(',').forEach((tag) => {
        tagsData.add(tag);
      });
    });
    const columns = [{
      title: '标题',
      dataIndex: 'title',
      key: 'title',
    }, {
      title: '封面',
      dataIndex: 'cover',
      key: 'cover',
    }, {
      title: '创建日期',
      dataIndex: 'createdTime',
      key: 'createdTime',
    }, {
      title: '标签',
      dataIndex: 'tags',
      key: 'tags',
      render: (tags, record) => {
        return <div>{ tags.split(',').map((tag) => (<Tag key={`${record._id}-${tag}`}>{tag}</Tag>)) }</div>
      }
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
        </span>)
      },
    }];
    return (<Row>
        <Row style={marginBottom}><Button onClick={this.showCreateModal}>新增博文</Button></Row>
        <Row style={marginBottom}><Table rowKey="_id" columns={columns} dataSource={postsData} pagination={false} /></Row>
        <Row><Pagination onChange={this.onChangePageIndex} hideOnSinglePage showQuickJumper current={page} defaultCurrent={1} total={total} /></Row>
        <PostForm
          type={ this.state.postId === '' ? '新增博文' : '修改博文' }
          wrappedComponentRef={this.saveFormRef}
          visible={this.state.visible}
          onCancel={this.handleCancel}
          onCreate={this.handleCreate}
          tagsData={tagsData}
        />
      </Row>);
  }
}
