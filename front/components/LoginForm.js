//원래 안써도 되지만
import React, {useCallback} from 'react';
import {Input, Button, Form } from 'antd';
import Link from 'next/link';
// 사인업에서 만든 커스텀훅을 재사용하기 위해 가져옴
import { useInput } from '../pages/signup';

// 훅스 문법 사용
const LoginForm = () => {
    const [id, onChangeId] = useInput('');
    const [password, onChangePassword] = useInput('');
    //리스너 // 커스텀 훅은 유즈콜백으로 감싸줌.
    const onSubmitForm = useCallback((e) => {
        e.preventDefault();
        console.log({
            id, password,
        });
    }, [id, password]);

	return (
            <Form onSubmit={onSubmitForm} style={{ padding: '20px'}}>
            <div>
                <label htmlFor="user-id">아이디</label>
                <br/>
                <Input name="user-id" value={id} onChange={onChangeId} required />
            </div>
            <div>
                <label htmlFor="user-password">패스워드</label>
                <br/>
                <Input name="user-password" value={password} onChange={onChangePassword} type="password" required />
            </div>
            <div>
                <Button type="primary" htmlType="submit" loading={false}>로그인</Button>
                <Link href="/signup"><a><Button>회원가입</Button></a></Link>
            </div>
            </Form>
	);
};

export default LoginForm;