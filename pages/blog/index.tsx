import { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import styles from './index.module.css'

type AllType = {
	slug: string,
  data: {
		title: string,
		date: string,
		author: string,
	},
	content: string,
}

type AllArrayType = {
	allPosts: AllType[],
}

export default function Blog({ allPosts }: AllArrayType) {
	return (
		<>
			<NavBar/>
			<div className={styles.wholepage}>
				{
					allPosts.map((post) => (
						<div key={post.slug}>
							<Link href={`/blog/${post.slug}`}><a><strong>{post.data.title}</strong></a></Link> 
							<p>{post.data.date.replace("T", " ").split(".")[0]}</p>
						</div>
					))
				}
			</div>
		</>
	);
}

export async function getStaticProps() {
	const posts = getAllPosts()
	const allPosts = posts.map((post) => {return {slug: post.slug, data: post.data, content: post.content}})
	//console.log(allPosts)
	
	return {
		props: {
			allPosts
		},
	}
}