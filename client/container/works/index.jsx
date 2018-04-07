'use strict';

import React, { Component } from 'react';
import { connect } from 'react-redux';
import actions from '../../actions';
import {
  INITIAL_STATE,
} from '../../constants';

const mapStateToProps = (state) => {
  return {
    ...state.works,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchWorksData: () => {
      dispatch(actions.fetchWorksData());
    },
  };
};

class Works extends Component {
  componentDidMount() {
    document.title = 'Hello Works';
    const {
      state,
    } = this.props;
    if (state === INITIAL_STATE) {
      this.props.fetchWorksData();
    }
  }

  render() {
    const { works } = this.props;
    const elems = works.map((item) => {
      return (<section key={item._id}>
        <h2>{ item.title }</h2>
        <div>{ item.content }</div>
      </section>);
    });
    return (<div>
      { elems }
    </div>);
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Works);
