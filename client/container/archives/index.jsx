import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import {
  fetchArchivesData,
} from '../../actions';
import * as constants from '../../constants';
import { query } from '../../util/index.js';
import Tags from './tags';

const mapStateToProps = (state, ownProps) => {
  const { postsData } = state.archives;
  const { search } = ownProps.location;
  const tagsRes = {
    'all': postsData.length,
  };
  let posts = {};
  let topic = '';
  if (search !== '') {
    topic = decodeURI(query(search).topic) || '';
  }
  postsData.forEach((post) => {
    try {
      const tags = post.tags;
      if (topic === '') {
        const year = post.year;
        if (!posts[year]) {
          posts[year] = [];
        }
        posts[year].push(post);
      }
      for (let tag of tags) {
        if (tag === topic) {
          const year = post.year;
          if (!posts[year]) {
            posts[year] = [];
          }
          posts[year].push(post);
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
    posts,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchArchivesData: (options) => {
      dispatch(fetchArchivesData(options));
    },
  };
};

class Archives extends Component {
  componentDidMount() {
    document.title = 'Hello Archives';
    const {
      state,
    } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchArchivesData();
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch archives data');
    }
  }


  render() {
    const { posts, state, tags, topic } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
      return <section>initial state</section>;
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return (<section>{
        <Tags tags={tags} topic={topic} />
      }
      <hr />
      {
        Object.keys(posts).map(year => { return parseInt(year, 10) }).sort((a, b) => {
          return b - a;
        }).map((year) => {
          return <div key={year}>
            {year}
            {posts[year].map((post) => {
              return (<section key={post._id}>
                <h2>{post.time}<Link to={`/article/${post.url}`}>{post.title}</Link></h2>
              </section>);
            })}
            <hr />
          </div>;
        })

      }</section>);
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Archives);
