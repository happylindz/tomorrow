import React, { PureComponent } from 'react';
import './index.scss';

export default class extends PureComponent {
  replyMessage = () => {

  }
  render() {
    return <section className="comments-wrap">
      {
        this.props.comments.map(({ name, createdTime, content, postId }) => {
          return <div key={postId} className="comment">
            <p>{name}</p>
            <p>{createdTime}</p>
            <p>{content}</p>
            <button onClick={this.replyMessage}>回复</button>
          </div>;
        })
      }
    </section>;
  }
}