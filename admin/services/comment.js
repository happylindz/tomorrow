import axios from './axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/graphql', {
    params: {
      query: `{
        comments(page: ${page}, size: ${PAGE_SIZE}) {
          comments {
            _id
            title
            name
            createdTime
            email
            content
            postId
          }
          total
          page
        }
      }`
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/api/comment/${id}`);
};

export const add = (data) => {
  return axios.post('/api/comment', data);
};