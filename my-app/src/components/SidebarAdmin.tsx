import React from 'react'
import { NavLink } from 'react-router-dom'
import { Layout, Menu, Breadcrumb } from 'antd';
import { Outlet } from 'react-router-dom';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  InboxOutlined,
  BarsOutlined,
  UserOutlined
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
          <SubMenu key="sub2" icon={<BarsOutlined />} title="Categories">
            <Menu.Item key="6"><NavLink to="/admin/categories">List</NavLink></Menu.Item>
            <Menu.Item key="8"><NavLink to="/admin/categories/add">Add</NavLink></Menu.Item>
          </SubMenu>
          <SubMenu key="sub1" icon={<InboxOutlined />} title="Products">
            <Menu.Item key="3"><NavLink to="/admin/products">List</NavLink></Menu.Item>
            <Menu.Item key="4"><NavLink to="/admin/products/add">Add</NavLink></Menu.Item>
          </SubMenu>
          <SubMenu key="sub3" icon={<UserOutlined />} title="Users">
            <Menu.Item key="5"><NavLink to="/admin/user">List</NavLink></Menu.Item>
          </SubMenu>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="site-layout-background" style={{ padding: 0 }} />
        <Content style={{ margin: '0 16px' }}>
          <Breadcrumb style={{ margin: '16px 0' }}>
            {/* <Breadcrumb.Item>User</Breadcrumb.Item>
            <Breadcrumb.Item>Bill</Breadcrumb.Item> */}
          </Breadcrumb>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            <Outlet />
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}></Footer>
      </Layout>
    </Layout>

  )
}

export default SidebarAdmin