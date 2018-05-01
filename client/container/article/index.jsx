
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchArticleData,
  addComment,
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleData: (options) => {
      dispatch(fetchArticleData(options));
    },
    addComment: (options) => {
      console.log(options);
      dispatch(addComment(options));
    },
  };
};

class Article extends Component {
  componentDidMount() {
    document.title = 'Hello Detail';
    const {
      state,
      article: {
        url,
      },
      match: {
        params: {
          url: nextUrl = '',
        },
      },
    } = this.props;
    if (state === constants.INITIAL_STATE || url !== nextUrl) {
      this.props.fetchArticleData({
        url: nextUrl,
      });
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch article data');
    }
  }
  componentWillReceiveProps(nextProps) {
    const {
      match: {
        params: {
          url: nextUrl = '',
        },
      },
    } = nextProps;
    const {
      match: {
        params: {
          url = '',
        },
      },
    } = this.props;
    if (url !== nextUrl) {
      this.props.fetchArticleData({
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

  render() {
    const {
      article: {
        index = [],
        content,
      }, state,
      addComment,
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
        <MessageBoard submit={addComment} />
      </div>;
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);
