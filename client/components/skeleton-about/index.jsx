import React from 'react';
import './index.scss';
import SkeletonBanner from '../skeleton-banner';
import SkeletonAbout from './skeleton-about';
export default () => {
  return <section className="skeleton-wrapper">
    <SkeletonBanner />
    <SkeletonAbout />
  </section>;
};