import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/graphql', {
    params: {
      query: `{
        projects(page: ${page}, size: ${PAGE_SIZE}) {
          projects {
            _id
            title
            contentType
            content
            href
          }
          total
          page
        }
      }`
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/api/project/${id}`);
};

export const add = (data) => {
  return axios.post('/api/project', data);
};

export const update = (id, values) => {
  return axios.put(`/api/project/${id}`, values);
};