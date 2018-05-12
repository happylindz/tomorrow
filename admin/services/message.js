import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/admin/api/message', {
    params: {
      page,
      size: PAGE_SIZE,
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/admin/api/message/${id}`);
};

export const add = (data) => {
  return axios.post('/admin/api/message', data);
};