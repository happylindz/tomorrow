import React from 'react';
import './index.scss';
import SkeletonBanner from '../skeleton-banner';
import SkeletonTags from './skeleton-tags';
import SkeletonArchives from './skeleton-archives';

export default () => {
  return <section className="skeleton-wrapper">
    <SkeletonBanner />
    <SkeletonTags />
    <SkeletonArchives />
  </section>;
};