import React from 'react';
import { BrowserRouter, Route, NavLink, Switch } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import asyncComponent from './async';
import './index.scss';

const Router = BrowserRouter;
const Home = asyncComponent(() => import('../container/home'));
const Archives = asyncComponent(() => import('../container/archives'));
const Project = asyncComponent(() => import('../container/project'));
const About = asyncComponent(() => import('../container/about'));
const Article = asyncComponent(() => import('../container/article'));
const activeStyle = {
  fontWeight: 'bold',
  color: 'red'
};

export default () => (
  <Router>
    <Route
      render={({ location }) => (
        <div>
          <ul>
            <li>
              <NavLink exact to="/" activeStyle={activeStyle}>首页</NavLink>
            </li>
            <li>
              <NavLink to="/project" activeStyle={activeStyle}>项目</NavLink>
            </li>
            <li>
              <NavLink to="/about" activeStyle={activeStyle}>关于</NavLink>
            </li>
            <li>
              <NavLink to="/archives" activeStyle={activeStyle}>归档</NavLink>
            </li>
          </ul>
          <hr />
          <TransitionGroup className="content">
            <CSSTransition key={location.key} classNames="fade" timeout={800}>
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
