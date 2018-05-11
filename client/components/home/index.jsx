import React from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import './index.scss';
import constants from  '../../constants';

export default ({ postsData, end, loading, state }) => {
  return <section className="home-wrapper">
    <div id="posts-main" className="posts-main">
      {
        postsData.length > 0 ? postsData.map((item) => {
          return (
            <section className="post-item" key={item._id}>
              <h3 className="title"><Link onClick={() => { window.scrollTo(0, 0) }} to={`/article/${item.url}`}>{item.title}</Link></h3>
              <p className="subtitle"><span className="time"><i className="iconfont icon-time" />{item.createdTime.split(' ')[0]}</span> <span className="tags"><i className="iconfont icon-tag" />{item.tags.map((tag) => (<Link to={`/archives?topic=${encodeURI(tag)}`} key={tag}>{tag}</Link>))}</span> </p>
              <Link onClick={() => { window.scrollTo(0, 0) }} to={`/article/${item.url}`} className="content">
                {item.cover && <div className="cover"><img src={item.cover} /></div>}
                <div className="desc">
                  <span className="text">{item.desc}</span>
                </div>
              </Link>
              <div className="footer"><span>阅读({item.count})</span><Link to={`/article/${item.url}#comments`}>评论({item.comment})</Link></div>
            </section>);
        }) : '暂无博文'
      }
    </div>
    <p id="loading" className={classNames({
      'loading': true,
      'active': loading && state === constants.SUCCESS_STATE,
    })}>loading...</p>
    <p className={classNames({
      'no-more-posts': true,
      'active': end && postsData.length > 0,
    })}>没有更多的文章了</p>
  </section>;
};