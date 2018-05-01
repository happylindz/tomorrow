import React, { PureComponent } from 'react';



export default class extends PureComponent {
  state = {
    name: '',
    email: '',
    message: '',
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

  handleMessage = (e) => {
    this.setState({
      message: e.target.value,
    });
  }

  handleSubmit = () => {
    this.props.submit({
      name: this.state.name,
      email: this.state.email,
      message: this.state.message,
    });
  }

  render() {
    return (<section>
      <div>
        <label htmlFor="messageName">昵称<input name="messageName" onChange={this.handleName} /></label>
      </div>
      <div>
        <label htmlFor="messageEmail">邮箱 <input name="messageEmail" onChange={this.handleEmail} /></label>
      </div>
      <div>
        <label htmlFor="message">留言</label>
        <textarea name="message" onChange={this.handleMessage} cols="30" rows="10"></textarea>
      </div>
      <button onClick={this.handleSubmit}> 提交</button>
    </section>);
  }
}