import React from 'react';
import './index.scss';

const Comment = ({ name, createdTime, content, postId, refTo, index, replyMessage, _id }) => {

  return <div className="comment" id={index + 1 ? _id.slice(-4) : null}>
    <p>{name} {!isNaN(index + 1) && <span>{index + 1} 楼</span>}</p>
    <p>{createdTime}</p>
    <p>{content}</p>
    {!isNaN(index + 1) && <button onClick={() => replyMessage({ _id, name })}>回复</button>}
    {(!isNaN(index + 1) && refTo) && <Comment replyMessage={replyMessage} {...refTo} />}
  </div>;
};

export default ({ comments, replyMessage }) => {
  return <section className="comments-wrap">
    {
      comments.map((comment, index) => {
        return <Comment replyMessage={replyMessage} key={comment.postId} {...comment} index={index} />;
      })
    }
  </section>;
};