//원래 안써도 되지만
import React from 'react';
import { Card, Avatar } from 'antd';

const dummy = {
    nickname: '뽁스',
    Post:[],
    Followings:[],
    Followers:[],
    isLoggedIn: false
};

// 훅스 문법 사용
const UserProfile = () => {
	return (
        <Card
            actions={[
                <div key="twit">아하<br/>{dummy.Post.length}</div>,
                <div key="following">팔로잉<br/>{dummy.Followings.length}</div>,
                <div key="follower">팔로워<br/>{dummy.Followers.length}</div>
            ]}
        >
            <Card.Meta
            avatar={<Avatar>{dummy.nickname[0]}</Avatar>}
            title={dummy.nickname}
            />
        </Card>
    )
}
export default UserProfile;