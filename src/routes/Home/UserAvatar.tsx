import React from 'react';
import { Avatar, Dropdown, Icon, Menu } from 'antd';
import { Link } from 'react-router-dom';

const { Item } = Menu;

interface UserAvatarProps {
  userInfo: any;
}

const ControlMenu: React.FC = () => (
  <Menu>
    <Item key="user-dropdown-0">
      <Icon type="user" />
      <Link to="/profile" className="d-inline-block">个人信息</Link>
    </Item>
    <Item key="user-dropdown-1">
      <Icon type="logout" />
      <Link to="/login" className="d-inline-block">登出</Link>
    </Item>
  </Menu>
);

const UserAvatar: React.FC<UserAvatarProps> = ({
  userInfo
}: UserAvatarProps) => {
  return (
    <div className="mr-2">
      <Dropdown overlay={ControlMenu} trigger={['click']} className="pointer">
        <Avatar size="large" icon="user" />
      </Dropdown>
    </div>
  );
};

export default UserAvatar;
