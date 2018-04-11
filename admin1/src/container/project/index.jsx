import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({ project }) => ({
  project,
}))
export default class extends PureComponent {
  render() {
    return <div>project</div>;
  }
}
