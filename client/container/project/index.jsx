
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import SkeletonProject from '@/components/skeleton-project';
import { fetchProjectData } from '../../actions';
import * as constants from '../../constants';
import { saveAPIData } from '@/util/cache';
import sql from '@/services/sql';
import './index.scss';

const mapStateToProps = (state) => {
  return {
    ...state.projects,
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
    } else {
      const params = sql.projectsSQL();
      // save API data
      saveAPIData(`/graphql?query=${sql.encode(params.query)}`, {
        data: {
          projects: {
            projects: this.props.projects,
          },
        },
      });
    }
  }

  render() {
    const { projects, state } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <SkeletonProject />;
    case constants.SUCCESS_STATE:
      return (<section className="project-wrapper">{
        projects.map((item) => {
          return (<section className="project-item" key={item._id}>
            <a href={item.href}>
              <h2 className="title">{item.title}</h2><span>点击进入</span>
              <article className="content markdown-body" dangerouslySetInnerHTML={{ __html: item.html }} />
            </a>
          </section>);
        })
      }</section>);
    default:
      return <section className="loading-failure">系统繁忙，请稍后重试</section>;
    }
  }
}

