import React, { PureComponent } from 'react';
import Comment from '@/components/comments';
import constants from '../../constants';
import Message from '@/components/message';
import scroll from '../../util/scroll';
import eventUtil from '../../util/eventUtil';
import './index.scss';

export default class extends PureComponent {
  state = {
    record: null,
  }
  componentDidMount() {
    this.handleHashChange();
    eventUtil.addHandler(window, 'hashchange', this.handleHashChange);
  }
  componentWillUnmount() {
    eventUtil.removeHandler(window, 'hashchange', this.handleHashChange);
  }

  handleHashChange = (e) => {
    e = eventUtil.getEvent(e);
    if (e) {
      eventUtil.preventDefault(e);
    }
    const hash = location.hash.slice(1);
    let count = 0;
    const id = setInterval(() => {
      count++;
      const elem = document.getElementById(hash);
      if (elem) {
        window.scrollTo(0, elem.offsetTop - 61);
        clearInterval(id);
      } else if (count === 10) {
        clearInterval(id);
      }
    }, 100);
    return false;
  }

  replyMessage = (e, record) => {
    e.preventDefault();
    scroll.call(this, document.getElementsByClassName('message-submit-wrap')[0], 500);
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
      <h2 id="comments"><a className="commens-title">{comments.length} 条评论</a></h2>
      {state === constants.SUCCESS_STATE && <Comment replyMessage={this.replyMessage} comments={comments} />}
      <Message record={record} cancelReply={this.cancelReply} submit={this.submitMessage} />
    </section>);
  }
}