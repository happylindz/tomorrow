export const query = (url) => {
  const obj = {};
  let keyvalue = [];
  let key = '';
  let value = '';

  let paraString = url.substring(url.indexOf('?') + 1, url.length).split('&');
  for (let i = 0; i < paraString.length; i++) {
    keyvalue = paraString[i].split('=');
    key = keyvalue[0];
    value = keyvalue[1];
    obj[key] = value;
  }
  return obj;
};