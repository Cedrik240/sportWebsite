import React from 'react';
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Form, Input } from 'antd';
import { useNavigate } from 'react-router-dom';
import sport from '../..//components/assets/images/sport.gif';
import logo from '../../components/assets/images/logo.jpg';
import { LoginWrapper, ButtonLogin, Image, Logo } from './styled';

const Login = () => {
    const navigate = useNavigate();

    const onFinish = (values) => {
        if (values.username === 'user' && values.password === 'test') {
            navigate("/worker-panel/rental");
          } else {
            console.log('Incorrect username or password!');
          }
      };
    
      return (
        <LoginWrapper>
            <Logo src={logo}/>
            <Form
            name="normal_login"
            className="login-form"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            >
            <Form.Item
                name="username"
                rules={[{ required: true, message: 'Please input your Username!' }]}
            >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
            </Form.Item>
            <Form.Item
                name="password"
                rules={[{ required: true, message: 'Please input your Password!' }]}
            >
                <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
                />
            </Form.Item>
            <Form.Item>
                <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
                </Form.Item>
        
                <a className="login-form-forgot" href="">
                Forgot password
                </a>
            </Form.Item>
        
            <Form.Item>
                <ButtonLogin type="primary" htmlType="submit" className="login-form-button">
                Log in
                </ButtonLogin>
                Or <a href="">register now!</a>
            </Form.Item>
            </Form>
            <Image src={sport} alt='sport image'/>
        </LoginWrapper>
      );
}

export default Login