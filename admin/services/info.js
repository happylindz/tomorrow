import axios from './axios';

export const query = () => {
  return axios.get('/graphql', {
    params: {
      query: `{
        info {
          _id
          name
          info
          infoType
        }
      }`
    }
  });
};

export const add = (data) => {
  return axios.post('/api/info', data);
};

export const update = (id, values) => {
  return axios.put(`/api/info/${id}`, values);
};