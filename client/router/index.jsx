'use strict';

import React from 'react';
import { BrowserRouter, StaticRouter, Route, Link, Switch } from 'react-router-dom';
import { Home, Archives, Project, About } from '../container';

const Router = __CLIENT__ ? BrowserRouter : StaticRouter;

export default props => (
  <Router {...props}>
    <div>
      <ul>
        <li>
          <Link to="/">首页</Link>
        </li>
        <li>
          <Link to="/project">项目</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/archives">归档</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/project" component={Project} />
        <Route path="/about" component={About} />
        <Route path="/archives" component={Archives} />
      </Switch>
    </div>
  </Router>
);
