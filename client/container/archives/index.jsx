import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchArchivesData,
} from '../../actions';
import * as constants from '../../constants';
import { query } from '../../util/index.js';
import Tags from '@/components/tags';
import Banner from '@/components/banner';
import Archives from '@/components/archives';
import SkeletonArchives from '@/components/skeleton-archives';
import './index.scss';

const mapStateToProps = (state, ownProps) => {
  const { posts: postsData } = state.archives;
  const { search } = ownProps.location;
  const tagsRes = {
    'all': postsData.length,
  };
  let posts = {};
  let topic = '';
  if (search !== '') {
    topic = decodeURI(query(search).topic) || '';
  }
  postsData.forEach((post) => {
    try {
      const tags = post.tags.split(',');
      if (topic === '' || topic === 'undefined') {
        const year = post.year;
        if (!posts[year]) {
          posts[year] = [];
        }
        posts[year].push(post);
      }
      for (let tag of tags) {
        if (tag === topic) {
          const year = post.year;
          if (!posts[year]) {
            posts[year] = [];
          }
          posts[year].push(post);
        }
        if (tagsRes[tag]) {
          tagsRes[tag] += 1;
        } else {
          tagsRes[tag] = 1;
        }
      }
    } catch (e) {
    }
  });
  return {
    ...state.archives,
    tags: tagsRes,
    topic: topic,
    posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchArchivesData: (options) => {
      dispatch(fetchArchivesData(options));
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  componentDidMount() {
    const {
      state,
    } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchArchivesData();
    }
  }


  render() {
    const { posts, state, tags, topic } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <SkeletonArchives />;
    case constants.SUCCESS_STATE:
      return [
        <Banner title="Archives" key="banner" cover="//images.lindongzhou.com/website/archives-banner.jpg" />,
        <div key="archives-body" className="archives-body">
          <Tags tags={tags} topic={topic} />
          <Archives posts={posts} />
        </div>];
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

