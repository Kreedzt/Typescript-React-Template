import { useContext } from 'react';
import { RouteProps } from 'react-router';

import { RouterContext } from '../App';

export default function useRouter(): RouteProps {
  return useContext(RouterContext);
}
