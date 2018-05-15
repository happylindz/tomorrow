import axios from 'axios';

export const queryProjects = () => {
  return axios.get('/graphql', {
    params: {
      query: `{
        projects {
          projects {
            _id
            title
            href
            html
          }
        }
      }`
    }
  });
};

export const queryPosts = (options) => {
  let query = null;
  if (options.time && options.size) {
    query = `(time: "${options.time}", size: ${options.size})`;
  } else if (options.size) {
    query = `(size: ${options.size})`;
  }
  return axios.get('/graphql', {
    params: {
      query: `{
        posts${query} {
          posts {
            cover
            desc
            date
            title
            readCount
            commentCount
            _id
            tags
            url
            time
          }
          end
        }
      }`
    }
  });
};

export const queryArchives = () => {
  return axios.get('/graphql', {
    params: {
      query: `{
        posts {
          posts {
            title
            _id
            tags
            url
            year
            day
          }
          end
        }
      }`
    }
  });
};

export const queryInfo = () => {
  return axios.get('/graphql', {
    params: {
      query: `{
        info {
          _id
          html
          comments {
            _id
            name
            time
            content
            refTo {
              _id
              name
              content
            }
          }
        }
      }`
    }
  });
};

export const queryPost = (options) => {
  return axios.get('/graphql', {
    params: {
      query: `{
        post(url: "${options.url}") {
          _id
          title
          tags
          content
          date
          next {
            title
            url
          }
          index {
            tag
            content
            anchor
          }
          previous {
            title
            url
          }
          comments {
            _id
            name
            time
            content
            refTo {
              _id
              name
              content
            }
          }
        }
      }`
    },
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