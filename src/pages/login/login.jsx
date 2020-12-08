import React, { Component } from 'react';
import './login.less';
import logo from './images/logo.png';
import { Form, Input, Button } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Item = Form.Item; // 不能卸写在import之前

/**
 * 登陆的路由组件
 */
export default class Login extends Component {

    handleSubmit = (event) => {
        const { username, password } = event;
        console.log(' 点击了登陆: ', 'username = ', username, 'password = ', password);
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
                        <Item
                            prefix={<LockOutlined className="site-form-item-icon" />}
                            name="username"
                            rules={[{ required: true, message: '请输入用户名!' }]}
                        >
                            <Input placeholder="用户名" prefix={<UserOutlined className="site-form-item-icon" />} />
                        </Item>
                        <Item

                            name="password"
                            rules={[{ required: true, message: '请输入密码!' }]}
                        >
                            <Input
                                prefix={<LockOutlined className="site-form-item-icon" />}
                                type="password"
                                placeholder="密码"
                            />
                        </Item>

                        <Item>
                            <Button type="primary" htmlType="submit" className="login-form-button">
                                登录
                            </Button>
                        </Item>
                    </Form>
                </section>
            </div>
        )
    }
}

/**
 * 1. 前台表单验证
 * 2. 收集表单输入数据
 */