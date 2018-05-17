import React from 'react';
import './index.scss';

export default () => {
  return <section className="skeleton-article">
    <div className="skeleton-article-item">
      <div className="animated-background title"></div>
      <div className="index-wrapper">
        <div className="animated-background index"></div>
      </div>
      <div className="content">
        {
          [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14].map((num) => <div key={num} className="desc"><div className="animated-background"></div></div>)
        }
      </div>
    </div>
  </section>;
};