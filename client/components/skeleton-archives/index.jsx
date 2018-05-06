import React from 'react';
import './index.scss';
import SkeletonBanner from './skeleton-banner';
import SkeletonTags from './skeleton-tags';

export default () => {
  return <section className="skeleton-wrapper">
    <SkeletonBanner />
    <SkeletonTags />
  </section>;
};