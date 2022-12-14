import React, {useState} from 'react';
import { Link, Outlet } from "react-router-dom";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';

const { Header, Sider, Content } = Layout;

export const WorkerPanel = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    return (
        <Layout style={{height: '100vh'}}>
          <Sider trigger={null} collapsible collapsed={collapsed}>
            <div className="logo" />
            <Menu
              theme="dark"
              mode="inline"
              defaultSelectedKeys={['1']}
              items={[
                {
                  key: '1',
                  icon: <UserOutlined />,
                  label: <Link to="/worker-panel">Wypożyczenia</Link>,
                },
                {
                  key: '2',
                  icon: <UserOutlined />,
                  label: <Link to="rent">Wypożycz</Link>,
                },
                {
                  key: '3',
                  icon: <UserOutlined />,
                  label: <Link to="return">Zwrot</Link>,
                },
                {
                    key: '4',
                    icon: <UserOutlined />,
                    label: <Link to="service">Serwis</Link>,
                },
                {
                    key: '5',
                    icon: <UserOutlined />,
                    label: <Link to="sale">Sprzedaż</Link>,
                },
                {
                    key: '6',
                    icon: <UserOutlined />,
                    label: <Link to="daily-report">Raport Dzienny</Link>,
                },
              ]}
            />
          </Sider>
          <Layout className="site-layout">
            <Header style={{ padding: 0, background: colorBgContainer }}>
              {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
                className: 'trigger',
                onClick: () => setCollapsed(!collapsed),
              })}
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                minHeight: 280,
                background: colorBgContainer,
              }}
            >
              <Outlet/>
            </Content>
          </Layout>
        </Layout>
      );
}

export default WorkerPanel;