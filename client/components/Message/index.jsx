import React, { PureComponent } from 'react';

export default class extends PureComponent {
  state = {
    name: '',
    email: '',
    content: '',
  };
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
      name: '',
      email: '',
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
      <div>
        {record && <label htmlFor="messageName">正在回复: {record.name} <button onClick={this.reset}>取消回复</button></label>}
      </div>
      <div>
        <label htmlFor="messageName">昵称<input name="messageName" onChange={this.handleName} value={name} /></label>
      </div>
      <div>
        <label htmlFor="messageEmail">邮箱 <input name="messageEmail" onChange={this.handleEmail} value={email} /></label>
      </div>
      <div>
        <label htmlFor="content">留言</label>
        <textarea name="content" onChange={this.handleContent} value={content} cols="30" rows="10"></textarea>
      </div>
      <button onClick={this.handleSubmit}> 提交</button>
    </div>;
  }
}
