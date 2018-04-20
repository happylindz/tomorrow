import axios from 'axios';

export const query = () => {
  return axios.get('/admin/api/info');
};

export const add = (data) => {
  return axios.post('/admin/api/info', data);
};

export const update = (id, values) => {
  return axios.put(`/admin/api/info/${id}`, values);
};