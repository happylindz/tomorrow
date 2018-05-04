import React from 'react';
import { Link } from 'react-router-dom';

export default ({ posts }) => {
  return Object.keys(posts).map(year => { return parseInt(year, 10) }).sort((a, b) => {
    return b - a;
  }).map((year) => {
    return <div key={year}>
      {year}
      {posts[year].map((post) => {
        return (<section key={post._id}>
          <h2>{post.time}<Link to={`/article/${post.url}`}>{post.title}</Link></h2>
        </section>);
      })}
    </div>;
  });
};