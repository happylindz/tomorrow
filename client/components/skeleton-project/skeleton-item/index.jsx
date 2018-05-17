import React from 'react';
import './index.scss';

export default () => (<div className="skeleton-project">
  {
    [1, 2, 3, 4, 5, 6].map((item) => <div key={item} className="skeleton-project-item">
      <div className="animated-background title"></div>
      <div className="content">
        <div className="desc"><div className="animated-background"></div></div>
        <div className="desc"><div className="animated-background"></div></div>
        <div className="desc"><div className="animated-background"></div></div>
        <div className="desc"><div className="animated-background"></div></div>
        <div className="desc"><div className="animated-background"></div></div>
      </div>
    </div>)
  }
</div>);