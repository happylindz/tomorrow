
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchArticleData,
  addComment,
  fetchCommentData,
} from '../../actions';
import * as constants from '../../constants';
import scroll from '../../util/scroll';
import './github-gist.min.css';
import './github-markdown.min.css';
import './index.scss';
import MessageBoard from '@/components/MessageBoard';

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

    }
  };
};

class Article extends Component {
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
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch article data');
    }
    if (postId && commentState === constants.INITIAL_STATE) {
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
      article: {
        index = [],
        content,
      }, state,
      commentState,
      commentsData,
    } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
      return <section>initial state</section>;
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return <div>
        {index && index.length !== 0 ? <ul onClickCapture={this.scrollToContent}>{index.map(({ anchor, content }) => (<li key={anchor}><a href={`#${anchor}`}>{content}</a></li>))}</ul> : null}
        <hr />
        <div className="article-wrapper markdown-body" dangerouslySetInnerHTML={{ __html: content }} />
        <hr />
        <MessageBoard submit={this.addComment} state={commentState} comments={commentsData} />
      </div>;
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);
