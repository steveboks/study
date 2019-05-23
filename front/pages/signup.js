//원래 안써도 되지만
import React, {useState} from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';
import { Input, Form, Checkbox, Button } from 'antd';



// 훅스 문법 사용
const Signup = () => {
    //스테이트
    const [id, setId] = useState('');
    const [nick, setNick] = useState('');
    const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    //리스너
    const onSubmit = (e) => {
        e.preventDefault();
        // 패스워드 검증
        if(password !== passwordcheck){
            return setPasswordError(true);
        }
        if(!term){
            return setTermError(true);
        }
        console.log({
            id,
            nick,
            password,
            passwordcheck,
            term
        });
    };
    const onChangeId = (e) => {
        setId(e.target.value);
    };
    const onChangeNick = (e) => {
        setNick(e.target.value);
    };
    const onChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const onChangePasswordCheck = (e) => {
        // 입력값에 상태변화에 비밀번호 값이 일치하지 않는지 체크
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    };
    const onChangeTerm = (e) => {
        // 에러는 기본적으로 꺼준다.
        setTermError(false);
        setTerm(e.target.checked);
    };

	return (
        <>
            <Head>
                <title>노드버드</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
            </Head>
            <AppLayout>
                <Form onSubmit={onSubmit} style={{ padding:10}}>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nick} required onChange={onChangeNick} />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" value={password} type="password" required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호체크</label>
                        <br />
                        <Input name="user-password-check" value={passwordcheck} type="password" required onChange={onChangePasswordCheck} />
                        {passwordError && <div style={{ color:'red'}}>일치하지 않습니다.</div>}
                    </div>
                    <div>
                        <Checkbox name="user-term" value={term} onChange={onChangeTerm}>약관동의</Checkbox>
                        {termError && <div style={{ color:'red'}}>약관에 동의하셔야 합니다.</div>}
                    </div>
                    <div style={{ marginTop:10}}>
                        <Button type="primary" htmlType="submit">가입하기</Button>
                    </div>
                </Form>
                <div>사인업</div>
            </AppLayout>
        </>
	);
};

export default Signup;