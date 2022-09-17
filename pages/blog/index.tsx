import { NextPage } from 'next'
import Link from 'next/link'
import NavBar from '../../components/NavBar'
import { getAllPosts, getPostBySlug } from '../../lib/api'
import styles from './index.module.css'
import Image from 'next/image'

type AllType = {
	slug: string,
  data: {
		title: string,
		date: string,
		author: string,
		thumbtail: string,
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
						<div key={post.slug} id={styles.index} className="mx-auto mb-5 flex flex-row relative">
							<div id={styles.image} className="m-2 left-0 my-auto">
								<Image
									src={post.data.thumbtail}
									alt="No Image"
									width={120}
									height={60}
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