import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter } from 'dva/router';
const { Header, Content, Footer, Sider } = Layout;
const SubMenu = Menu.SubMenu;

@withRouter
export default class extends Component {
  state = {
    collapsed: false,
    menu: '',
    subMenu: '',
  };
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  onClickMenuItem = ({key}) => {
    this.handleBreadcrumb(key);
    this.props.history.push(key);
  }
  componentDidMount() {
    const {
      pathname
    } = this.props.location;
    this.handleBreadcrumb(pathname);
  }
  
  handleBreadcrumb = (key) => {
    let data = null;
    switch(key) {
      case '/admin/about':
        data = {
          menu: '个人信息',
          subMenu: '修改',
        };
        break;
      case '/admin/post':
        data = {
          menu: '博文管理',
        };
        break;
      case '/admin/project':
        data = {
          menu: '项目管理',
        };
        break;
      case '/admin/comment':
        data = {
          menu: '评论管理',
        };
        break;
      default: 
        data = {
          menu: '',
        };
        break;
    }
    this.setState({
      ...data,
    });
  }
  render() {
    const {
      children,
    } = this.props;
    const {
      menu,
    } = this.state;
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          collapsed={this.state.collapsed}
          onCollapse={this.onCollapse}
        >
          <div className="logo" style={{ height: 60 }} />
          <Menu onClick={ this.onClickMenuItem } theme="dark" mode="inline">
            <Menu.Item key="/admin/about">
              <Icon type="user" />
              <span>个人信息</span>
            </Menu.Item>
            <Menu.Item key="/admin/post">
              <Icon type="book" />
              <span>博文管理</span>
            </Menu.Item>
            <Menu.Item key="/admin/project">
              <Icon type="setting" />
              <span>项目管理</span>
            </Menu.Item>
            <Menu.Item key="/admin/comment">
              <Icon type="message" />
              <span>评论管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} />
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{ menu }</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              { children }
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

