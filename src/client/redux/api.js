import axios from 'axios';

const api = axios.create({
  baseURL: `/api`,
  timeout: 1000 * 20,
  headers: { 'Content-Type': 'application/json' },
  // withCredentials: true,
});

// const onSuccess = (response) => response;
// const onFail = (err) => {
//   if (err.response.status === 401) {
//     log(`Обработал ошибку 401`);
//     return {data: null};
//   }
//   return err;
// };

// api.interceptors.response.use(onSuccess, onFail);

export default api;