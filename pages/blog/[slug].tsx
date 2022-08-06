import { useRouter } from "next/router";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHTML";
import ErrorPage from "next/error";
import NavBar from "../../components/NavBar";
import styles from "./blog.module.css"

type Obj = {
	post: {
		slug: string,
		data: string,
		content: string,
	}
	content: string,
}

export default function Post({ post, content }: Obj) {
	const route = useRouter()
	if(!route.isFallback && !post?.slug) {
		return <ErrorPage statusCode={404}/>
	}
	return (
		<>
			<NavBar/>
			<div className={styles.wholepage}>
				<div>
					<div
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</div>
		</>
	);
}

type Params = {
	params: {
		slug: string
	}
}

export async function getStaticProps({ params }: Params) {
	const post = getPostBySlug(params.slug)
	const content = await markdownToHtml(post.content || '')

	return {
		props: {
			post,
			content,
		},
	}
}

export async function getStaticPaths() {
	const posts = getAllPosts()

	return {
		paths: posts.map((post) => {
			return {
				params: {
					slug: post.slug,
				},
			}
		}),
		fallback: false,
	}
}