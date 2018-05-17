import axios from 'axios';
import SQL from './sql';
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

export const queryProjects = () => {
  return axios.get('/graphql', {
    params: SQL.projectsSQL(),
  });
};

export const queryPosts = (options) => {
  return axios.get('/graphql', {
    params: SQL.postsSQL(options),
  });
};

export const queryArchives = () => {
  return axios.get('/graphql', {
    params: SQL.archivesSQL(),
  });
};

export const queryInfo = () => {
  return axios.get('/graphql', {
    params: SQL.infoSQL()
  });
};

export const queryPost = (options) => {
  return axios.get('/graphql', {
    params: SQL.postSQL(options),
  });
};

export const queryComments = (options) => {
  return axios.get('/graphql', {
    params: {
      query: `{
        comments(postId: "${options.postId}"){
          comments {
            _id
            name
            time
            content
            refTo {
              _id
              name
              time
              content
            }
          }
        }
      }`
    }
  });
};

export const queryMessage = () => {
  return axios.get('/graphql', {
    params: {
      query: `{
        message{
          comments {
            _id
            name
            time
            content
            refTo {
              _id
              name
              time
              content
            }
          }
        }
      }`
    }
  });
};

export const addComment = (options) => {
  return axios.post('/api/comment', options);
};

export const addMessage = (options) => {
  return axios.post('/api/message', options);
};