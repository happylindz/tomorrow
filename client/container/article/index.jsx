
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchPostData,
  addComment,
} from '../../actions';
import * as constants from '../../constants';
import scroll from '../../util/scroll';
import './index.scss';
import MessageBoard from '@/components/message-board';
import Article from '@/components/article';
import SkeletonArticle from '@/components/skeleton-article';
import { saveAPIData } from '@/util/cache';
import sql from '@/services/sql';

const mapStateToProps = (state) => {
  return {
    ...state.article,
    ...state.comment,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    fetchPostData: (options) => {
      dispatch(fetchPostData(options));
    },
    addComment: (options) => {
      dispatch(addComment(options));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class extends PureComponent {
  componentDidMount() {
    const { state } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchPostData({
        url: this.props.match.params.url
      });
    } else if (state === constants.SUCCESS_STATE) {
      const url = this.props.match.params.url;
      if (url === this.props.article.url) {
        const params = sql.postSQL({
          url: this.props.match.params.url,
        });
        // save API data
        saveAPIData(`/graphql?query=${sql.encode(params.query)}`, {
          data: {
            post: {
              ...this.props.article,
              comments: this.props.comments,
            },
          }
        });
      } else {
        this.props.fetchPostData({
          url: this.props.match.params.url
        });
      }
    }
  }
  componentWillReceiveProps(nextProps) {
    const url = nextProps.article.url;
    const nextUrl = nextProps.match.params.url;
    const state = nextProps.state;
    if (state === constants.SUCCESS_STATE && url !== nextUrl) {
      this.props.fetchPostData({
        url: nextProps.match.params.url
      });
    }
  }

  scrollToContent(e) {
    e.preventDefault();
    try {
      const hash = e.target.hash.slice(1);
      const target = document.getElementById(hash);
      scroll.call(this, target, 500);
    } catch (e) {

    }
  }

  addComment = (options) => {
    options.postId = this.props.article._id;
    options.createdTime = Date.now();
    this.props.addComment(options);
  }

  render() {
    const {
      article,
      state,
      comments,
    } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <SkeletonArticle />;
    case constants.SUCCESS_STATE:
      return [
        <Article key="article" {...article} scrollToContent={this.scrollToContent} />,
        <MessageBoard key="message-board" submit={this.addComment} comments={comments} />,
      ];
    default:
      return <section className="loading-failure">系统繁忙，请稍后重试</section>;
    }

  }
}
