/**
 * service worker
 */
import constants from './constants';
const cacheName = constants.cacheName;
const apiCacheName = constants.apiCacheName;
const cacheFileList = ['/index.html'];
const HOST = process.env.NODE_ENV === 'production' ? 'http://127.0.0.1:7001' : 'http://127.0.0.1:7001';
const htmlPage = ['/', '/about', '/project', '/article/', '/archives'];


self.addEventListener('install', (e) => {
  console.log('Service Worker 状态： install');
  const cacheOpenPromise = caches.open(cacheName).then((cache) => {
    return cache.addAll(cacheFileList);
  });
  e.waitUntil(cacheOpenPromise);
});

self.addEventListener('activate', (e) => {
  console.log('Service Worker 状态： activate');
  const cachePromise = caches.keys().then((keys) => {
    return Promise.all(keys.map((key) => {
      if (key !== cacheName && key !== apiCacheName) {
        return caches.delete(key);
      }
      return null;
    }));
  });
  e.waitUntil(cachePromise);
  return self.clients.claim();
});

const matchHtml = (currentUrl) => {
  return htmlPage.map((page) => HOST + page).some((url, index) => {
    if (index === 0) {
      if (url === currentUrl) {
        return true;
      } else {
        return false;
      }
    } else if (currentUrl.startsWith(url)) {
      return true;
    } else {
      return false;
    }
  });
};

const matchApi = (currentUrl) => {
  return currentUrl.startsWith(HOST + '/graphql?');
};

self.addEventListener('fetch', function (e) {
  console.log('现在正在请求：' + e.request.url);
  const currentUrl = e.request.url;
  if (matchHtml(currentUrl)) {
    const requestToCache = e.request.clone();
    e.respondWith(
      fetch(requestToCache).then((response) => {
        if (!response || response.status !== 200) {
          throw Error('response error');
        }
        const responseToCache = response.clone();
        caches.open(cacheName).then((cache) => {
          cache.put(requestToCache, responseToCache);
        });
        console.log(response);
        return response;
      }).catch(function() {
        return caches.match(e.request).then(function(response) {
          return response || fetch('/index.html');
        });
      })
    );
  } else if (matchApi(currentUrl)) {
    const requestToCache = e.request.clone();
    e.respondWith(
      fetch(requestToCache).then((response) => {
        if (!response || response.status !== 200) {
          return response;
        }
        const responseToCache = response.clone();
        caches.open(apiCacheName).then((cache) => {
          cache.put(requestToCache, responseToCache);
        });
        console.log(response);
        return response;
      }).catch(function() {
        return caches.match(e.request);
      })
    );
  }
});
