import produce from 'immer';
import {
  LOADING_PROJECT,
  LOADING_PROJECT_SUCCESS,
  LOADING_PROJECT_FAILURE,
  LOADING_POSTS,
  LOADING_POSTS_SUCCESS,
  LOADING_POSTS_FAILURE,
  LOADING_POSTS_MORE,
  LOADING_POSTS_MORE_SUCCESS,
  LOADING_ARTICLE,
  LOADING_ARTICLE_SUCCESS,
  LOADING_ARTICLE_FAILURE,
  LOADING_ARCHIVES,
  LOADING_ARCHIVES_SUCCESS,
  LOADING_ARCHIVES_FAILURE,
  LOADING_COMMENT,
  LOADING_COMMENT_SUCCESS,
  LOADING_COMMENT_FAILURE,
  LOADING_ABOUT,
  LOADING_ABOUT_SUCCESS,
  LOADING_ABOUT_FAILURE,
  LOADING_MESSAGE,
  LOADING_MESSAGE_SUCCESS,
  LOADING_MESSAGE_FAILURE,
} from '../actionTypes';
import {
  INITIAL_STATE,
  LOADING_STATE,
  SUCCESS_STATE,
  FAILURE_STATE,
} from '../constants';

export const info = (state = { state: INITIAL_STATE, html: '' }, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_ABOUT:
    draft.state = LOADING_STATE;
    draft.html = '';
    break;
  case LOADING_ABOUT_SUCCESS:
    draft.state = SUCCESS_STATE;
    draft.html = action.payload.html;
    break;
  case LOADING_ABOUT_FAILURE:
    draft.state = FAILURE_STATE;
    draft.html = '';
    break;
  }
});

export const projects = (state = { state: INITIAL_STATE, projects: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_PROJECT:
    draft.state = LOADING_STATE;
    draft.projects = [];
    break;
  case LOADING_PROJECT_SUCCESS:
    draft.state = SUCCESS_STATE;
    Object.keys(action.payload).forEach((key) => {
      draft[key] = action.payload[key];
    });
    break;
  case LOADING_PROJECT_FAILURE:
    draft.state = FAILURE_STATE;
    draft.projects = [];
    break;
  }
});

export const posts = (state = { state: INITIAL_STATE, posts: [], loading: false, end: false }, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_POSTS:
    draft.state = LOADING_STATE;
    draft.posts = [];
    break;
  case LOADING_POSTS_SUCCESS:
    draft.state = SUCCESS_STATE;
    Object.keys(action.payload).forEach((key) => {
      draft[key] = action.payload[key];
    });
    break;
  case LOADING_POSTS_FAILURE:
    draft.state = FAILURE_STATE;
    draft.posts = [];
    break;
  case LOADING_POSTS_MORE:
    draft.loading = true;
    break;
  case LOADING_POSTS_MORE_SUCCESS:
    draft.end = action.payload.end;
    draft.posts = draft.posts.concat(action.payload.posts);
    draft.loading = false;
    break;
  }
});

export const article = (state = { state: INITIAL_STATE, article: {}}, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_ARTICLE:
    draft.state = LOADING_STATE;
    draft.article = {};
    break;
  case LOADING_ARTICLE_SUCCESS:
    draft.state = SUCCESS_STATE;
    draft.article = action.payload;
    break;
  case LOADING_ARTICLE_FAILURE:
    draft.state = FAILURE_STATE;
    draft.article = {};
    break;
  }
});

export const archives = (state = { state: INITIAL_STATE, posts: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_ARCHIVES:
    draft.state = LOADING_STATE;
    draft.posts = [];
    break;
  case LOADING_ARCHIVES_SUCCESS:
    draft.state = SUCCESS_STATE;
    Object.keys(action.payload).forEach((key) => {
      draft[key] = action.payload[key];
    });
    break;
  case LOADING_ARCHIVES_FAILURE:
    draft.state = FAILURE_STATE;
    draft.posts = [];
    break;
  }
});

export const comment = (state = { commentState: INITIAL_STATE, comments: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_COMMENT:
    draft.commentState = LOADING_STATE;
    break;
  case LOADING_COMMENT_SUCCESS:
    draft.commentState = SUCCESS_STATE;
    Object.keys(action.payload).forEach((key) => {
      draft[key] = action.payload[key];
    });
    break;
  case LOADING_COMMENT_FAILURE:
    draft.commentState = FAILURE_STATE;
    break;
  }
});

export const message = (state = { messageState: INITIAL_STATE, comments: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
  case LOADING_MESSAGE:
    draft.messageState = LOADING_STATE;
    break;
  case LOADING_MESSAGE_SUCCESS:
    draft.messageState = SUCCESS_STATE;
    Object.keys(action.payload).forEach((key) => {
      draft[key] = action.payload[key];
    });
    break;
  case LOADING_MESSAGE_FAILURE:
    draft.messageState = FAILURE_STATE;
    break;
  }
});