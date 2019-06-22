import { useContext } from 'react';
import { RouteProps } from 'react-router';

import { RouterContext } from '../App';

// 暴露获取路由对象的方法
export default function useRouter(): RouteProps {
  return useContext(RouterContext);
}
