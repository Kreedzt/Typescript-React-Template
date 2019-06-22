import { get, post, put, del } from '../config/http';
import { PageParams, PageResponse } from './page';

interface SysUserInfo {
  avatar: string;
  createTime: number;
  delFlag: string;
  deptId: number;
  userId: number;
  username: string;
  password: string;
  phone: string;
  salt: any;
  updateTime: number;
}

export class User {
  avatar?: string;
  createTime?: string;
  delFlag?: string;
  deptId: number = 0;
  deptName: string = '';
  password?: string = '';
  phone?: number;
  salt?: string;
  updateTime?: string;
  userId?: number;
  username: string = '';
}

export interface UserInfo {
  permissions: string[];
  roles: string[];
  abbreviation: string;
  projectLogo: string;
  sysUser: SysUserInfo;
}

const getUserById = (id: number) => get<number, User>(`/user/${id}`);

const getUserList = (page?: PageParams) =>
  get<PageParams, PageResponse<User>>(`/user/userPage`, page);

const createUser = (user: User) => post<User, User>('/user', user);

const updateUser = (user: User) => put<User, User>('/user', user);

const deleteUser = (id: number) => del<number, User>(`/user/${id}`);

export { getUserById, getUserList, createUser, updateUser, deleteUser };
