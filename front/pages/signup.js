//원래 안써도 되지만
import React, {useState, useCallback} from 'react';
import { Input, Form, Checkbox, Button } from 'antd';

// 프로타입스 테스트 : TextInput 컴포넌트는 부모로부터 문자열인 값을 기대하고 있는 시나리오임.
// 프로그램의 안정성을 높일 수 있다.
import PropTypes from 'prop-types';
const TextInput = ({value}) => {
    return (
        <div>{value}</div>
    )
};
TextInput.propTypes = {
    value: PropTypes.string,
};

export const useInput = (initValue = null) => {
    const [value, setter] = useState(initValue);
    const handler = useCallback((e) => { 
        setter(e.target.value); 
    }, []);
    return [value, handler];
};

// 훅스 문법 사용
const Signup = () => {
    //스테이트
    // 커스텀 훅으로 대체
    //const [id, setId] = useState('');
    //const [nick, setNick] = useState('');
    //const [password, setPassword] = useState('');
    const [passwordcheck, setPasswordCheck] = useState('');
    const [term, setTerm] = useState(false);
    const [passwordError, setPasswordError] = useState(false);
    const [termError, setTermError] = useState(false);

    // 커스텀훅 추가 : 원래 여기에 커스텀훅이 있었는데 외부에서도 사용가능하게 밖으로 빼게 됨 대신 export 추가됨
    // const useInput = (initValue = null) => {
    //     const [value, setter] = useState(initValue);
    //     const handler = useCallback((e) => { 
    //         setter(e.target.value); 
    //     }, []);
    //     return [value, handler];
    // };
    const [id, onChangeId] = useInput('');
    const [nick, onChangeNick] = useInput('');
    const [password, onChangePassword] = useInput('');


    //리스너
    const onSubmit = useCallback((e) => {
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
    }, [password, passwordcheck, term]);
    
    // 커스텀 훅으로 대체
    // const onChangeId = (e) => {
    //     setId(e.target.value);
    // };
    // const onChangeNick = (e) => {
    //     setNick(e.target.value);
    // };
    // const onChangePassword = (e) => {
    //     setPassword(e.target.value);
    // };
    const onChangePasswordCheck = useCallback((e) => {
        // 입력값에 상태변화에 비밀번호 값이 일치하지 않는지 체크
        setPasswordError(e.target.value !== password);
        setPasswordCheck(e.target.value);
    }, [password]);
    const onChangeTerm = useCallback((e) => {
        // 에러는 기본적으로 꺼준다.
        setTermError(false);
        setTerm(e.target.checked);
    }, []);


	return (
        <>
            <Form onSubmit={onSubmit} style={{ padding:10}}>
                
                <TextInput value="135" />
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
        </>
	);
};

export default Signup;