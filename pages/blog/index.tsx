import { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import styles from './index.module.css'
import Image from 'next/image'
import Pagination from '../../components/Pagination'
import { useState } from 'react'
import { Banner } from '../../components/Banner'
import PostMatter from '../../interfaces/PostMatter'
import { Info } from '../../components/Info'

type PostType = {
	slug: string,
	data: PostMatter
	content: string,
}

type PostArrayType = {
	allPosts: PostType[],
}

//https://i.imgur.com/3LHwugp.jpg
//https://i.imgur.com/a2597Fu.png
//https://i.imgur.com/wQZcxgN.jpg
//<Banner image="https://i.imgur.com/FXO8S4K.jpg" text="Blog"/>

export default function Blog({ allPosts }: PostArrayType) {
	const pageSize = 5;
	const [postList, setPostList] = useState([] as PostType[]);
	const handleOnChange = (currentPage: number) => {
		const max = currentPage * pageSize;
		const min = max - pageSize + 1;
		setPostList(allPosts.filter((_value, index) => index + 1 >= min && index + 1 <= max));
	};

	return (
		<>
			<NavBar/>
			<div className="lg:flex md:block bg-index-bg">
				<div className="block">
					<div className="bg-blog mt-0 lg:mr-6 lg:ml-40 h-min justify-center">
						<p className="text-center text-7xl text-white px-10 font-Roboto-Mono py-10 font-extrabold">Blog</p>
					</div>
					<div className="lg:ml-40 lg:mr-6">
						<Info color="#38596e" size={25} />
					</div>
				</div>
				<div id={styles.wholepage} className="p-5 lg:pr-56 bg-white">
					{
						postList.map((post, index) => (
							<div key={post.slug} id={styles.index} className="relative rounded-md mb-7 p-5 lg:flex md:block transition ease-in-out delay-75 bg-white text-blog-title hover:shadow-sep hover:bg-blog hover:text-white hover:-translate-x-1 hover:-translate-y-1 duration-300">
								<div id={styles.image} className="overflow-hidden m-2 lg:left-0 lg:my-auto pt-2">
									<Image
										src={post.data.thumbnail}
										alt="No Image"
										width={200}
										height={100}
										layout="intrinsic"
									/>
								</div>
								<div>
									<Link href={`blog/${post.slug}`}><a>{post.data.title}</a></Link>
									<p className="m-0 md:text-left">{post.data.date.replace("T", " ").split(".")[0]}</p>
								</div>
							</div>
						))
					}
					<Pagination page={1} pageSize={pageSize} totalPosts={allPosts.length} onChange={handleOnChange}/>
				</div>
			</div>
		</>
	);
}

export function getStaticProps() {
	const posts = getAllPosts();
	const allPosts = posts.map((post) => {
		return { 
			slug: post.slug, 
			data: post.data, 
			content: post.content 
		}
	}) as PostType[];
	return {
		props: {
			allPosts
		},
	};
}