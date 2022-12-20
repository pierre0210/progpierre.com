import { NextPage } from 'next';
import Head from 'next/head';
import Link from 'next/link';
import NavBar from '../components/NavBar';
import styles from './news.module.css';

const News : NextPage = () => {
	return(
		<>
			<Head>
				<title>News</title>
				<link rel="image_src" href="https://i.imgur.com/y4qM2y1.png"/>
				<meta name="description" content="New things about progpierre.com" />
			</Head>
			<NavBar/>
			<div className={styles.News}>
				<div className="m-auto">
					<h3>Finish building <Link href="https://progpierre.com"><a>progpierre.com</a></Link> v1</h3>
					<p>Wed Aug 03 2022 22:27:37 GMT+0800 (台北標準時間)</p>
				</div>
			</div>
		</>
	);
};

export default News;