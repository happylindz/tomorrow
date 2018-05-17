import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '@/components/banner';
import MessageBoard from '@/components/message-board';
import constants from '@/constants';
import SkeletonAbout from '@/components/skeleton-about';
import { fetchInfoData, addMessage } from '@/actions';
import './index.scss';

const mapStateToProps = (state) => {
  return {
    ...state.info,
    ...state.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchInfoData: () => {
      return dispatch(fetchInfoData());
    },
    addMessage: (options) => {
      dispatch(addMessage(options));
    },
  };
};

@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  componentDidMount() {
    const { state } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchInfoData();
    }
  }

  addMessage = (options) => {
    options.createdTime = Date.now();
    this.props.addMessage(options);
  }

  render() {
    const { html, state, comments } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <SkeletonAbout />;
    case constants.SUCCESS_STATE:
      return [
        <Banner key="banner" title="About me" cover="//images.lindongzhou.com/website/about-banner.jpeg" />,
        <article key="about" className="about markdown-body" dangerouslySetInnerHTML={{ __html: html }} />,
        <MessageBoard key="message-board" submit={this.addMessage} comments={comments} />,
      ];
    default:
      return <section className="loading-failure">系统繁忙，请稍后重试</section>;
    }
  }
}

