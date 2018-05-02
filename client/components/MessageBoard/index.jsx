import React, { PureComponent } from 'react';
import Comment from '@/components/Comments';
import constants from '../../constants';
import Message from '@/components/Message';

export default class extends PureComponent {
  state = {
    record: null,
  }

  replyMessage = (record) => {
    this.setState({
      record,
    });
  }

  cancelReply = () => {
    this.setState({
      record: null,
    });
  }

  submitMessage = (options) => {
    if (this.state.record) {
      options['ref'] = this.state.record._id;
    }
    this.props.submit(options);
  }

  render() {
    const {
      state,
      comments,
    } = this.props;
    const {
      record,
    } = this.state;

    return (<section className="message-board-wrap">
      {state === constants.SUCCESS_STATE && <Comment replyMessage={this.replyMessage} comments={comments} />}
      <Message record={record} cancelReply={this.cancelReply} submit={this.submitMessage} />
    </section>);
  }
}