import React, { Component } from 'react';
import { connect } from 'react-redux';
import Banner from '@/components/banner';
import MessageBoard from '@/components/message-board';
import constants from '@/constants';
import SkeletonAbout from '@/components/skeleton-about';
import { fetchAboutData, fetchMessageData, addMessage } from '@/actions';
import './index.scss';

const mapStateToProps = (state) => {
  return {
    ...state.about,
    ...state.message,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchAboutData: () => {
      return dispatch(fetchAboutData());
    },
    fetchMessageData: () => {
      dispatch(fetchMessageData());
    },
    addMessage: (options) => {
      dispatch(addMessage(options));
    },
  };
};


@connect(mapStateToProps, mapDispatchToProps)
export default class extends Component {
  componentDidMount() {
    const { state, messageState } = this.props;
    if (state === constants.INITIAL_STATE || state === constants.FAILURE_STATE) {
      this.props.fetchAboutData();
    }
    if (messageState === constants.INITIAL_STATE || messageState === constants.FAILURE_STATE) {
      this.props.fetchMessageData();
    }
  }

  addMessage = (options) => {
    options.createdTime = Date.now();
    this.props.addMessage(options);
  }

  render() {
    const { html, state, messageState, messagesData } = this.props;
    switch (state) {
    case constants.INITIAL_STATE:
    case constants.LOADING_STATE:
      return <SkeletonAbout />;
    case constants.SUCCESS_STATE:
      return [
        <Banner key="banner" title="About me" cover="http://images.lindongzhou.com/website/about-banner.jpeg" />,
        <article key="about" className="about markdown-body" dangerouslySetInnerHTML={{ __html: html }} />,
        <MessageBoard key="message-board" submit={this.addMessage} state={messageState} comments={messagesData} />,
      ];
    default:
      return <section>something error on page, please fresh!</section>;
    }
  }
}

