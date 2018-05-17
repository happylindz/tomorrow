import React from 'react';
import './index.scss';

export const SkeletonItem = () => (
  <div className="skeleton-home-item">
    <div className="animated-background title"></div>
    <div className="content">
      <div className="banner"><div className="animated-background"></div></div>
      <div className="desc-wrapper">
        <div className="desc"><div className="animated-background"></div></div>
        <div className="desc"><div className="animated-background"></div></div>
      </div>
    </div>
  </div>
);

export default () => (<div className="skeleton-home">
  {
    [1, 2, 3, 4, 5, 6].map((item) => <SkeletonItem key={item} />)
  }
</div>);