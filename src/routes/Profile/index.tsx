import React, { useEffect } from 'react';
import { Tabs } from 'antd';
import { getUserList } from '../../service/user';

const { TabPane } = Tabs;

const MyProfile: React.FC = () => {
  useEffect(() => {
    getUserList().then(res => {
      console.log(res);
    });
  }, []);
  return <div>Profile page...</div>;
};

export default MyProfile;
