import React from 'react';
import './index.scss';

export default () => (<div className="skeleton-tags">
  {
    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => <div key={item} className="skeleton-tag-item">
      <div className="animated-background"></div>
    </div>)
  }
</div>);