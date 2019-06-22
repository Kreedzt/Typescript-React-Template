import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Login from '../routes/Login/index';
import Home from '../routes/Home/index';

// 基本路由定义
const Routes: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route
        path="/"
        render={() => {
          // 如果无token跳转回登录页
          return localStorage.getItem('login-info') ? (
            <Home />
          ) : (
            <Redirect to="/login" />
          );
        }}
      />
    </Switch>
  );
};

export default Routes;
