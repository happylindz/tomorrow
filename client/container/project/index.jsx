
import React, { Component } from 'react';
import { connect } from 'react-redux';
import {
  fetchProjectData,
} from '../../actions';
import * as constants from '../../constants';

const mapStateToProps = (state) => {
  return {
    ...state.project,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchProjectData: () => {
      dispatch(fetchProjectData());
    },
  };
};

class Project extends Component {
  componentDidMount() {
    document.title = 'Hello Project';
    const {
      state,
    } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchProjectData();
    } else if (state === constants.SUCCESS_STATE) {
      console.log('isomorphism fetch project data');
    }
  }

  render() {
    const { projectData, state } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
      return <section>initial state</section>;
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return (<section>{
        projectData.map((item) => {
          return (<section key={item._id}>
            <h2><a href={item.href}>{item.title}</a></h2>
            <div>{item.content}</div>
          </section>);
        })
      }</section>);
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Project);
