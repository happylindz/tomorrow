
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import Pagination from 'rc-pagination';
// import 'rc-pagination/assets/index.css';
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

class Home extends Component {
  componentDidMount() {
    document.title = 'Hello Posts';
    const {
      state,
      location,
    } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchPostsData({
        type: constants.PART_POSTS,
        page: query(location.search).page || 1,
      });
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch posts data');
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextPage = query(nextProps.location.search).page || 1;
    const thisPage = query(this.props.location.search).page || 1;
    if (nextPage !== thisPage) {
      this.props.fetchPostsData({
        type: constants.PART_POSTS,
        page: nextPage,
      });
    }
  }

  onChangePagination = (page) => {
    const {
      match,
      history,
    } = this.props;
    history.push(`${match.path}?page=${page}`);
  }

  render() {
    const { postsData, state, page, total } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
      return <section>initial state</section>;
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return (<section>{
        postsData.length > 0 ? postsData.map((item) => {
          return (<section key={item._id}>
            <h2><Link to={`/article/${item.url}`}>{item.title}</Link></h2>
            <div>{item.createdTime}</div>
            <div>{item.desc}</div>
          </section>);
        }) : '暂无博文'
      } {
        total > 10 && <Pagination
          showLessItems
          showQuickJumper
          onChange={this.onChangePagination}
          current={page}
          total={total}
        />
      }</section>);
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
