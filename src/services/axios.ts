import axios, { AxiosInstance } from 'axios';
import { LOGIN_URL, TOKEN_KEY, API_URL } from 'config';

// create instance normal
const instanceAxios: AxiosInstance = axios.create({
  baseURL: API_URL,
  timeout: 10000,
});

/**
 * @author: Huy Dang
 * @description: config header Authorization each send request
 */
instanceAxios.interceptors.request.use(
  config => {
    if (!config.headers.Authorization) {
      const token = localStorage.getItem(TOKEN_KEY);
      if (token) {
        config.headers.Authorization = `Bearer ${token}`;
      }
    }

    return config;
  },
  error => Promise.reject(error)
);

/**
 * @author: Huy Dang
 * @description: handle response interceptor
 */
let isShowModalExpired = false;
instanceAxios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    // token expiry
    if (
      error.response &&
      error.response.status === 401 &&
      !isShowModalExpired
    ) {
      isShowModalExpired = true;

      // Modal.warning({
      //   title: 'Token expiry time',
      //   content: 'Please login again',
      //   onOk: () => {
      //     // clear token
      //     // removeToken();
      //     // redirect to login page
      //     history.push(LOGIN_URL);
      //   }
      // });
    }

    // call api without token
    // if (error.response && error.response.status === 403) {
    //   history.push(LOGIN_URL);
    // }

    if (error.response) {
      return Promise.reject(error.response);
    }
    if (error.request) {
      return Promise.reject(error.request);
    }
    return Promise.reject(error.message);
  }
);

export async function fetchAll(requests: Promise<never>[]) {
  return axios.all(requests);
}

const http = instanceAxios;
export default http;
