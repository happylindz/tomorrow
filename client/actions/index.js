import axios from 'axios';
import * as actionTypes from '../actionTypes';

export const fetchProjectData = () => {
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
};

export const fetchPostsData = (options) => {
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
};

export const fetchArticleData = (options) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_ARTICLE,
    });
    try {
      const res = await axios.get('/api/article', {
        params: options,
      });
      if (res.status === 200) {
        dispatch({
          type: actionTypes.LOADING_ARTICLE_SUCCESS,
          payload: res.data,
        });
      } else {
        throw new Error('获取数据失败');
      }
    } catch (e) {
      dispatch({
        type: actionTypes.LOADING_ARTICLE_FAILURE,
      });
    }
  };
};

export const fetchArchivesData = (options) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_ARCHIVES,
    });
    try {
      const res = await axios.get('/api/archives');
      if (res.status === 200) {
        dispatch({
          type: actionTypes.LOADING_ARCHIVES_SUCCESS,
          payload: res.data,
        });
      } else {
        throw new Error('获取数据失败');
      }
    } catch (e) {
      dispatch({
        type: actionTypes.LOADING_ARCHIVES_FAILURE,
      });
    }
  };
};

export const fetchCommentData = (options) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_COMMENT,
    });
    try {
      const res = await axios.get('/api/comment');
      if (res.status === 200) {
        dispatch({
          type: actionTypes.LOADING_COMMENT_SUCCESS,
          payload: res.data,
        });
      } else {
        throw new Error('获取数据失败');
      }
    } catch (e) {
      dispatch({
        type: actionTypes.LOADING_COMMENT_FAILURE,
      });
    }
  };
};

export const addComment =  (options) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.ADD_COMMENT,
    });
    try {
      const res = await axios.post('/api/comment', options);
      if (res.status === 200 && res.data.code === 0) {
        fetchCommentData();
      }
      return res.data;
    } catch (e) {
      dispatch({
        type: actionTypes.ADD_COMMENT_FAILURE,
      });
    }
  };
};
