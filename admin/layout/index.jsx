import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { withRouter } from 'dva/router';
const { Header, Content, Sider } = Layout;

@withRouter
export default class extends Component {
  state = {
    collapsed: false,
    menu: '',
    subMenu: '',
  };
  componentDidMount() {
    const {
      pathname
    } = this.props.location;
    this.handleBreadcrumb(pathname);
  }
  onCollapse = (collapsed) => {
    this.setState({ collapsed });
  }
  onClickMenuItem = ({ key }) => {
    this.handleBreadcrumb(key);
    this.props.history.push(key);
  }

  handleBreadcrumb = (key) => {
    let data = null;
    switch (key) {
    case '/admin/info':
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
    case '/admin/message':
      data = {
        menu: '留言板管理',
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
      location: {
        pathname
      },
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
          <Menu onClick={this.onClickMenuItem} theme="dark" mode="inline">
            <Menu.Item className={pathname === '/admin/info' && 'ant-menu-item-selected'} key="/admin/info">
              <Icon type="user" />
              <span>个人信息</span>
            </Menu.Item>
            <Menu.Item className={pathname === '/admin/post' && 'ant-menu-item-selected'} key="/admin/post">
              <Icon type="book" />
              <span>博文管理</span>
            </Menu.Item>
            <Menu.Item className={pathname === '/admin/project' && 'ant-menu-item-selected'} key="/admin/project">
              <Icon type="setting" />
              <span>项目管理</span>
            </Menu.Item>
            <Menu.Item className={pathname === '/admin/comment' && 'ant-menu-item-selected'} key="/admin/comment">
              <Icon type="exception" />
              <span>评论管理</span>
            </Menu.Item>
            <Menu.Item className={pathname === '/admin/message' && 'ant-menu-item-selected'} key="/admin/message">
              <Icon type="message" />
              <span>留言板管理</span>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout>
          <Header style={{ background: '#fff', padding: 0 }} ><a style={{ float: 'right', marginRight: 30 }} href="/admin/logout">退出</a></Header>
          <Content style={{ margin: '0 16px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>{menu}</Breadcrumb.Item>
            </Breadcrumb>
            <div style={{ padding: 24, background: '#fff', minHeight: 360 }}>
              {children}
            </div>
          </Content>
        </Layout>
      </Layout>
    );
  }
}

