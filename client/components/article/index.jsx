import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';
import ArticleIndex from '@/components/article-index';

export default ({ index, scrollToContent, content, title, createdTime, tags }) => {
  return <section className="article-wrapper">
    <h1>{title}</h1>
    <p className="subtitle"><span className="time"><i className="icon icon-time" />{createdTime}</span> <span className="tags"><i className="icon icon-tag" />{tags.split(',').map((tag) => (<Link to={`/archives?topic=${encodeURI(tag)}`} key={tag}>{tag}</Link>))}</span> </p>
    <ArticleIndex index={index} scrollToContent={scrollToContent} />
    <article className="article markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
  </section>;
};