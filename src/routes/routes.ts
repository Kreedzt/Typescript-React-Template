import { FC } from 'react';
import Profile from './Profile';

// 路由定义类型
export interface routeEntity {
  id?: number;
  path: string;
  name: string;
  icon?: string;
  component?: FC;
  children?: routeEntity[];
}

// 路由定义
const routesArr: routeEntity[] = [
  {
    id: 1,
    path: '/profile',
    name: '个人中心',
    icon: 'setting',
    component: Profile
  }
];

export { routesArr };
