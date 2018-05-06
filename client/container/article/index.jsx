
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchArticleData,
  addComment,
  fetchCommentData,
  resetComment,
} from '../../actions';
import * as constants from '../../constants';
import scroll from '../../util/scroll';
import './github-gist.min.css';
import './github-markdown.min.css';
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
    fetchArticleData: (options) => {
      dispatch(fetchArticleData(options));
    },
    addComment: (options) => {
      dispatch(addComment(options));
    },
    fetchCommentData: (options) => {
      dispatch(fetchCommentData(options));
    },
    resetComment: () => {
      dispatch(resetComment());
    }
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  componentDidMount() {
    document.title = 'Hello Detail';
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

  fetchCommentData(options) {
    this.props.fetchCommentData(options);
  }

  fetchArticleData(props, prevUrl, state) {
    const {
      match: {
        params: {
          url: nextUrl = '',
        },
      },
      article: {
        _id: postId,
      },
      commentState
    } = props;
    if (state === constants.INITIAL_STATE || prevUrl !== nextUrl) {
      props.fetchArticleData({
        url: nextUrl,
      });
      props.resetComment();
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch article data');
    }
    if (postId && (commentState === constants.INITIAL_STATE || commentState === constants.FAILURE_STATE)) {
      props.fetchCommentData({
        postId,
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
      commentState,
      commentsData,
    } = this.props;
    let elem = null;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      elem = (<section style={{ minHeight: 9999 }}>loading state</section>);
      break;
    case constants.SUCCESS_STATE:
      elem = (<Article key="article" {...article} scrollToContent={this.scrollToContent} />);
      break;
    default:
      return <section>something error on page, please fresh!</section>;
    }
    return [
      elem,
      <MessageBoard key="message-board" submit={this.addComment} state={commentState} comments={commentsData} />
    ];
  }
}
