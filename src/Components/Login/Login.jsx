import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Checkbox,
  Form,
  Input,
  Col,
  Row,
  Card,
  Typography,
} from "antd";

const Login = () => {
  const navigate = useNavigate();
  const board = "board-0";

  const onFinish = (values) => {
    navigate(`/${board}`);

    console.log("Success:", values);
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  return (
    <Row>
      <Col span={12} offset={6} style={{ marginTop: "100px" }}>
        <div className="site-card-border-less-wrapper">
          <Card bordered={false} style={{ width: 600 }}>
            <Typography style={{ margin: "15px" }}>LOGIN</Typography>
            <Form
              name="basic"
              labelCol={{ span: 8 }}
              wrapperCol={{ span: 16 }}
              initialValues={{ remember: true }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                label="Username"
                name="username"
                rules={[
                  { required: true, message: "Please input your username!" },
                ]}
              >
                <Input />
              </Form.Item>

              <Form.Item
                label="Password"
                name="password"
                rules={[
                  { required: true, message: "Please input your password!" },
                ]}
              >
                <Input.Password />
              </Form.Item>

              <Form.Item
                name="remember"
                valuePropName="checked"
                wrapperCol={{ offset: 8, span: 16 }}
              >
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                <Button type="primary" htmlType="submit">
                  Submit
                </Button>
              </Form.Item>
            </Form>
          </Card>
        </div>
      </Col>
    </Row>
  );
};

export default Login;
