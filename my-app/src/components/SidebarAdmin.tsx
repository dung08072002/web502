import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
} from '@ant-design/icons';


const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const breadcrumbNameMap = {
  '/admin': 'Admin',
  '/admin/dashboard': 'Dashboard',
  '/admin/products': 'Products',
  '/admin/products/add': 'Add Product'
};

const SidebarAdmin = () => {
  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider collapsible>
        <div className="logo" />
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          <Menu.Item key="1" icon={<PieChartOutlined />}>
            <NavLink to="/admin">Dashboard</NavLink>
          </Menu.Item>
          <Menu.Item key="2" icon={<DesktopOutlined />}>
          </Menu.Item>
          <SubMenu key="sub1" icon={<UserOutlined />} title="Products">
            <Menu.Item key="3"><NavLink to="/admin/products">List</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/admin/products/add">Add</NavLink></Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu key="sub2" icon={<TeamOutlined />} title="Team">
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9" icon={<FileOutlined />}>
            Files
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item>
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
      </Layout>
    </Layout>
  )
}

export default SidebarAdmin