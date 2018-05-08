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
    menuVisible: false,
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
    if (!menuVisible) {
      document.getElementById('root').style.overflow = 'hidden';
    } else {
      document.getElementById('root').style.overflow = 'auto';
    }
    this.setState((state) => {
      return {
        menuVisible: !menuVisible,
      };
    });
  }
  handleResize = () => {
    const clientWidth = document.body.clientWidth;
    if (clientWidth > 768 && width < 768) {
      this.setState({
        menuVisible: true,
      });
    } else if (width > 768 && clientWidth < 768) {
      this.setState({
        menuVisible: false,
      });
    }
    width = clientWidth;
  }
  handleNav = (key) => {
    if (document.body.clientWidth < 768) {
      this.setState({
        menuVisible: false,
      });
      document.getElementById('root').style.overflow = 'auto';
    }
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
          'active': menuVisible === true,
        })}>
          <li>
            <NavLink exact onClick={this.handleNav} to="/" activeClassName="active"><i className="iconfont icon-home" />首页</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleNav} to="/project" activeClassName="active"><i className="iconfont icon-project" />项目</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleNav} to="/about" activeClassName="active"><i className="iconfont icon-me" />关于</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleNav} to="/archives" activeClassName="active"><i className="iconfont icon-tag" />归档</NavLink>
          </li>
        </ul>
      </header>
    </div>;
  }
}