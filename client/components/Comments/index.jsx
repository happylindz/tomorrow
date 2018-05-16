import React from 'react';
import './index.scss';
import classNames from 'classnames';

const SubComment = ({ name, content, replyMessage, _id }) => {
  return <div className="subcomment">
    <p className="title">回复 <a className={classNames({
      'username': true,
      'active': name === '博主',
    })} href="#" onClick={(e) => replyMessage(e, { _id, name })}>{name}</a> 的发言：</p>
    <p className="content">{content}</p>
  </div>;
};

const Comment = ({ name, time, content, postId, refTo, index, replyMessage, _id }) => {
  return <div className="comment" id={index + 1 ? _id.slice(-4) : null}>
    <p className="title">
      <a className={classNames({
        'username': true,
        'active': name === '博主',
      })} href="#" onClick={(e) => replyMessage(e, { _id, name })}>{name}</a>
      <span className="time">{time}</span>
      <a className="reply" href="#" onClick={(e) => replyMessage(e, { _id, name })}>回复</a>
      <span className="floor">{index + 1}楼</span>
    </p>
    {refTo && <SubComment replyMessage={replyMessage} {...refTo} />}
    <p className="content">{content}</p>
  </div>;
};

export default ({ comments, replyMessage }) => {

  return <section className="comments-wrap">
    {
      comments && comments.length !== 0 ? comments.map((comment, index) => {
        return <Comment replyMessage={replyMessage} key={comment._id} {...comment} index={index} />;
      }) : <p className="no-posts">来做第一个留言的人吧！</p>
    }
  </section>;
};