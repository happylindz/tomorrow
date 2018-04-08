import axios from 'axios';
import * as actionTypes from '../actionTypes';

export default {
  fetchProjectData: () => {
    return async (dispatch) => {
      dispatch({
        type: actionTypes.LOADING_PROJECT,
      });
      try {
        const res = await axios.get('/api/project');
        if (res.status === 200) {
          dispatch({
            type: actionTypes.LOADING_PROJECT_SUCCESS,
            payload: res.data,
          });
        } else {
          throw new Error('获取数据失败');
        }
      } catch (e) {
        dispatch({
          type: actionTypes.LOADING_PROJECT_FAILURE,
        });
      }
    };
  },
  fetchPostsData: (options) => {
    return async (dispatch) => {
      dispatch({
        type: actionTypes.LOADING_POSTS,
      });
      try {
        const res = await axios.get('/api/post', {
          params: options,
        });
        if (res.status === 200) {
          dispatch({
            type: actionTypes.LOADING_POSTS_SUCCESS,
            payload: res.data,
          });
        } else {
          throw new Error('获取数据失败');
        }
      } catch (e) {
        dispatch({
          type: actionTypes.LOADING_POSTS_FAILURE,
        });
      }
    };
  },
};
