import constants from '../constants';
const apiCacheName = constants.apiCacheName;

export const saveAPIData = (url, data) => {
  if ('caches' in window) {
    caches.open(apiCacheName).then((cache) => {
      cache.put(url, new Response(JSON.stringify(data), { status: 200 }));
    });
  }
};