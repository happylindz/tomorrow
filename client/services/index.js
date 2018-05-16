import axios from 'axios';
import SQL from './sql';

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