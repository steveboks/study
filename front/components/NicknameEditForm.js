//원래 안써도 되지만
import React from 'react';
import { Input, Form, Button } from 'antd';


// 훅스 문법 사용
const NicknameEditForm = () => {
	return (
        <Form style={{ marginBottom: '20 px', border:'1px solid #999', padding:'20px'}}>
        <Input addonBefore="닉네임" />
        <Button type="primary">수정</Button>
        </Form>
    )
}

export default NicknameEditForm;