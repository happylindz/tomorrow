import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/graphql', {
    params: {
      query: `{
          posts(page: ${page}, size: ${PAGE_SIZE}) {
            posts {
              _id
              title
              cover
              createdTime
              tags
              url
            }
            total
            page
          }
        }`
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/api/post/${id}`);
};

export const add = (data) => {
  return axios.post('/api/post', data, {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

export const update = (id, values) => {
  return axios.put(`/api/post/${id}`, values);
};