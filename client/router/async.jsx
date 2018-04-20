import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  class AsyncComponent extends Component {
    constructor(props) {
      super(props);

      this.state = {
        component: null,
        visible: false,
      };
    }

    async componentDidMount() {
      const { default: component } = await importComponent();

      this.setState({
        component: component,
        visible: true,
      });
    }

    render() {
      const C = this.state.component;
      return <div>
        {C ? <C {...this.props} /> : null}
      </div>;
    }
  }

  return AsyncComponent;
}