import React from 'react';
import { NavLink } from 'react-router-dom';
import './tags.scss';
const activeStyle = {
  fontWeight: 'bold',
  color: 'red'
};

export default ({ tags, topic }) => {
  const all = tags['all'];
  return <div>
    {<NavLink strict to="/archives" isActive={() => topic === ''} activeStyle={activeStyle} className="tag">{`全部(${all})`}</NavLink>}
    {Object.keys(tags).map(tag => {
      if (tag === 'all') {
        return null;
      }
      return <NavLink strict isActive={() => topic === tag} key={tag} activeStyle={activeStyle} to={`/archives?topic=${encodeURI(tag)}`} className="tag">{`${tag}(${tags[tag]})`}</NavLink>;
    })}
  </div>;
};