import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/api/admin/post', {
    params: {
      page,
      size: PAGE_SIZE,
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/api/admin/post/${id}`);
};

export const add = (data) => {
  return axios.post('/api/admin/post', data, {
    method: 'post',
    headers: {'Content-Type': 'multipart/form-data'}
  });
};

export const update = (data) => {
  return axios.put(`/api/admin/post/${data.get('id')}`, data);
}