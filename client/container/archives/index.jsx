'use strict';

import React, { Component } from 'react';

export default class extends Component {
  componentDidMount() {
    document.title = 'Hello archives';
  }

  render() {
    return (<h1>Hello archives</h1>);
  }
}

