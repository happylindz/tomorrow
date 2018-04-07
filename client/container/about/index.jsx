'use strict';

import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    document.title = 'Hello About';
  }

  render() {
    return (<h1>Hello About</h1>);
  }
}

