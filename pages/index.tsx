import type { NextPage } from 'next';
import Head from 'next/head';
import { Info } from '../components/Info';
import NavBar from '../components/NavBar';
import styles from './index.module.css';

const Home: NextPage = () => {
	return (
		<>
			<Head>
				<title>Pierre</title>
				<link rel="image_src" href="https://i.imgur.com/y4qM2y1.png"/>
				<meta name="description" content="I'm a university student interested in CTF and full stack development. Welcome to my website!" />
			</Head>
			<NavBar/>
			<div className={styles.Home}>
				<h1 className="text-4xl font-extrabold tracking-wider">Hello</h1>
				<hr className="w-72 bg-white"/>
				<p className="mt-2.5 text-xs">CTF / Full stack / Computer vision</p>
				<Info color="white" size={25} />
			</div>
		</>
	);
};

export default Home;
