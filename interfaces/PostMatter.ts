type PostMatter = {
	title: string,
	date: string,
	author: string,
	thumbnail: string
};

export default PostMatter;

/*
At the start of all posts must contain meta(comment)
---
title: 'Some Title'
date: '2022-07-30T07:33:55.520Z'
author: 'Pierre'
thumbnail: 'https://example.com/example.jpg'
---
*/