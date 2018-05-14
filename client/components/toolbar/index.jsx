import React, { PureComponent } from 'react';
import classNames from 'classnames';
import throttle from '../../util/throttle';
import './index.scss';
import scroll from '../../util/scroll';
import eventUtil from '../../util/eventUtil';

export default class extends PureComponent {
  constructor(...args) {
    super(...args);
    this.handleToolBar = throttle(this.handleToolBar, 500);
  }
  state = {
    visible: false,
  }
  componentDidMount() {
    eventUtil.addHandler(window, 'scroll', this.handleToolBar);
  }

  componentWillUnmount() {
    eventUtil.removeHandler(window, 'scroll', this.handleToolBar);
  }

  handleToolBar = (e) => {
    const clientHeight = document.documentElement.clientHeight;
    const clientTop = document.documentElement.scrollTop || document.body.scrollTop;
    if (clientTop >= clientHeight) {
      this.setState({
        visible: true,
      });
    } else {
      this.setState({
        visible: false,
      });
    }
  }
  returnTop = (e) => {
    e.preventDefault();
    scroll.call(this, document.getElementsByTagName('body')[0], 500);
  }
  render() {
    return <a className={classNames({
      'returnTop': true,
      'active': this.state.visible,
    })} onClick={this.returnTop} href="#">
      <i className="iconfont icon-arrow-top" /><br />TOP
    </a>;
  }
}