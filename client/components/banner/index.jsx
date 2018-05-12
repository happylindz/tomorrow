import React from 'react';
import './index.scss';
export default ({ cover, title }) => {
  return (<section className="banner-wrap">
    <div className="banner" style={{ backgroundImage: `url(${cover})` }}>
      <h1>{title}</h1>
    </div>
  </section>);
};