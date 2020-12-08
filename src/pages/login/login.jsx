import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.png';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

/**
 * 登陆的路由组件
 */
export default class Login extends Component {

    handleSubmit = () => {
        return;
    };

    render() {
        return (
            <div className='login'>
                <header className='login-header'>
                    <img src={logo} alt='logo' />
                    <h1>数据管理系统</h1>
                </header>
                <section className='login-content'>
                    <h2>用户登录</h2>
                    <Form
                        name="normal_login"
                        className="login-form"
                        initialValues={{ remember: true }}
                        onFinish={this.handleSubmit}
                    >
                        <Form.Item
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input placeholder="Username" prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Form.Item>
                        <Form.Item

                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="Password"
                            />
                        </Form.Item>

                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}