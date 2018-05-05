import React from 'react';
import { Link } from 'react-router-dom';
import './index.scss';


export default ({ posts }) => {
  return <section className="archives-main">{
    Object.keys(posts).map(year => { return parseInt(year, 10) }).sort((a, b) => {
      return b - a;
    }).map((year) => {
      return <div className="archives" key={year}>
        <p className="year">{year}</p>
        {posts[year].map((post) => {
          return (<section className="archives-item" key={post._id}>
            <span className="time">{post.time}</span><Link to={`/article/${post.url}`}>{post.title}</Link>
          </section>);
        })}
      </div>;
    })
  }</section>;
};