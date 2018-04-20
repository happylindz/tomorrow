import React from 'react';
import { BrowserRouter, Route, Link, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
// import {
//   Home,
//   Archives,
//   Project,
//   About,
//   Article
// } from '../container/index';
import asyncComponent from './async';
import './index.scss';

const Router = BrowserRouter;
const Home = asyncComponent(() => import('../container/home'));
const Archives = asyncComponent(() => import('../container/archives'));
const Project = asyncComponent(() => import('../container/project'));
const About = asyncComponent(() => import('../container/about'));
const Article = asyncComponent(() => import('../container/article'));

export default () => (
  <Router>
    <Route
      render={({ location }) => (
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
          <TransitionGroup className="content">
            <CSSTransition key={location.key} classNames="fade" timeout={3000} transitionAppear={true} transitionEnter={true}
              transitionLeave={true}>
              <Switch location={location}>
                <Route exact path="/" component={Home} />
                <Route path="/project" component={Project} />
                <Route path="/about" component={About} />
                <Route path="/archives" component={Archives} />
                <Route path="/article/:url" component={Article} />
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </div>
      )}
    />
  </Router>
);
