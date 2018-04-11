import React, { PureComponent } from 'react';
import { connect } from 'dva';

@connect(({ about }) => ({
  about,
}))
export default class extends PureComponent {
  render() {
    return 'about';
  }
}
