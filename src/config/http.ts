// 封装Axios， 返回易用的函数
import axios, { AxiosRequestConfig } from 'axios';
import { message } from 'antd';

// 设置antd消息提醒框提示时间
message.config({
  duration: 5
});

// 后端基本返回数据类型，传泛型方便调用者传递类型代码提示
interface ResponseData<T = {}> {
  msg: string;
  code: number;
  data: T;
  success: boolean;
}

const Http = axios.create({
  baseURL: '/api' // 此处代理请求地址与src/setupProxy.js内匹配地址一致，才可开发环境代理
});

// 请求拦截器
Http.interceptors.request.use(
  (config: AxiosRequestConfig) => {
    // 后端所需token
    const token = localStorage.getItem('login-info');
    if (token) {
      // eslint-disable-next-line no-param-reassign
      config.headers.Authorization = `Bearer ${token}`;
    }

    return config;
  },
  err => {
    return Promise.reject(err);
  }
);

// 设置默认post请求头数据类型为json类型
Http.defaults.headers.post['Content-Type'] = 'application/json';

// 响应拦截器
Http.interceptors.response.use(
  (res: any) => {
    // 返回.data是因为Axios封装了后端返回数据，res.data才是ResponseData的数据
    return res.data;
  },
  (error: any) => {
    console.dir(error);
    const { response } = error;

    // 根据响应状态码判断token过期
    if (
      (response.status === 401 || response.status === 403) &&
      !error.config.url.includes('/authentication/form')
    ) {
      window.location.href = '/login';
      localStorage.removeItem('user-info');
      localStorage.removeItem('login-info');

      // 判断是否服务端错误，若以success为准此处可修改为response.data.success === false
    } else if (response.data.code === 1) {
      // 全局错误消息框提示
      message.error(response.data.msg);
    }
    return Promise.reject(response.data);
  }
);

// 封装四种请求方法
const get = <R = any, T = {}>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    // 此处R指的是请求参数类型，ResponseData<T>指的是响应参数类型
    Http.get<R, ResponseData<T>>(url, {
      params, // axios的params即为拼接URL参数
      ...config
    })
      .then(res => resolve(res.data)) // 此处的res已经是ResponseData<T>, 返回res.data即返回T，这样T就是ResponseData中data中的类型
      .catch(err => reject(err));
  });
};

const post = <R = any, T = {}>(
  url: string,
  params?: any,
  queryParams?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Http.post<R, ResponseData<T>>(url, params, {
      params: queryParams,
      ...config
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const put = <R = any, T = {}>(
  url: string,
  params?: any,
  queryParams?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Http.put<R, ResponseData<T>>(url, params, {
      params: queryParams,
      ...config
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

const del = <R = any, T = {}>(
  url: string,
  params?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  return new Promise((resolve, reject) => {
    Http.delete<R, ResponseData<T>>(url, {
      params,
      ...config
    })
      .then(res => resolve(res.data))
      .catch(err => reject(err));
  });
};

export { ResponseData, Http, get, post, put, del };
