import React from 'react';
import createHistory from 'history/createBrowserHistory';
import createLogger from 'redux-logger';
import { message } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';
import dva from 'dva';
import moment from 'moment';
import 'moment/locale/zh-cn';
import router from './router';
import models from './models';

moment.locale('zh-cn');

const app = dva({
  history: createHistory(),
	// onAction: createLogger(),
	onError(e) {
		message.error(e.message, 3);
	}
});

app.router(router);

models.forEach((model) => {
	app.model(model);
});

app.start('#root');



