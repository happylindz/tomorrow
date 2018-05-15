
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import Home from '@/components/home';
import {
  fetchPostsData,
} from '../../actions';
import throttle from '../../util/throttle';
import * as constants from '../../constants';
import eventUtil from '../../util/eventUtil';
import './index.scss';


const mapStateToProps = (state) => {
  return {
    ...state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsData: (options) => {
      dispatch(fetchPostsData(options));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class extends PureComponent {
  constructor(...args) {
    super(...args);
    this.fetchPostsData = throttle(this.fetchPostsData, 100);
  }
  componentDidMount() {
    setTimeout(() => {
      window.scrollTo(0, 0);
    });
    const { state } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchPostsData();
    }
    eventUtil.addHandler(window, 'scroll', this.fetchPostsData);
  }

  componentWillUnmount() {
    eventUtil.removeHandler(window, 'scroll', this.fetchPostsData);
  }

  fetchPostsData = () => {
    const {
      posts,
      end,
      loading,
    } = this.props;
    const len = posts.length;
    if (!end && !loading) {
      const options =  {
        time: posts[len - 1].time,
      };
      const cHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
      const main = document.getElementById('posts-main');
      if (main.getBoundingClientRect().bottom < cHeight) {
        this.props.fetchPostsData(options);
      }
    }
  }

  render() {
    const { posts, state, end, loading } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return <Home posts={posts} end={end} loading={loading} state={state} />;
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

