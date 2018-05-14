
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import {
  fetchProjectData,
} from '../../actions';
import * as constants from '../../constants';
import './index.scss';

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

@connect(mapStateToProps, mapDispatchToProps)
export default class extends PureComponent {
  componentDidMount() {
    const { state } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchProjectData();
    }
  }

  render() {
    const { projectData, state } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <section>loading state</section>;
    case constants.SUCCESS_STATE:
      return (<section className="project-wrapper">{
        projectData.map((item) => {
          return (<section className="project-item" key={item._id}>
            <a href={item.href}>
              <h2 className="title">{item.title}</h2><span>点击进入</span>
              <article className="content markdown-body" dangerouslySetInnerHTML={{ __html: item.html }} />
            </a>
          </section>);
        })
      }</section>);
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

