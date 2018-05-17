import axios from './axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/graphql', {
    params: {
      query: `{
        message(page: ${page}, size: ${PAGE_SIZE}) {
          comments {
            _id
            name
            createdTime
            email
            content
          }
          total
          page
        }
      }`
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/api/message/${id}`);
};

export const add = (data) => {
  return axios.post('/api/message', data);
};