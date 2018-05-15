import * as services from '../services/message';

export default {
  namespace: 'message',
  state: {
    comments: [],
    page: 1,
    total: 1,
  },
  reducers: {
    save(state, { payload: data }) {
      return {
        ...state,
        ...data,
      };
    }
  },
  effects: {
    * fetch({ payload: { page = 1 }}, { call, put, select }) {
      const res = yield call(services.query, { page });
      if (res.status === 200 && res.data && res.data.data && res.data.data.message) {
        yield put({
          type: 'save',
          payload: {
            ...res.data.data.message,
          },
        });
      }
    },
    * reload(_, { call, put, select }) {
      const page = yield select(state => state.message.page);
      yield put({ type: 'fetch', payload: { page }});
    },
    * add({ payload }, { call, put }) {
      const res = yield call(services.add, payload);
      if (res.status === 200 && res.data.code === 0) {
        yield put({ type: 'reload' });
      }
      return res.data;
    },
    * remove({ payload }, { call, put }) {
      const res = yield call(services.remove, payload);
      if (res.status === 200 && res.data.code === 0) {
        yield put({ type: 'reload' });
      }
      return res.data;
    }
  },
};
