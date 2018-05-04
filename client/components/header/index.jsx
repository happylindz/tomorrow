import React, { Component } from 'react';
import { NavLink, withRouter } from 'react-router-dom';
import { throttle } from 'lodash';
import './index.scss';
let width = null;

@withRouter
export default class extends Component {
  state = {
    menuVisible: false,
  }


  componentDidMount() {
    this.handleResize();
    window.onresize = throttle(this.handleResize, 10);
  }

  componentWillUnmount() {
    window.onresize = null;
  }


  toggleMenu = () => {
    const menuVisible = this.state.menuVisible;
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
    }
  }

  render() {
    const {
      menuVisible,
    } = this.state;
    return <div className="header-wrap">
      <header className="header clearfix">
        <div className="toggle-menu" onClick={this.toggleMenu}><span className="menu-icon"></span></div>
        <ul className="header-nav" style={{ 'display': menuVisible === true ? 'block' : 'none' }}>
          <li>
            <NavLink exact onClick={this.handleNav} to="/" activeClassName="active">首页</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleNav} to="/project" activeClassName="active">项目</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleNav} to="/about" activeClassName="active">关于</NavLink>
          </li>
          <li>
            <NavLink onClick={this.handleNav} to="/archives" activeClassName="active">归档</NavLink>
          </li>
        </ul>
      </header>
    </div>;
  }
}