import React from 'react';
import './index.scss';
export default () => {
  return <footer className="footer">Copyright © 2016-{(new Date()).getFullYear()} Lindz.</footer>;
};