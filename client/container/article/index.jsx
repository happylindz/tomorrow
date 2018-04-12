'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import * as constants from '../../constants';

const mapStateToProps = (state) => {
  return {
    ...state.article,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchArticleData: (options) => {
      dispatch(actions.fetchArticleData(options));
    },
  };
};

class Article extends Component {
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

  render() {
    const { article, state } = this.props;
    switch (state) {
      case constants.INITIAL_STATE:
        return <section>initial state</section>;
      case constants.LOADING_STATE:
        return <section>loading state</section>;
      case constants.SUCCESS_STATE:
        return <div className="article-wrapper markdown-body" dangerouslySetInnerHTML={{ __html: article.content }} />;
      default:
        return <section>something error on page, please fresh!</section>;
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Article);
