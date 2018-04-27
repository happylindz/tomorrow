import React, { Component } from 'react';

export default function asyncComponent(importComponent) {
  let LoadedComponent = null;
  class AsyncComponent extends Component {
    static load() {
      return importComponent().then((ResolvedComponent) => {
        LoadedComponent = ResolvedComponent.default || ResolvedComponent;
      });
    }

    constructor(...args) {
      super(...args);
      this.state = {
        component: LoadedComponent,
      };
    }

    async componentDidMount() {
      if (this.state.component === null) {
        const { default: component } = await importComponent();
        this.setState({
          component: component,
        });
      }
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