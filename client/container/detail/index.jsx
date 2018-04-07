'use strict';

import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    document.title = 'Hello Detail';
  }

  render() {
    return (<h1>Hello Detail</h1>);
  }
}

