import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { throttle } from 'lodash';
import classNames from 'classnames';
import eventUtil from '../../util/eventUtil';
import './index.scss';
let width = null;


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

  toggleMenu = () => {
    const menuVisible = this.state.menuVisible;
    if (!menuVisible && document.body.clientWidth <= 768) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
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
      document.body.style.overflow = 'auto';
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
      document.body.style.overflow = 'auto';
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
        <div className="logo"></div>
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
            <NavLink oonClick={(e) => this.handleNav(e, '/archives')} to="/archives" activeClassName="active"><i className="iconfont icon-tag" />归档</NavLink>
          </li>
        </ul>
      </header>
    </div>;
  }
}