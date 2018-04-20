import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/admin/api/comment', {
    params: {
      page,
      size: PAGE_SIZE,
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/admin/api/comment/${id}`);
};

export const add = (data) => {
  return axios.post('/admin/api/comment', data);
};