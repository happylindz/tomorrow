import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({ comment }) => ({
  comment,
}))
export default class extends PureComponent {
  render() {
    return <div>comment</div>;
  }
}
