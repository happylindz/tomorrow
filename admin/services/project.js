import axios from 'axios';
import {
  PAGE_SIZE,
} from '../constants';

export const query = ({ page }) => {
  return axios.get('/admin/api/project', {
    params: {
      page,
      size: PAGE_SIZE,
    },
  });
};

export const remove = ({ id }) => {
  return axios.delete(`/admin/api/project/${id}`);
};

export const add = (data) => {
  return axios.post('/admin/api/project', data);
};

export const update = (id, values) => {
  return axios.put(`/admin/api/project/${id}`, values);
};