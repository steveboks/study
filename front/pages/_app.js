//원래 안써도 되지만
import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';
import AppLayout from '../components/AppLayout';

const NodeBird = ({Component}) => {
    return (
		<>
			<Head>
				<title>노드버드</title>
				<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.css" />
				<script src="https://cdnjs.cloudflare.com/ajax/libs/antd/3.18.2/antd.js" />
			</Head>
			<AppLayout>
                <Component />
			</AppLayout>
		</>
    );
};

// 검증 검사 : 타입스크립트는 프로타입스를 안쓴다. 자체적인 걸 쓴다.
NodeBird.propTypes = {
    Component : PropTypes.elementType,
}

export default NodeBird;