//원래 안써도 되지만
import React from 'react';
import { Input, Form, Button } from 'antd';

const dummy = {
	isLoggedIn : true,
	imagePaths: [],
	mainPosts: [{
		User:{
			id: 1,
			nickname: '땅코',
		},
		content: '첫빵 게시물 이다.',
		img: 'https://s.pstatic.net/static/newsstand/up/2017/0424/nsd173111263.png'

	}],
};

// 훅스 문법 사용
const PostForm = () => {
	return (
        <Form style={{ marginBottom : '20px' }} encType="multipart/form-data">
            <Input.TextArea maxLength={140} placeholder="어떤일이 있었나요?" />
            <div>
                <Input type="file" multiple hidden />
                <Button>업로드</Button>
                <Button type="primary" style={{ float: 'right'}} htmlType="submit">쩩쩩</Button>
            </div>
            <div>
                {dummy.imagePaths.map((v, i) => {
                    return (
                        <div key={v} style={{ display:'inline-block'}}>
                            <img src={'http://localhost:3065/' + v} style={{ width:'200px'}} alt={v} />
                            <div>
                                <Button>제거</Button>
                            </div>
                        </div>
                    )
                })}
            </div>
        </Form>
    )
};
export default PostForm;