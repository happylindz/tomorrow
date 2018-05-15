import * as services from '../services/info';

export default {
  namespace: 'info',
  state: {
    name: '',
    info: '',
    infoType: '',
    _id: '',
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
    * query(_, { call, put }) {
      const res = yield call(services.query);
      if (res.status === 200 && res.data && res.data.data && res.data.data.info) {
        yield put({
          type: 'save',
          payload: {
            ...res.data.data.info,
          },
        });
      }
    },
    * change({ payload }, { call, put, select }) {
      const _id = yield select(state => state.info._id);
      let res = null;
      if (_id === '') {
        res = yield put({
          type: 'add',
          payload,
        });
      } else {
        res = yield put({
          type: 'update',
          payload,
        });
      }
      return res;
    },
    * add({ payload }, { call, put }) {
      const res = yield call(services.add, payload);
      if (res.status === 200 && res.data.code === 0) {
        yield put({ type: 'query' });
      }
      return res.data;
    },
    * update({ payload }, { call, put, select }) {
      const _id = yield select(state => state.info._id);
      const res = yield call(services.update, _id, payload);
      if (res.status === 200 && res.data.code === 0) {
        yield put({ type: 'query' });
      }
      return res.data;
    },
  }
};
