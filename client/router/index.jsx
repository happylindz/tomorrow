'use strict';

import React from 'react';
import { BrowserRouter, StaticRouter, Route, Link, Redirect, Switch } from 'react-router-dom';
import { List, Works, About } from '../container';

const Router = __CLIENT__ ? BrowserRouter : StaticRouter;

export default props => (
  <Router {...props}>
    <div>
      <ul>
        <li>
          <Link to="/list">博文</Link>
        </li>
        <li>
          <Link to="/about">关于</Link>
        </li>
        <li>
          <Link to="/works">作品</Link>
        </li>
      </ul>
      <hr />
      <Switch>
        <Redirect exact from="/" to="/list" />
        <Route path="/list" component={List} />
        <Route path="/about" component={About} />
        <Route path="/works" component={Works} />
      </Switch>
    </div>
  </Router>
);
