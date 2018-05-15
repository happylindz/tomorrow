import axios from 'axios';
import * as actionTypes from '../actionTypes';
import { queryPosts, queryArchives, queryProjects, queryInfo, queryPost, queryComments, queryMessage } from '../services';
const pageSize = 10;
export const fetchProjectData = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_PROJECT,
    });
    try {
      const res = await queryProjects();
      if (res.status === 200 && res.data && res.data.data && res.data.data.projects) {
        dispatch({
          type: actionTypes.LOADING_PROJECT_SUCCESS,
          payload: res.data.data.projects,
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

export const fetchInfoData = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_ABOUT,
    });
    try {
      const res = await queryInfo();
      if (res.status === 200 && res.data && res.data.data && res.data.data.info) {
        dispatch({
          type: actionTypes.LOADING_ABOUT_SUCCESS,
          payload: res.data.data.info,
        });
        if (res.data.data.info.comments) {
          dispatch({
            type: actionTypes.LOADING_MESSAGE_SUCCESS,
            payload: {
              comments: res.data.data.info.comments,
            },
          });
        }
      } else {
        throw new Error('获取数据失败');
      }
    } catch (e) {
      dispatch({
        type: actionTypes.LOADING_ABOUT_FAILURE,
      });
    }
  };
};

export const fetchPostsData = (options) => {
  return async (dispatch) => {
    if (options && options.time) {
      dispatch({
        type: actionTypes.LOADING_POSTS_MORE,
      });
    } else {
      options = {};
      dispatch({
        type: actionTypes.LOADING_POSTS,
      });
    }
    options.size = pageSize;
    try {
      const res = await queryPosts(options);
      if (res.status === 200 && res.data && res.data.data && res.data.data.posts) {
        const payload = res.data.data.posts;
        if (options && options.time) {
          dispatch({
            type: actionTypes.LOADING_POSTS_MORE_SUCCESS,
            payload,
          });
        } else {
          dispatch({
            type: actionTypes.LOADING_POSTS_SUCCESS,
            payload,
          });
        }

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

export const fetchArchivesData = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_ARCHIVES,
    });
    try {
      const res = await queryArchives();
      if (res.status === 200 && res.data && res.data.data && res.data.data.posts) {
        dispatch({
          type: actionTypes.LOADING_ARCHIVES_SUCCESS,
          payload: res.data.data.posts,
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

export const fetchPostData = (options) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_ARTICLE,
    });
    try {
      const res = await queryPost(options);
      if (res.status === 200 && res.data && res.data.data && res.data.data.post) {
        const comments = res.data.data.post.comments;
        res.data.data.post.comments = null;
        dispatch({
          type: actionTypes.LOADING_ARTICLE_SUCCESS,
          payload: res.data.data.post,
        });
        if (comments) {
          dispatch({
            type: actionTypes.LOADING_COMMENT_SUCCESS,
            payload: {
              comments: comments,
            },
          });
        }
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

export const fetchCommentData = (options) => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_COMMENT,
    });
    try {
      const res = await queryComments(options);
      if (res.status === 200 && res.data && res.data.data && res.data.data.comments) {
        dispatch({
          type: actionTypes.LOADING_COMMENT_SUCCESS,
          payload: res.data.data.comments,
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
    try {
      const res = await axios.post('/api/comment', options);
      if (res.status === 200 && res.data.code === 0) {
        dispatch(fetchCommentData({
          postId: options.postId,
        }));
      }
      return res.data;
    } catch (e) {
      dispatch({
        type: actionTypes.ADD_COMMENT_FAILURE,
      });
    }
  };
};

export const fetchMessageData = () => {
  return async (dispatch) => {
    dispatch({
      type: actionTypes.LOADING_MESSAGE,
    });
    try {
      const res = await queryMessage();
      if (res.status === 200 && res.data && res.data.data && res.data.data.message) {
        dispatch({
          type: actionTypes.LOADING_MESSAGE_SUCCESS,
          payload: res.data.data.message,
        });
      } else {
        throw new Error('获取数据失败');
      }
    } catch (e) {
      dispatch({
        type: actionTypes.LOADING_MESSAGE_FAILURE,
      });
    }
  };
};

export const addMessage =  (options) => {
  return async (dispatch) => {
    try {
      const res = await axios.post('/api/message', options);
      if (res.status === 200 && res.data.code === 0) {
        dispatch(fetchMessageData());
      }
      return res.data;
    } catch (e) {
      dispatch({
        type: actionTypes.ADD_MESSAGE_FAILURE,
      });
    }
  };
};