import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/admin/api/post', {
    params: {
      page,
      size: PAGE_SIZE,
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/admin/api/post/${id}`);
};

export const add = (data) => {
  return axios.post('/admin/api/post', data, {
    method: 'post',
    headers: { 'Content-Type': 'multipart/form-data' }
  });
};

export const update = (id, values) => {
  return axios.put(`/admin/api/post/${id}`, values);
};