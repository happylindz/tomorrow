import React, { PureComponent } from 'react';
import Comment from '@/components/comments';
import constants from '../../constants';
import Message from '@/components/message';
import scroll from '../../util/scroll';
export default class extends PureComponent {
  state = {
    record: null,
  }
  componentDidMount() {
    const hash = location.hash.slice(1);
    if (hash.length === 4) {
      let count = 0;
      const id = setInterval(() => {
        count++;
        if (document.getElementById(hash)) {
          window.location = location.hash;
          clearInterval(id);
        } else if (count === 10) {
          clearInterval(id);
        }
      }, 100);
    }
  }

  replyMessage = (record) => {
    scroll.call(this, document.getElementById('message-submit-wrap'), 500);
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