import produce from 'immer';
import {
  LOADING_PROJECT,
  LOADING_PROJECT_SUCCESS,
  LOADING_PROJECT_FAILURE,
  LOADING_POSTS,
  LOADING_POSTS_SUCCESS,
  LOADING_POSTS_FAILURE,
} from '../actionTypes';
import {
  INITIAL_STATE,
  LOADING_STATE,
  SUCCESS_STATE,
  FAILURE_STATE,
} from '../constants';

export const project = (state = { state: INITIAL_STATE, projectData: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOADING_PROJECT:
      draft.state = LOADING_STATE;
      break;
    case LOADING_PROJECT_SUCCESS:
      draft.state = SUCCESS_STATE;
      draft.projectData = draft.projectData.concat(action.payload);
      break;
    case LOADING_PROJECT_FAILURE:
      draft.state = FAILURE_STATE;
      break;
  }
});

export const posts = (state = { state: INITIAL_STATE, postsData: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOADING_POSTS:
      draft.state = LOADING_STATE;
      break;
    case LOADING_POSTS_SUCCESS:
      draft.state = SUCCESS_STATE;
      draft.total = action.payload.total;
      draft.type = action.payload.type;
      draft.page = action.payload.page;
      draft.postsData = action.payload.postsData;
      break;
    case LOADING_POSTS_FAILURE:
      draft.state = FAILURE_STATE;
      break;
  }
});
