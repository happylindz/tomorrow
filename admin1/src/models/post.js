import * as constants from '../constants';
import * as services from '../services';

export default {
  namespace: 'post',
  state: {
    state: constants.INITIAL_STATE,
    postsData: [],
    page: 1,
    total: 1,
  },
  reducers: {
    save(state, { payload: data }) {
      return {
        ...state,
        ...data,
      }
    }
  },
  effects: {
    *query({ payload: { page = 1 }}, { call, put }) {
      const res = yield call(services.query, { page });
      if(res.status === 200) {
        yield put({
          type: 'save',
          payload: {
            ...res.data
          },
        });
      }
    },
    *add({payload}, { call, put, select }) {
      const res = yield call(services.add, payload)
      if(res.status === 200) {
        const page = yield select(state => state.page);
        yield put({
          type: 'query',
          payload: {
            page,
          },
        });
        return res.data;
      }
    },
    *update({payload}, { call, put, select }) {
      const res = yield call(services.update, payload);
      if(res.status === 200) {
        const page = yield select(state => state.page);
        yield put({
          type: 'query',
          payload: {
            page,
          },
        });
        return res.data;
      }
    },
    *remove({payload}, { call, put, select }) {
      const res = yield call(services.remove, payload);
      if(res.status === 200) {
        const page = yield select(state => state.page);
        yield put({
          type: 'query',
          payload: {
            page,
          },
        });
        return res.data;
      }
    }
  },
};
