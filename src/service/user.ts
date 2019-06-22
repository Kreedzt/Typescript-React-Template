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

interface UserInfo {
  permissions: string[];
  roles: string[];
  abbreviation: string;
  projectLogo: string;
  sysUser: SysUserInfo
}

export { UserInfo }