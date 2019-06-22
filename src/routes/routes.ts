import { FC, ComponentType } from 'react';
import Profile from './Profile';

interface routeEntity {
  id?: number;
  path: string;
  name: string;
  icon?: string;
  component?: FC;
  children?: routeEntity[];
}

const routesArr: routeEntity[] = [{
  id: 1,
  path: '/profile',
  name: '个人中心',
  component: Profile
}];

export { routesArr };
