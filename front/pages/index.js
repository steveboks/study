//원래 안써도 되지만
import React from 'react';
import PostForm from '../components/PostForm';
import PostCard from '../components/PostCard';

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
const Home = () => {
	return (
		<>
		{dummy.isLoggedIn && <PostForm />}
		{dummy.mainPosts.map((c) => {
			return (
				<PostCard key={c} post={c}/>
			)
			
		})}
		</>
	);
};

export default Home;