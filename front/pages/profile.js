//원래 안써도 되지만
import React from 'react';
import Head from 'next/head';
import AppLayout from '../components/AppLayout';

// 훅스 문법 사용
const Profile = () => {
	return (
        <>
            <Head>
                <title>노드버드</title>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
                <script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
            </Head>
            <AppLayout>
                <div>프로필</div>
            </AppLayout>
        </>
	);
};

export default Profile;