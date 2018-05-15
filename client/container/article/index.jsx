
import React, { Component } from 'react';
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
export default class extends Component {
  componentDidMount() {
    const {
      state,
      article: {
        url: prevUrl,
      },
    } = this.props;
    this.fetchArticleData(this.props, prevUrl, state);
  }

  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          url: prevUrl = '',
        },
      },
    } = this.props;
    this.fetchArticleData(nextProps, prevUrl);
  }

  fetchArticleData(props, prevUrl, state) {
    const {
      match: {
        params: {
          url: nextUrl = '',
        },
      },
    } = props;
    if (state === constants.INITIAL_STATE || prevUrl !== nextUrl) {
      props.fetchPostData({
        url: nextUrl,
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
      return <section style={{ minHeight: 9999 }}>loading state</section>;
    case constants.SUCCESS_STATE:
      return [
        <Article key="article" {...article} scrollToContent={this.scrollToContent} />,
        <MessageBoard key="message-board" submit={this.addComment} comments={comments} />,
      ];
    default:
      return <section>something error on page, please fresh!</section>;
    }

  }
}
