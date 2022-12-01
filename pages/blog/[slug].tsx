import { useRouter } from "next/router";
import { getAllPosts, getPostBySlug } from "../../lib/api";
import markdownToHtml from "../../lib/markdownToHTML";
import ErrorPage from "next/error";
import NavBar from "../../components/NavBar";
import styles from "./blog.module.css";
import Post from "../../interfaces/Post";

export default function BlogPost({ slug, content }: Post) {
	const route = useRouter();
	if(!route.isFallback && !slug) {
		return <ErrorPage statusCode={404}/>;
	}
	return (
		<>
			<NavBar/>
			<div className={styles.wholepage}>
				<div>
					<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.0/dist/katex.min.css" />
					<div
						dangerouslySetInnerHTML={{ __html: content }}
					/>
				</div>
			</div>
		</>
	);
};

type Paths = {
	params: {
		slug: string
	}
};

export async function getStaticProps({ params }: Paths) {
	const post = getPostBySlug(params.slug);
	const content = await markdownToHtml(post.content || '');
	const slug = post.slug;
	const data = post.data;

	return {
		props: {
			slug,
			data,
			content,
		} as Post,
	};
}

export async function getStaticPaths() {
	const posts = getAllPosts();
	const paths: Paths[] = posts.map((post) => ({
		params: {
			slug: post.slug,
		}
	}));

	return {
		paths: paths,
		fallback: false,
	};
};