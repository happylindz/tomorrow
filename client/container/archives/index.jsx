import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import actions from '../../actions';
import * as constants from '../../constants';
import { query } from '../../util/index.js';
import Tags from './tags';

const mapStateToProps = (state, ownProps) => {
  const { postsData } = state.archives;
  const { search } = ownProps.location;
  const tagsRes = {
    'all': postsData.length,
  };
  let postsRes = [];
  let topic = '';
  if (search !== '') {
    topic = decodeURI(query(search).topic) || '';
  } else {
    postsRes = postsData;
  }
  postsData.forEach((post) => {
    try {
      const tags = post.tags.split(',');
      for (let tag of tags) {
        if (tag === topic) {
          postsRes.push(post);
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
    postsData: postsRes,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchArchivesData: (options) => {
      dispatch(actions.fetchArchivesData(options));
    },
  };
};

class Archives extends Component {
  componentDidMount() {
    document.title = 'Hello Archives';
    const {
      state,
      location,
    } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchArchivesData({
        type: constants.ALL_POSTS,
        page: query(location.search).page || 1,
      });
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch archives data');
    }
  }


  render() {
    const { postsData, state, tags, topic } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
      return <section>initial state</section>;
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return (<section>{
        <Tags tags={tags} topic={topic} />
      }{
        <hr />
      }{
        postsData.map((item) => {
          return (<section key={item._id}>
            <h2><Link to={`/article/${item.url}`}>{item.title}</Link></h2>
          </section>);
        })
      }</section>);
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);
