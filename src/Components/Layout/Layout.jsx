import React, { useState } from "react";
import "./Layout.css";
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from "@ant-design/icons";
import { Layout, Menu, theme } from "antd";
import TrelloBoard from "../TrelloBoard/TrelloBoard";
import { Col, Row } from "antd";
const { Header, Sider, Content } = Layout;

const LayoutPage = () => {
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  return (
    <Row>
      <Col span={24}>
        {" "}
        <div>
          <Layout style={{ height: "700px" }}>
            <Sider trigger={null} collapsible collapsed={collapsed}>
              <div className="logo" />
              <Menu
                theme="dark"
                mode="inline"
                defaultSelectedKeys={["1"]}
                items={[
                  {
                    key: "1",
                    icon: <UserOutlined />,
                    label: "nav 1",
                  },
                  {
                    key: "2",
                    icon: <VideoCameraOutlined />,
                    label: "nav 2",
                  },
                  {
                    key: "3",
                    icon: <UploadOutlined />,
                    label: "nav 3",
                  },
                ]}
              />
            </Sider>
            <Layout className="site-layout">
              <Header
                style={{
                  padding: 0,
                  background: colorBgContainer,
                }}
              >
                {React.createElement(
                  collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
                  {
                    className: "trigger",
                    onClick: () => setCollapsed(!collapsed),
                  }
                )}
              </Header>
              <Content
                style={{
                  margin: "24px 16px",
                  padding: 24,
                  minHeight: 280,
                  background: colorBgContainer,
                }}
              >
                <TrelloBoard />
              </Content>
            </Layout>
          </Layout>
        </div>
      </Col>
    </Row>
  );
};

export default LayoutPage;
