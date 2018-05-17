import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import throttle from '../../util/throttle';
import classNames from 'classnames';
import eventUtil from '../../util/eventUtil';
import './index.scss';
let width = null;
function preventDefault(ev) {
  ev = eventUtil.getEvent(ev);
  eventUtil.preventDefault(ev);
}

@withRouter
export default class extends Component {
  constructor(...args) {
    super(...args);
    this.handleResize = throttle(this.handleResize, 10);
  }

  state = {
    menuVisible: null,
  }

  componentDidMount() {
    this.handleResize();
    eventUtil.addHandler(window, 'resize', this.handleResize);
  }

  componentWillUnmount() {
    eventUtil.removeHandler(window, 'resize', this.handleResize);
  }
  noMoving = (e) => {
    // e = eventUtil.getEvent(e);
    e.preventDefault();
    // eventUtil.preventDefault(e);
    return false;
  }
  pageForbidScroll = () => {
    document.body.style.overflow = 'hidden';
    document.body.ontouchmove = preventDefault;
    document.getElementsByClassName('body-wrap')[0].ontouchmove = preventDefault;
    document.getElementsByClassName('header-wrap')[0].ontouchmove = preventDefault;
  }
  pageAllowScroll = () => {
    document.body.style.overflow = '';
    document.body.ontouchmove = null;
    document.getElementsByClassName('body-wrap')[0].ontouchmove = null;
    document.getElementsByClassName('header-wrap')[0].ontouchmove = null;
  }

  toggleMenu = () => {
    const menuVisible = this.state.menuVisible;
    if (!menuVisible && document.body.clientWidth <= 768) {
      this.pageForbidScroll();
    } else {
      this.pageAllowScroll();
    }
    this.setState((state) => {
      return {
        menuVisible: !menuVisible,
      };
    });
  }
  handleResize = () => {
    const clientWidth = document.body.clientWidth;
    if (clientWidth > 768 && width <= 768) {
      this.setState({
        menuVisible: true,
      });
      this.pageAllowScroll();
    } else if (width >= 768 && clientWidth < 768) {
      this.setState({
        menuVisible: null,
      });
    }
    width = clientWidth;
  }
  handleNav = (e, path) => {
    e.stopPropagation();
    if (document.body.clientWidth <= 768 && this.props.location.pathname !== path) {
      this.setState({
        menuVisible: false,
      });
      this.pageAllowScroll();
      window.scrollTo(0, 0);
    } else if (this.props.location.pathname !== path) {
      window.scrollTo(0, 0);

    }
  }
  goBack = (e) => {
    e.preventDefault();
    this.props.history.goBack();
  }

  render() {
    const {
      menuVisible,
    } = this.state;

    return <div className="header-wrap">
      <header className="header">
        <div className="logo">
          <img src="//images.lindongzhou.com/website/logo.jpg" />
        </div>
        <div className="toggle-menu" onClick={this.toggleMenu}>
          <span className={classNames({
            'menu-icon': true,
            'active': menuVisible,
          })}></span>
        </div>
        <ul className={classNames({
          'header-nav': true,
          'active': menuVisible,
          'unactive': menuVisible !== null && !menuVisible,
        })} onClick={this.toggleMenu}>
          <li>
            <NavLink exact onClick={(e) => this.handleNav(e, '/')} to="/" activeClassName="active"><i className="iconfont icon-home" />首页</NavLink>
          </li>
          <li>
            <NavLink onClick={(e) => this.handleNav(e, '/project')} to="/project" activeClassName="active"><i className="iconfont icon-project" />项目</NavLink>
          </li>
          <li>
            <NavLink onClick={(e) => this.handleNav(e, '/about')} to="/about" activeClassName="active"><i className="iconfont icon-me" />关于</NavLink>
          </li>
          <li>
            <NavLink onClick={(e) => this.handleNav(e, '/archives')} to="/archives" activeClassName="active"><i className="iconfont icon-tag" />归档</NavLink>
          </li>
        </ul>
      </header>
    </div>;
  }
}