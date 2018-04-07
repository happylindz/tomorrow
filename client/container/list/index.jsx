'use strict';

import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    document.title = 'Hello List';
  }

  render() {
    return (<h1>Hello List</h1>);
  }
}

