import React from 'react';
import { NavLink } from 'react-router-dom';
import './index.scss';

export default ({ tags, topic }) => {
  const all = tags['all'];
  return <nav className="archives-nav">
    {<NavLink strict to="/archives" isActive={() => topic === ''} activeClassName="active" className="tag">{`全部文章(${all})`}</NavLink>}
    {Object.keys(tags).map(tag => {
      if (tag === 'all') {
        return null;
      }
      return <NavLink strict isActive={() => topic === tag} key={tag} activeClassName="active" to={`/archives?topic=${encodeURI(tag)}`} className="tag">{`${tag}(${tags[tag]})`}</NavLink>;
    })}
  </nav>;
};