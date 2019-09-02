import axios from 'axios';

const defaultConfig = {
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    credentials: 'same-origin',
    'content-type': 'application/json',
  },
};

const client = axios.create({
  ...defaultConfig,
  validateStatus: status => status <= 400,
});

const contextRoot = () => '';

const api = {
  post: (url, body) =>
    client.post(`${contextRoot()}/api${url}`, body, {
      headers: {
        ...defaultConfig.headers,
      },
    }),
  put: (url, body) =>
    client.put(`${contextRoot()}/api${url}`, body, {
      headers: {
        ...defaultConfig.headers,
      },
    }),
  get: url =>
    client.get(`${contextRoot()}/api${url}`, {
      headers: {
        ...defaultConfig.headers,
      },
    }),
};
export default api;
