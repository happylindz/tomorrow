'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../actions';
import * as constants from '../../constants';
import { query } from '../../util';

const mapStateToProps = (state) => {
  return {
    ...state.posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchPostsData: (options) => {
      dispatch(actions.fetchPostsData(options));
    },
  };
};

class Archives extends Component {
  componentDidMount() {
    document.title = 'Hello Posts';
    const {
      state,
      type,
      location,
    } = this.props;
    if (type !== constants.ALL_POSTS) {
      this.props.fetchPostsData({
        type: constants.ALL_POSTS,
        page: query(location.search).page,
      });
    } else if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchPostsData({
        type: constants.ALL_POSTS,
        page: query(location.search).page || 1,
      });
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch posts data');
    }
  }


  render() {
    const { postsData, state } = this.props;
    switch (state) {
      case constants.INITIAL_STATE:
        return <section>initial state</section>;
      case constants.LOADING_STATE:
        return <section>loading state</section>;
      case constants.SUCCESS_STATE:
        return (<section>{
          postsData.map((item) => {
            return (<section key={item._id}>
              <h2><Link to={`/article/${item.url}`}>{ item.title }</Link></h2>
              <div>{ item.createdTime }</div>
            </section>);
          })
        }</section>);
      default:
        return <section>something error on page, please fresh!</section>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);
