import createHistory from 'history/createBrowserHistory';
import createLogger from 'redux-logger';
import { message } from 'antd';
import 'babel-polyfill';
import dva from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import router from './router';
import models from './models';
import './index.scss';

moment.locale('zh-cn');

const options = {
  history: createHistory(),
  onError: (e) => {
    message.error(e.message, 3);
  }
};
if (process.env.NODE_ENV !== 'production') {
  options.onAction = createLogger;
}
const app = dva(options);

app.router(router);

models.forEach((model) => {
  app.model(model);
});
if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept(['./router'], () => {
    app.start('#root');
  });
}

app.start('#root');