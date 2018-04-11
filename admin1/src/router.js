// eslint-disable-next-line
import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import Layout from './layout';
import Login from './container/login';
import Post from './container/post';
import Project from './container/project';
import Comment from './container/comment';
import About from './container/about';

const IndexPage = () => (<Layout>
    <Switch>
      <Route path='/admin/about' component={About}/>
      <Route path='/admin/comment' component={Comment}/>
      <Route path='/admin/project' component={Project}/>
      <Route path='/admin/post' component={Post}/>
    </Switch> 
</Layout>)

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route exact path='/admin/login' component={Login}/>
        <Route path='/admin' component={IndexPage}/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;