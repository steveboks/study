//원래 안써도 되지만
import React from 'react';
import { Input, Form, List, Button, Card, Icon } from 'antd';

// 훅스 문법 사용
const Profile = () => {
	return (
        <>
        <Form style={{ marginBottom: '20 px', border:'1px solid #999', padding:'20px'}}>
            <Input addonBefore="닉네임" />
            <Button type="primary">수정</Button>
        </Form>
        <List
            style={{ marginBottom:'20px'}}
            grid={{ gutter:4, xs:2, md:3}}
            size="small"
            header={<div>팔로잉목록</div>}
            loadMore={<Button style={{ width:'100%'}}>더 보기</Button>}
            bordered
            dataSource={['제로초', '바보', '노드버드오피셜']}
            renderItem={item => (
                <List.Item style={{ marginTop:'20px'}}>
                    <Card actions={[<Icon key="stop" type="stop" />]}>
                        <Card.Meta description={item} />
                    </Card>
                </List.Item>
            )}
        />
        <List
            style={{ marginBottom:'20px'}}
            grid={{ gutter:4, xs:2, md:3}}
            size="small"
            header={<div>팔로워목록</div>}
            loadMore={<Button style={{ width:'100%'}}>더 보기</Button>}
            bordered
            dataSource={['제로초', '바보', '노드버드오피셜']}
            renderItem={item => (
                <List.Item style={{ marginTop:'20px'}}>
                    <Card actions={[<Icon key="stop" type="stop" />]}>
                        <Card.Meta description={item} />
                    </Card>
                </List.Item>
            )}
        />
        </>
	);
};

export default Profile;