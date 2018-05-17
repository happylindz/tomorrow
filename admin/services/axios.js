import axios from 'axios';
function getCookie(name) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)');
  const arr = document.cookie.match(reg);
  if (arr) { return unescape(arr[2]) }
  else { return null }
}
function csrfSafeMethod(method) {
  return (/^(get|head|options|trace)$/.test(method));
}


axios.interceptors.request.use(config => {
  let xtoken = getCookie('csrfToken');
  if (!csrfSafeMethod(config.method)) {
    config.headers['x-csrf-token'] = xtoken;
  }
  return config;
}, (error) => {
  return Promise.reject(error);
});

export default axios;