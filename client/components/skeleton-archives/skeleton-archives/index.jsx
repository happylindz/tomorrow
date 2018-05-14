import React from 'react';
import './index.scss';

export default () => (<div className="skeleton-archives">
  {
    [1, 2, 3].map((item) => <div key={item} className="skeleton-archives-item">
      <div className="animated-background title"></div>
      <div className="line"><div className="animated-background"></div></div>
      <div className="line"><div className="animated-background"></div></div>
      <div className="line"><div className="animated-background"></div></div>
    </div>)
  }
</div>);