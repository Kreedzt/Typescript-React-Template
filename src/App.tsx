import React, { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Routes from './config/router';
import './App.css';
import './assets/style/bootstrap.css';
import './assets/style/scss/index.scss';

// 创建路由提供者，方便子组件拿到路由对象
export const RouterContext = createContext({});

const CustomBrowserRouter = ({ children }) => (
  <BrowserRouter>
    <Route>
      {routeProps => (
        <RouterContext.Provider value={routeProps}>
          {children}
        </RouterContext.Provider>
      )}
    </Route>
  </BrowserRouter>
);

const App: React.FC = () => {
  // 设置antd默认语言
  return (
    <LocaleProvider locale={zhCN}>
      <CustomBrowserRouter>
        <Routes />
      </CustomBrowserRouter>
    </LocaleProvider>
  );
};

export default App;
