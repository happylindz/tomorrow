import React from 'react';
import './index.scss';
import SkeletonItem from './skeleton-item';

export default () => {
  return <section className="skeleton-wrapper">
    <SkeletonItem />
  </section>;
};
