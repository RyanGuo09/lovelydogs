import axios from 'axios';

axios.defaults.headers.get['Content-Type'] = 'application/json;chartset=utf-8';

export const getData = (urlPath, config = {}) =>
  axios
    .get(urlPath, config)
    .then(response => response)
    .catch(error => {
      throw error;
    });
