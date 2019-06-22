import React, { useEffect, useState } from 'react';
import { message } from 'antd';

import LoginForm from './LoginForm';
import { post } from '../../config/http';
import { LoginReqData, LoginResData } from '../../service/login';

import './style/index.scss';

const Login: React.FC = (props: any) => {
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(() => {
    localStorage.removeItem('login-info');
    localStorage.removeItem('user-info');
  }, []);

  const login = (value: LoginReqData) => {
    console.log('values:', value);
    setLoading(true);
    // 模拟登录
    setTimeout(() => {
      setLoading(false);
      localStorage.setItem('login-info', 'test-token');
      props.history.replace('/');      
    }, 1000);

    // 登录
    // post<LoginReqData, LoginResData>('authentication/form', null, null, {
    //   params: value,
    //   headers: {
    //     Authorization: 'Basic cHJvcGVydHk6cHJvcGVydHk='
    //   }
    // })
    //   .then(res => {
    //     // eslint-disable-next-line no-undef
    //     localStorage.setItem('login-info', res.access_token);
    //     // eslint-disable-next-line no-undef
    //     localStorage.setItem('user-info', JSON.stringify(res));
    //     props.history.replace('/');
    //   })
    //   .catch(err => {
    //     message.error(err.data);
    //   })
    //   .finally(() => setLoading(false));
  };

  return (
    <div className="login-container d-flex align-items-center justify-content-center">
      <LoginForm submit={login} loading={loading} />
    </div>
  );
};

export default Login;
