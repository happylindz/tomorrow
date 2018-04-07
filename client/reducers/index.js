import produce from 'immer';
import {
  LOADING_WORKS,
  LOADING_WORKS_SUCCESS,
  LOADING_WORKS_FAILURE,
} from '../actionTypes';
import {
  INITIAL_STATE,
  LOADING_STATE,
  SUCCESS_STATE,
  FAILURE_STATE,
} from '../constants';

export const works = (state = { state: INITIAL_STATE, works: [] }, action) => produce(state, (draft) => {
  switch (action.type) {
    case LOADING_WORKS:
      draft.state = LOADING_STATE;
      break;
    case LOADING_WORKS_SUCCESS:
      draft.state = SUCCESS_STATE;
      draft.works = draft.works.concat(action.payload);
      break;
    case LOADING_WORKS_FAILURE:
      draft.state = FAILURE_STATE;
      break;
  }
});
