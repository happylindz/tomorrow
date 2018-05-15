import React, { PureComponent } from 'react';
import store from 'store';
import classNames from 'classnames';
import eventUtil from '../../util/eventUtil';
import './index.scss';
const emailReg = /^([\w-_]+(?:\.[\w-_]+)*)@((?:[a-z0-9]+(?:-[a-zA-Z0-9]+)*)+\.[a-z]{2,6})$/i;

export default class extends PureComponent {
  state = {
    name: '',
    email: '',
    content: '',
    nameError: null,
    emailError: null,
    contentError: null,
  };
  componentDidMount() {
    const data = store.get('info');
    if (data) {
      this.setState({
        ...data,
      });
    }
    eventUtil.addHandler(window, 'beforeunload', this.setInfo);
  }
  componentWillUnmount() {
    store.set('info', {
      name: this.state.name,
      email: this.state.email,
    });
    eventUtil.removeHandler(window, 'beforeunload', this.setInfo);
  }
  setInfo = () => {
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
  validteInfo = () => {
    let isValidated = true;
    const error = {};
    if (this.state.name === '') {
      isValidated = false;
      error.nameError = '请输入你的昵称';
    } else if (this.state.name === '博主') {
      isValidated = false;
      error.nameError = '该昵称不可用';
    } else {
      error.nameError = null;
    }
    if (this.state.email === '') {
      isValidated = false;
      error.emailError = '请留下你的邮箱';
    } else if (!emailReg.test(this.state.email)) {
      isValidated = false;
      error.emailError = '邮箱地址不合法';
    } else if (this.state.email === 'me@lindongzhou.com') {
      isValidated = false;
      error.emailError = '该邮箱地址不可用';
    } else {
      error.emailError = null;
    }
    if (this.state.content === '') {
      isValidated = false;
      error.contentError = '再说点什么呗';
    } else {
      error.contentError = null;
    }
    this.setState({
      ...error,
    });
    return isValidated;
  }
  handleSubmit = () => {
    if (this.validteInfo()) {
      this.props.submit({
        name: this.state.name,
        email: this.state.email,
        content: this.state.content,
      });
      this.reset();
    }
  }
  reset = (e) => {
    e && e.preventDefault();
    this.setState({
      content: '',
      nameError: null,
      emailError: null,
      contentError: null,
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
      nameError,
      emailError,
      contentError,
    } = this.state;
    return <div className="message-submit-wrap">
      <h2 className="comment-title">发表评论</h2>
      <p className="annotation">邮箱地址不会被公开, 收到回复会通过邮件提醒。</p>
      {record && <div className="replying"><label htmlFor="messageName">正在回复: <span className="username">{record.name}</span></label> <a className="cancel" href="#" onClick={this.reset}>取消回复</a></div>}
      <div className={classNames({
        'message-item': true,
        'error': contentError,
      })}>
        <label htmlFor="messageContent">评论内容<span className="required">*</span></label>
        <textarea className="ant-input" placeholder="说点什么呢" id="messageContent" name="content" onChange={this.handleContent} value={content} cols="20" rows="5"></textarea>
        {contentError ? <span className="error">{contentError}</span> : null}
      </div>
      <div className={classNames({
        'message-item': true,
        'error': nameError,
      })}>
        <label htmlFor="messageName">昵称<span className="required">*</span></label>
        <input className="ant-input" placeholder="如何称呼" id="messageName" name="messageName" onChange={this.handleName} value={name} />
        {nameError ? <span className="error">{nameError}</span> : null}
      </div>
      <div className={classNames({
        'message-item': true,
        'error': emailError,
      })}>
        <label htmlFor="messageEmail">邮箱地址<span className="required">*</span></label>
        <input className="ant-input" placeholder="放心，别人不会知道的" id="messageEmail" name="messageEmail" onChange={this.handleEmail} value={email} />
        {emailError ? <span className="error">{emailError}</span> : null}
      </div>
      <div className="message-item">
        <button className="ant-btn" onClick={this.handleSubmit}>发表评论</button>
      </div>
    </div>;
  }
}
