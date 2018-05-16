import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import ArticleIndex from '@/components/article-index';

export default ({ index, scrollToContent, content, title, date, tags, previous, next }) => {
  return <section className="article-wrapper">
    <h1>{title}</h1>
    <p className="subtitle"><span className="time"><i className="iconfont icon-time" />{date}</span> <span className="tags"><i className="iconfont icon-tag" />{tags && tags.split(',').map((tag) => (<Link to={`/archives?topic=${encodeURI(tag)}`} key={tag}>{tag}</Link>))}</span> </p>
    <ArticleIndex index={index} scrollToContent={scrollToContent} />
    <article className="article markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
    {(previous || next) && <p className="pager">
      {previous && <div className="previous"><Link onClick={() => window.scrollTo(0, 0)} to={`/article/${previous.url}`}><span>PREVIOUS</span>{previous.title}</Link></div>}
      <div className="placeholder"></div>
      {next && <div className="next"><Link onClick={() => { window.scrollTo(0, 0) }} to={`/article/${next.url}`}><span>NEXT</span>{next.title}</Link></div>}</p>}
  </section>;
};