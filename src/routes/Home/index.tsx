import React, { useEffect } from 'react';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import { NavLink, Route, Switch } from 'react-router-dom';

import UserAvatar from './UserAvatar';

import './style/index.scss';

import { routesArr } from '../routes';
import useRouter from '../../hooks/useRouter';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const Home: React.FC = () => {
  const routerProps = useRouter();
  console.log(routerProps);

  const routesArray = [];

  routesArr.forEach((routeItem) => {
    const { path, component } = routeItem;
    // @ts-ignore
    routesArray.push(<Route key={path} component={component} path={path} />);
  });

  useEffect(() => {}, []);

  return (
    <Layout className="home-layout">
      <Header className="top-header d-flex justify-content-between w-100">
        <div className="d-inline-flex align-items-center">
          <div className="logo d-flex justify-content-center">
            <img src="" alt="" />
          </div>
        </div>
        <UserAvatar userInfo={null} />
      </Header>
      <Layout>
        <Sider
          trigger={null}
          collapsible
          width={200}
          style={{ background: '#fff' }}
        >
          <Menu theme="dark" mode="inline" className="side-menu">
            {routesArr.map((route) =>
              (route.children && route.children.length !== 0 ? (
                <SubMenu
                  key={route.id}
                  title={
                    <span>
                      <Icon type={route.icon} />
                      {route.name}
                    </span>
                  }
                >
                  {route.children.map((subRoute) => (
                    <Menu.Item key={subRoute.id}>
                      <NavLink to={subRoute.path}>
                        <Icon type={subRoute.icon} />
                        {subRoute.name}
                      </NavLink>
                    </Menu.Item>
                  ))}
                </SubMenu>
              ) : (
                <Menu.Item key={route.id}>
                  <NavLink to={route.path}>
                    <Icon type={route.icon} />
                    {route.name}
                  </NavLink>
                </Menu.Item>
              ))
            )}
          </Menu>
        </Sider>
        <Content>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>
              {routerProps.location &&
                routerProps.location.pathname.replace('/', '')}
            </Breadcrumb.Item>
          </Breadcrumb>
          <div className="router-view-content">
            <Switch>{routesArray}</Switch>
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default Home;
