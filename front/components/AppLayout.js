//원래 안써도 되지만
import React from 'react';
import { Menu, Input, Button } from 'antd';
import Link from 'next/link';
// 훅스 문법 사용
const AppLayout = ({children}) => {
	return (
		<div>
            <Menu mode="horizontal">
                <Menu.Item key="home"><Link href="/"><a>노드버드</a></Link></Menu.Item>
                <Menu.Item key="profile"><Link href="/profile"><a>프로필</a></Link></Menu.Item>
                <Menu.Item key="mail">
                    <Input.Search enterButton style={{ verticalAlign:'middle'}}/>
                </Menu.Item>
            </Menu>
            <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            {children}
        </div>
	);
};

export default AppLayout;