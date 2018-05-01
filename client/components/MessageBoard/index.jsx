import React, { PureComponent } from 'react';
import Comment from '@/components/Comment';
import constants from '../../constants';

export default class extends PureComponent {
  state = {
    name: '',
    email: '',
    content: '',
    record: null,
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
      name: '',
      email: '',
      content: '',
    });
  }

  render() {
    const {
      state,
      comments,
    } = this.props;
    return (<section className="message-board-wrap">
      {state === constants.SUCCESS_STATE && <Comment comments={comments} />}
      <div className="message-submit-wrap">
        <div>
          <label htmlFor="messageName">昵称<input name="messageName" onChange={this.handleName} /></label>
        </div>
        <div>
          <label htmlFor="messageEmail">邮箱 <input name="messageEmail" onChange={this.handleEmail} /></label>
        </div>
        <div>
          <label htmlFor="content">留言</label>
          <textarea name="content" onChange={this.handleContent} cols="30" rows="10"></textarea>
        </div>
        <button onClick={this.handleSubmit}> 提交</button>
      </div>
    </section>);
  }
}