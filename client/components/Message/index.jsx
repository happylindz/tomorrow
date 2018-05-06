import React, { PureComponent } from 'react';
import store from 'store';
import eventUtil from '../../util/eventUtil';
import './index.scss';

export default class extends PureComponent {
  state = {
    name: '',
    email: '',
    content: '',
  };
  componentDidMount() {
    const data = store.get('info');
    if (data) {
      this.setState({
        ...data,
      });
    }
    eventUtil.addHandler(window, 'beforeunload', () => {
      store.set('info', {
        name: this.state.name,
        email: this.state.email,
      });
    });
  }
  componentWillUnmount() {
    store.set('info', {
      name: this.state.name,
      email: this.state.email,
    });
  }
  handleName = (e) => {
    this.setState({
      name: e.target.value,
    });
  }
  handleEmail = (e) => {
    this.setState({
      email: e.target.value,
    });
  }

  handleContent = (e) => {
    this.setState({
      content: e.target.value,
    });
  }
  handleSubmit = () => {
    this.props.submit({
      name: this.state.name,
      email: this.state.email,
      content: this.state.content,
    });
    this.reset();
  }
  reset = () => {
    this.setState({
      content: '',
    });
    this.props.cancelReply();
  }
  render() {
    const {
      record,
    } = this.props;
    const {
      name,
      email,
      content,
    } = this.state;
    return <div className="message-submit-wrap">
      {record && <div><label htmlFor="messageName">正在回复: {record.name}</label> <button onClick={this.reset}>取消回复</button></div>}
      <div className="message-item">
        <label htmlFor="content">留言</label>
        <textarea className="ant-input" name="content" onChange={this.handleContent} value={content} cols="20" rows="5"></textarea>
      </div>
      <div className="message-item">
        <label htmlFor="messageName">昵称</label>
        <input className="ant-input" name="messageName" onChange={this.handleName} value={name} />
      </div>
      <div className="message-item">
        <label htmlFor="messageEmail">邮箱</label>
        <input className="ant-input" name="messageEmail" onChange={this.handleEmail} value={email} />
      </div>
      <button onClick={this.handleSubmit}> 提交</button>
    </div>;
  }
}
