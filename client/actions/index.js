import axios from 'axios';
import * as actionTypes from '../actionTypes';

export default {
  fetchWorksData: () => {
    return async (dispatch) => {
      dispatch({
        type: actionTypes.LOADING_WORKS,
      });
      try {
        const res = await axios.get('/api/works');
        if (res.status === 200) {
          dispatch({
            type: actionTypes.LOADING_WORKS_SUCCESS,
            payload: res.data,
          });
        }
      } catch (e) {
        dispatch({
          type: actionTypes.LOADING_WORKS_FAILURE,
        });
      }
    };
  },
};
