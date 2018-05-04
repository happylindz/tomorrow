import React from 'react';
import { BrowserRouter, Route, Switch, StaticRouter } from 'react-router-dom';
// import { TransitionGroup, CSSTransition } from 'react-transition-group';
import asyncComponent from './async';
import Header from '@/components/header';
import Footer from '@/components/footer';
// import {
//   Home,
//   Archives,
//   Project,
//   About,
//   Article,
// } from '../container';
import './index.scss';

const Router = process.env.__CLIENT__ === 'client' ? BrowserRouter : StaticRouter;
const Home = asyncComponent(() => import('../container/home'));
const Archives = asyncComponent(() => import('../container/archives'));
const Project = asyncComponent(() => import('../container/project'));
const About = asyncComponent(() => import('../container/about'));
const Article = asyncComponent(() => import('../container/article'));

export const preloadComponent = (url) => {
  if (process.env.__CLIENT__ !== 'client') {
    if (url === '/') {
      return Home.load();
    } else if (url.startsWith('/project')) {
      return Project.load();
    } else if (url.startsWith('/about')) {
      return About.load();
    } else if (url.startsWith('/archives')) {
      return Archives.load();
    } else if (url.startsWith('/article')) {
      return Article.load();
    } else {
      return Promise.resolve();
    }
  }
};

export default (props) => (
  <Router {...props}>
    <Route
      render={({ location }) => [
        <Header key="header" />,
        <div key="body" className="body-wrap">
          <Switch location={location}>
            <Route exact path="/" component={Home} />
            <Route path="/project" component={Project} />
            <Route path="/about" component={About} />
            <Route path="/archives" component={Archives} />
            <Route path="/article/:url" component={Article} />
          </Switch>
          <div className="push"></div>
        </div>,
        <Footer key="footer" />
      ]}
    />
  </Router>
);
