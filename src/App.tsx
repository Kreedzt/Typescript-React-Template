import React, { createContext } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import { LocaleProvider } from 'antd';
import zhCN from 'antd/lib/locale-provider/zh_CN';

import Routes from './config/router';
import './App.css';
import './assets/style/scss/index.scss';

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
  return (
    <LocaleProvider locale={zhCN}>
      <CustomBrowserRouter>
        <Routes />
      </CustomBrowserRouter>
    </LocaleProvider>
  );
};

export default App;
