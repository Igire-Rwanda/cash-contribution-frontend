import React from 'react';
import 'antd/dist/antd.css';
import './Dashlayout.css';
import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout, Menu } from 'antd';

const { Header, Content, Footer, Sider } = Layout;
const items = [
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  BarChartOutlined,
  CloudOutlined,
  AppstoreOutlined,
  TeamOutlined,
  ShopOutlined,].
  map((icon, index) => ({
  key: String(index + 1),
  icon: React.createElement(icon),
  label: `Admin ${index }`,
}));

const App = ({children}) => (
  <Layout>
    <Sider
style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 3,
        top: 1,
        bottom: 10,
      }}
    >
      <div className="logo" />
      <Menu 
      theme="dark" 
      mode="inline" 
      defaultSelectedKeys={['4']} items={[
        {
            key: "1",
            icon: <UserOutlined onClick={()=>App("/Dashboard")}/>,
            label: <h4 onClick={()=>App("/Dashboard")} style={{color:"white"}}>Dashboard</h4>
          },
          {
            key: "2",
            icon: <VideoCameraOutlined  onClick={()=>App("/Admin")}/>,
            label: <h4 onClick={()=>App("/Permission")} style={{color:"white"}}>Manager User</h4>
          },
          {
            key: "3",
            icon: <VideoCameraOutlined  onClick={()=>App("/Notification")}/>,
            label: <h4 onClick={()=>App("/Notification")} style={{color:"white"}}>Manager Team</h4>
          },
          
         
      ]} />
    </Sider>
    <Layout
      className="site-layout"
      style={{
        marginLeft: 200,
      }}
    >
      <Header
        className="site-layout-background"
        style={{
          padding: 0,
        }}
      />
      <Content
        style={{
          margin: '24px 16px 0',
          overflow: 'initial',
        }}
      >
        <div
          className="site-layout-background"
          style={{
            padding: 24,
            textAlign: 'center',
          }}
        >
          <p>long content</p>
          {
            
            Array.from(
              {
                length: 100,
              },
              (_, index) => (
                <React.Fragment key={index}>
                  
                  <br />
                </React.Fragment>
              ),
            )
          }
        </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        {children}
      </Footer>
    </Layout>
  </Layout>
);
export default App;